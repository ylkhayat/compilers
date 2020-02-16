var { Transition } = require('./index.js');
const chalk = require('chalk');

function computeEpsClosureTransition(transition, nfa) {
  const usedKeys = [];
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
    inp: epsClosureInp.join(','),
    out0: epsClosure0.join(','),
    out1: epsClosure1.join(','),
    oute: [epsClosureInp.join(',')],
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
  this.nfaTransitions = [this.transitionEntities['s0'].transformMultToSing()];
  this.nfaTransitionStates = [this.transitionEntities['s0'].transformMultToSing().getStates()];
  for (var i = 0; i < this.nfaTransitions.length; i++) {
    transitionEntity = this.nfaTransitions[i];
    computedEpsClosureTransitionEntity = computeEpsClosureTransition(transitionEntity, this);
    isValidTransition = computedEpsClosureTransitionEntity.valid();
    statesInNfa = this.nfaTransitions.reduce(
      (accum, nfaTransition) => [...accum, ...nfaTransition.getStates()],
      []
    );
    if (i < 10) console.log('NFA Transitions', this.nfaTransitions, 'States in NFA', statesInNfa);
    if (isValidTransition) {
      computeEpsClosureStates = computedEpsClosureTransitionEntity.getStates();
      // console.log('New Transition', computedEpsClosureTransitionEntity);
      // console.log('States in New Transition', computeEpsClosureStates);
      // console.log('States in NFA', statesInNfa);
      filteredEpsClosureRemain = computeEpsClosureStates.filter(state =>
        statesInNfa.includes(state)
      );
      this.nfaTransitions = mergeArray(statesInNfa, computeEpsClosureStates);
      console.log('Merged Arrays', this.nfaTransitions);
      this.transitionEntities = {
        ...this.transitionEntities,
        [computedEpsClosureTransitionEntity.getInp()]: computedEpsClosureTransitionEntity,
      };
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
