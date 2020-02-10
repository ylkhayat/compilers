var { Transition } = require('./index.js');

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
          [inp]: new Transition({ inp, out0: out }),
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
          [inp]: new Transition({ inp, out1: out }),
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
        currentTransition.add({ oute: out });
      } else {
        this.transitionEntities = {
          ...this.transitionEntities,
          [inp]: new Transition({ inp, oute: out }),
        };
      }
      this.states = [...this.states, inp, out];
    }
  });
  Object.keys(this.transitionEntities).forEach(key => {
    transitionEntity = this.transitionEntities[key];
    this.transitionFunctions = {
      ...this.transitionFunctions,
      ...transitionEntity.get(),
    };
  });
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
    return this.runRecc(symbs, lastVisited);
  };
  NFA.prototype.runRecc = function(symbs, lastVisited) {
    let tempLastVisited;
    if (symbs === [])
      return {
        state: lastVisited,
        pass: this.acceptStates.includes(lastVisited),
      };
    let reccResults = [];
    symbs.forEach(symb => {
      lastVisits = this.evaluate(lastVisited, symb);
      lastVisits.forEach(lastVisit => {
        const reccResult = this.runRecc(symbs.slice(0, 1), lastVisit);
        const { state, pass } = reccResult;
        tempLastVisited = state;
        if (pass) return reccResult;
      });
    });
    return { state: tempLastVisited, pass: false };
  };
}

module.exports = { NFA };
