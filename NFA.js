var { Transition } = require('./index.js');
const chalk = require('chalk');

function commaJoin(input) {
  return (Array.isArray(input) ? [input] : input).join(',');
}
function computeEpsClosureTransition(transition, nfa) {
  const usedKeys = [];
  console.log('ANA HENA', transition);
  const oute = transition.getEps();
  const inp = [];
  epsClosureInp = reccEpsClosure(oute, inp, usedKeys, nfa);
  epsClosure0 = [];
  epsClosure1 = [];
  epsClosureInp.forEach(inp => {
    zeroes = nfa.transitionEntities[inp].getZero();
    ones = nfa.transitionEntities[inp].getOne();
    epsClosure0 = [...epsClosure0, ...(Array.isArray(zeroes) ? zeroes : [zeroes])];
    epsClosure1 = [...epsClosure1, ...(Array.isArray(ones) ? ones : [ones])];
  });
  return new Transition({
    inp: commaJoin(epsClosureInp),
    out0: commaJoin(epsClosure0),
    out1: commaJoin(epsClosure1),
    oute: [commaJoin(epsClosureInp)],
  });
}

function reccEpsClosure(arr, inp, usedKeys, nfa) {
  let output = inp;
  newArr = arr.filter(function(item) {
    return !usedKeys.includes(item);
  });
  if (newArr === []) return inp;
  newArr.forEach(eps => {
    if (!usedKeys.includes(eps)) {
      usedKeys = [...usedKeys, eps];
      const epsKey = nfa.transitionEntities[eps];
      const oute = epsKey.getEps();
      output = [...new Set([...output, eps, ...reccEpsClosure(oute, inp, usedKeys, nfa)])];
    }
  });
  return output;
}

function mergeArray(array1, array2) {
  const result_array = [];
  const arr = array1.concat(array2);
  let len = arr.length;
  const assoc = {};

  while (len--) {
    const item = arr[len];

    if (!assoc[item]) {
      result_array.unshift(item);
      assoc[item] = true;
    }
  }

  return result_array;
}

function NFA(nfaDesc = '#') {
  const [
    zeroTransitionString = '',
    oneTransitionString = '',
    epsTransitionString = '',
    acceptString = '',
  ] = nfaDesc.split('#');
  const zeroTransitionFns = zeroTransitionString.split(';');
  const oneTransitionFns = oneTransitionString.split(';');
  const epsTransitionFns = epsTransitionString.split(';');
  this.acceptStates = acceptString.split(',');
  this.transitionFunctions = {};
  this.transitionEntities = {};
  this.states = [];
  zeroTransitionFns.forEach(zeroTransition => {
    if (zeroTransition) {
      const [inp, out] = zeroTransition.split(',');
      currentTransition = this.transitionEntities[inp];
      if (currentTransition) {
        currentTransition.add({ out0: out });
      } else {
        this.transitionEntities = {
          ...this.transitionEntities,
          [inp]: new Transition({ inp, out0: out, oute: inp }),
        };
      }
      this.states = [...this.states, inp, out];
    }
  });
  oneTransitionFns.forEach(oneTransition => {
    if (oneTransition) {
      const [inp, out] = oneTransition.split(',');
      currentTransition = this.transitionEntities[inp];
      if (currentTransition) {
        currentTransition.add({ out1: out });
      } else {
        this.transitionEntities = {
          ...this.transitionEntities,
          [inp]: new Transition({ inp, out1: out, oute: inp }),
        };
      }
      this.states = [...this.states, inp, out];
    }
  });
  epsTransitionFns.forEach(epsTransition => {
    if (epsTransition) {
      const [inp, out] = epsTransition.split(',');
      currentTransition = this.transitionEntities[inp];
      if (currentTransition) {
        currentTransition.add({ oute: [out, inp] });
      } else {
        this.transitionEntities = {
          ...this.transitionEntities,
          [inp]: new Transition({ inp, oute: [out, inp] }),
        };
      }
      this.states = [...this.states, inp, out];
    }
  });

  // console.log('KOLO', this.transitionEntities);
  this.nfaTransitions = [this.transitionEntities['s0'].transformMultToSing()];
  this.nfaTransitionStates = [this.transitionEntities['s0'].transformMultToSing().getStates()];

  for (var i = 0; i < this.nfaTransitions.length; i++) {
    transitionEntity = this.nfaTransitions[i];
    // TODO HENA transitionEntity ghalat
    computedEpsClosureTransitionEntity = computeEpsClosureTransition(transitionEntity, this);
    isValidTransition = computedEpsClosureTransitionEntity.valid();
    statesInNfa = this.nfaTransitions.reduce(
      (accum, nfaTransition) => [...accum, ...nfaTransition.getStates()],
      []
    );
    if (isValidTransition) {
      computeEpsClosureStates = computedEpsClosureTransitionEntity.getStates();
      filteredEpsClosureRemain = computeEpsClosureStates.filter(state =>
        statesInNfa.includes(state)
      );
      this.nfaTransitionStates = mergeArray(statesInNfa, computeEpsClosureStates);
      console.log('NFA Transition States', this.nfaTransitionStates);
      console.log('NFA Transitions', this.nfaTransitions);

      /* NFATransitions keeps track of all Transitions in the NFA */
      this.nfaTransitions = {
        ...this.nfaTransitions,
        computedEpsClosureTransitionEntity,
      };

      /* TransitionEntities object keyed by the input with values as Transitions */
      this.transitionEntities = {
        ...this.transitionEntities,
        [computedEpsClosureTransitionEntity.getInp()]: computedEpsClosureTransitionEntity,
      };

      /* TransitionFunctions actual object to get from the outputs */
      this.transitionFunctions = {
        ...this.transitionFunctions,
        ...computedEpsClosureTransitionEntity.get(),
      };
    }
  }
  this.states = [...new Set(this.states)];

  NFA.prototype.evaluate = function(s, input) {
    return this.transitionFunctions[s] && this.transitionFunctions[s][input];
  };
  NFA.prototype.getAcceptStates = function() {
    return this.acceptStates;
  };
  NFA.prototype.getStates = function() {
    return this.states;
  };
  NFA.prototype.run = function(string) {
    const symbs = string.split('');
    let lastVisited = 's0';
    symbs.forEach(symb => {
      lastVisited = this.evaluate(lastVisited, symb) || lastVisited;
    });
    return {
      state: lastVisited,
      pass: this.acceptStates.includes(lastVisited),
    };
  };
}

module.exports = { NFA };
