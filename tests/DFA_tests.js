var assert = require("assert");
var { DFA } = require("../DFA");
const chalk = require("chalk");

let tests1 = [
  {
    dfaString: "s0,s1,s0;s1,s0,s2;s2,s1,s2#s2",
    tests: [
      { input: "00", output: false },
      { input: "01", output: true },
      { input: "011", output: true },
      { input: "010", output: false },
      { input: "0101", output: true }
    ]
  },
  {
    dfaString: "s0,s1,s0;s1,s0,s2;s2,s1,s0#s1,s2",
    tests: [
      { input: "00", output: false },
      { input: "01", output: true },
      { input: "011", output: false },
      { input: "010", output: true }
    ]
  }
];

function formalizer(allStates, acceptStates) {
  let coloredStates = "States [";
  allStates.forEach(state => {
    coloredStates +=
      (acceptStates.includes(state) ? chalk.green(state) : state) + ", ";
  });
  return coloredStates.substring(0, coloredStates.length - 2) + "]";
}

tests1.forEach(({ dfaString, tests }, i) => {
  var dfa = new DFA(dfaString);
  let formalized = formalizer(dfa.getStates(), dfa.getAcceptStates());
  const [transitions, accepts] = dfaString.split("#");
  describe(
    "DFA#" +
      (i + 1) +
      " with DFAString '" +
      chalk.yellow(transitions) +
      "#" +
      chalk.green(accepts) +
      "'",
    function() {
      tests.forEach(({ input, output }) => {
        describe(
          formalized + " Calling method dfa.run(" + input + ")",
          function() {
            const { pass, state } = dfa.run(input);
            it(
              chalk.grey(
                "Should stop at state " +
                  chalk.blue(state) +
                  " & return " +
                  chalk.yellow(output) +
                  "."
              ),
              function() {
                assert.equal(pass, output);
              }
            );
          }
        );
      });
    }
  );
});
