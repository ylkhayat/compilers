var assert = require('assert');
var {DFA} = require('../DFA');
const chalk = require('chalk');

let tests1 = [
  {
    dfaString: 's0,s0,s1;s1,s2,s3;s2,s3,s2;s3,s3,s3#s0,s3',
    tests: [
      {input: '10100', output: true},
      {input: '00010', output: false},
      {input: '0101000', output: true},
      {input: '1011111', output: false},
      {input: '11011', output: true},
    ],
  },
  {
    dfaString: 's0,s0,s1;s1,s1,s2;s2,s2,s1#s2',
    tests: [
      {input: '11011', output: true},
      {input: '1011011', output: false},
      {input: '1010101', output: true},
      {input: '1100110011', output: true},
      {input: '111101', output: false},
    ],
  },
];

function formalizer(allStates, acceptStates) {
  let coloredStates = 'States [';
  allStates.forEach(state => {
    coloredStates +=
      (acceptStates.includes(state) ? chalk.green(state) : state) + ', ';
  });
  return coloredStates.substring(0, coloredStates.length - 2) + ']';
}

tests1.forEach(({dfaString, tests}, i) => {
  var dfa = new DFA(dfaString);
  let formalized = formalizer(dfa.getStates(), dfa.getAcceptStates());
  const [transitions, accepts] = dfaString.split('#');
  describe(
    'DFA#' +
      (i + 1) +
      " with DFAString '" +
      chalk.yellow(transitions) +
      '#' +
      chalk.green(accepts) +
      "'",
    function() {
      tests.forEach(({input, output}) => {
        describe(
          formalized + ' Calling method dfa.run(' + input + ')',
          function() {
            const {pass, state} = dfa.run(input);
            it(
              chalk.grey(
                'Should stop at state ' +
                  chalk.blue(state) +
                  ' & return ' +
                  chalk.yellow(output) +
                  '.',
              ),
              function() {
                assert.equal(pass, output);
              },
            );
          },
        );
      });
    },
  );
});
