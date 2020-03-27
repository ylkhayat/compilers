var {Transition} = require('./index.js');

function DFA(dfaDesc = '#', fallback = false) {
  const [transitionString = '', acceptString = ''] = dfaDesc.split('#');
  const transitionFns = transitionString.split(';');
  this.fallback = fallback;
  this.acceptStates = acceptString.split(',');
  this.transitionFunctions = {};
  this.states = [];
  transitionFns.forEach(transition => {
    const [inp, out0, out1, outa] = transition.split(',');
    this.transitionFunctions = {
      ...this.transitionFunctions,
      ...new Transition({inp, out0, out1, outa}).get(),
    };
    this.states = [...this.states, inp, out0, out1];
  });
  this.states = [...new Set(this.states)];
  DFA.prototype.evaluate = function(s, input) {
    return this.transitionFunctions[s] && this.transitionFunctions[s][input];
  };
  DFA.prototype.getAcceptStates = function() {
    return this.acceptStates;
  };
  DFA.prototype.getStates = function() {
    return this.states;
  };
  DFA.prototype.run = function(string) {
    const symbs = string.split('');
    let lastVisited = 's0';
    if (this.fallback) {
      let actions = '';
      let lastAccepted = {
        state: null,
        index: -1,
      };

      let lastSavedAccept = false;
      let saveNext = false;
      const length = symbs.length;
      for (var i = 0; i < length; ) {
        let symb = symbs[i];
        lastVisited = this.evaluate(lastVisited, symb);
        const accepted = this.acceptStates.includes(lastVisited);
        if (accepted) {
          lastAccepted = {state: lastVisited, index: i};
        }
        if (i === length - 1) {
          const {state, index} = lastAccepted;
          lastAccepted = {state: null, index: -1};
          if (index === i) {
            actions += this.evaluate(lastVisited, 'a');
            break;
          } else {
            if (index === -1) {
              actions += this.evaluate(lastVisited, 'a');
              break;
            } else {
              i = index + 1;
              lastVisited = 's0';
              actions += this.evaluate(state, 'a');
            }
            continue;
          }
        }
        i++;
      }
      return {
        state: lastVisited,
        actions,
      };
    } else {
      symbs.forEach(symb => {
        lastVisited = this.evaluate(lastVisited, symb) || lastVisited;
      });
      return {
        state: lastVisited,
        pass: this.acceptStates.includes(lastVisited),
      };
    }
  };
}

module.exports = {DFA};
