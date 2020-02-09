function Transition({ in, out0, out1}) {
  this.in = in;
  this.out0 = out0;
  this.out1 = out1;
  Transition.prototype.get = function() {
    return {
      [this.in]: { "0": this.out0, "1": this.out1, 'e':this.oute }
    };
  };
}

function DFA(dfaDesc = "#") {
  const [transitionString = "", acceptString = ""] = dfaDesc.split("#");
  const transitionFns = transitionString.split(";");
  this.acceptStates = acceptString.split(",");
  this.transitionFunctions = {};
  this.states = [];
  transitionFns.forEach(transition => {
    const [init, on0, on1] = transition.split(",");
    this.transitionFunctions = {
      ...this.transitionFunctions,
      ...new Transition({in, out0, out1}).get()
    };
    this.states = [...this.states, init, on0, on1];
  });
  this.states = [...new Set(this.states)];
  DFA.prototype.evaluate = function(s, input) {
    return this.transitionFunctions[s][input];
  };
  DFA.prototype.getAcceptStates = function(arguments) {
    return this.acceptStates;
  };
  DFA.prototype.getStates = function(arguments) {
    return this.states;
  };
  DFA.prototype.run = function(string) {
    const symbs = string.split("");
    let lastVisited = "s0";
    symbs.forEach(symb => {
      lastVisited = this.evaluate(lastVisited, symb);
    });
    return {
      state: lastVisited,
      pass: this.acceptStates.includes(lastVisited)
    };
  };
}

function NFA(nfaDesc = "#") {
  const [
    zeroTransitionString = "",
    oneTransitionString = "",
    epsTransitionString = "",
    acceptString = ""
  ] = nfaDesc.split("#");
    const zeroTransitionFns = zeroTransitionString.split(";");
    const oneTransitionFns = oneTransitionString.split(";");
    const epsTransitionFns = epsTransitionString.split(";");
    this.acceptStates = acceptString.split(",");
  this.transitionFunctions = {};
  this.states = [];
  zeroTransitionFns.forEach(zeroTransition => {
    const [in, out ] = transition.split(",");
    this.transitionEntities = {
      ...this.transitionFunctions,
      [in]: new Transition({in, out0:out})
    };
    this.states = [...this.states, in, out0, out1];
  });
  oneTransitionFns.forEach((oneTransition) => {
        const [in, out ] = transition.split(",");
  });

  this.states = [...new Set(this.states)];
}

module.exports = { DFA };
require("make-runnable");
