function Transition(init, input0, input1) {
  this.init = init;
  this.input0 = input0;
  this.input1 = input1;
  Transition.prototype.get = function() {
    return {
      [this.init]: { "0": this.input0, "1": this.input1 }
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
      ...new Transition(init, on0, on1).get()
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

module.exports = { DFA };
require("make-runnable");

// new DFA(['s0','s1','s2','s3'],,'',,[])
