var { Transition } = require('./index.js');
const chalk = require('chalk');
const _ = require('lodash');

function joinSet(input) {
  let newState = '';
  if (input instanceof Set || input instanceof Array) {
    return [...input].join(',');
  } else {
    newState = input;
  }
  return newState;
}

function computeTransition(key, transitions, epsClosures) {
  if (key instanceof Set) {
    const oneSet = new Set();
    const zeroSet = new Set();
    for (var state of key) {
      const destTransition = transitions[state];
      const zeroes = destTransition.getZero();
      const joinedZeroes = epsClosures[joinSet(zeroes)];
      if (joinedZeroes) {
        for (var zero of joinedZeroes) {
          zeroSet.add(zero);
        }
      } else {
        for (var zero of zeroes) {
          const array = transitions[zero].getEps();
          if (array)
            array.forEach(item => {
              zeroSet.add(item);
            });
          else zeroSet.add(zero);
        }
      }
      const ones = destTransition.getOne();
      const joinedOnes = epsClosures[joinSet(ones)];
      if (joinedOnes) {
        for (var one of joinedOnes) {
          oneSet.add(one);
        }
      } else {
        for (var one of ones) {
          const array = transitions[one].getEps();
          if (array) {
            array.forEach(item => {
              oneSet.add(item);
            });
          } else oneSet.add(one);
        }
      }
    }
    return new Transition({ inp: new Set([...key]), out0: zeroSet, out1: oneSet });
  } else {
    const destTransition = transitions[key];
    const zeroes = destTransition.getZero();
    const ones = destTransition.getOne();
    const joinedZeroes = epsClosures[joinSet(zeroes)];
    if (joinedZeroes) {
      for (var zero of joinedZeroes) {
        zeroSet.add(zero);
      }
    } else {
      for (var zero of zeroes) {
        const array = transitions[zero].getEps();
        if (array && array.length)
          array.forEach(item => {
            zeroSet.add(item);
          });
        else zeroSet.add(zero);
      }
    }
    const joinedOnes = epsClosures[joinSet(ones)];
    if (joinedOnes) {
      for (var one of joinedOnes) {
        oneSet.add(one);
      }
    } else {
      for (var one of ones) {
        const array = transitions[one].getEps();
        if (array && array.length)
          array.forEach(item => {
            oneSet.add(item);
          });
        else oneSet.add(one);
      }
    }
    if (state === 's1') console.log(state, 'Ones', oneSet);
  }
  return new Transition({ inp: new Set([...key]), out0: zeroSet, out1: oneSet });
  // }
}

function computeEpsClosure(set, transitions) {
  if (set instanceof Set) {
    const computedSet = new Set([...set]);
    for (var state of set) {
      const transition = transitions[state];
      let oute = [];
      if (transition)
        oute = transition.getEps().forEach(epsState => {
          computedSet.add(epsState);
        });
    }
    return computedSet;
  } else {
    const arrayParts = set.split(',');
    const computedSet = new Set(arrayParts);
    arrayParts.forEach(state => {
      const transition = transitions[state];
      let oute = [];
      if (transition)
        oute = transition.getEps().forEach(epsState => {
          computedSet.add(epsState);
        });
    });
    return computedSet;
  }
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
        this.transitionEntities[inp] = currentTransition.add({ out0s: [out] });
      } else {
        this.transitionEntities = {
          ...this.transitionEntities,
          [inp]: new Transition({
            inp: new Set([inp]),
            out0: new Set([out]),
            oute: new Set([inp]),
          }),
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
        this.transitionEntities[inp] = currentTransition.add({ out1s: [out] });
      } else {
        this.transitionEntities = {
          ...this.transitionEntities,
          [inp]: new Transition({
            inp: new Set([inp]),
            out1: new Set([out]),
            oute: new Set([inp]),
          }),
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
        this.transitionEntities[inp] = currentTransition.add({ outes: [out, inp] });
      } else {
        this.transitionEntities = {
          ...this.transitionEntities,
          [inp]: new Transition({ inp: new Set([inp]), oute: new Set([out, inp]) }),
        };
      }
      this.states = [...this.states, inp, out];
    }
  });
  this.allEpsClosures = {};
  this.computedAcceptStates = new Set();
  const initialState = this.transitionEntities['s0'];
  this.transitionFunctions = { [initialState.getInp()]: initialState.get() };
  this.nfaTransitionStates = new Set(initialState.getInp());
  for (var transitionState of this.nfaTransitionStates) {
    const epsClosures = computeEpsClosure(transitionState, this.transitionEntities);
    const newStateKey = joinSet([...epsClosures].sort());
    this.allEpsClosures = {
      ...this.allEpsClosures,
      [transitionState]: epsClosures,
    };
    for (var epsClosure of epsClosures) {
      if (this.acceptStates.includes(epsClosure)) {
        this.computedAcceptStates.add(newStateKey);
      }
    }

    computedStateTransition = this.transitionEntities[newStateKey];
    const newTranstition = computeTransition(
      epsClosures,
      this.transitionEntities,
      this.allEpsClosures
    );
    if (!computedStateTransition)
      this.transitionEntities = {
        ...this.transitionEntities,
        [newStateKey]: newTranstition,
      };
    const newTransitionStates = newTranstition.getStates();
    for (var state of newTransitionStates) {
      this.nfaTransitionStates.add(state);
    }
    this.transitionFunctions = {
      ...this.transitionFunctions,
      ...newTranstition.get(),
    };
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
      lastVisited = this.evaluate(lastVisited, symb);
      if (lastVisited === '') {
        return {
          state: lastVisited,
          pass: this.computedAcceptStates.has(lastVisited),
        };
      }
    });
    let accepted = false;
    if (lastVisited) {
      let splitString = lastVisited.split(',');
      for (var acceptState of this.computedAcceptStates) {
        let acceptStateArray = acceptState.split(',');
        accepted |= _.isEqual(splitString.sort(), acceptStateArray.sort());
      }
    }
    return {
      state: lastVisited,
      pass: accepted,
    };
  };
}

module.exports = { NFA };
