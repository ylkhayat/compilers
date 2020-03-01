var assert = require('assert');
var { DFA } = require('../DFA');
const chalk = require('chalk');

let tests1 = [
  {
    dfaString: 's0,s0,s1,00;s1,s0,s2,01;s2,s3,s2,10;s3,s2,s3,11#s1,s3',
    tests: [
      { input: '00111', output: '' },
      { input: '0011100', output: '' },
      { input: '110101', output: '' },
      { input: '1101010', output: '' },
      { input: '000', output: '' },
    ],
  },
  {
    dfaString: 's0,s1,s0,00;s1,s3,s0,01;s2,s1,s3,10;s3,s2,s3,11#s3',
    tests: [
      { input: '10000', output: '' },
      { input: '00', output: '' },
      { input: '00001', output: '' },
      { input: '10101', output: '' },
      { input: '10', output: '' },
    ],
  },
];

function formalizer(allStates, acceptStates) {
  let coloredStates = 'States [';
  allStates.forEach(state => {
    coloredStates += (acceptStates.includes(state) ? chalk.green(state) : state) + ', ';
  });
  return coloredStates.substring(0, coloredStates.length - 2) + ']';
}

tests1.forEach(({ dfaString, tests }, i) => {
  var dfa = new DFA(dfaString, true);
  let formalized = formalizer(dfa.getStates(), dfa.getAcceptStates());
  const [transitions, accepts] = dfaString.split('#');
  describe(
    'DFA Fallback#' +
      (i + 1) +
      " with DFAString '" +
      chalk.yellow(transitions) +
      '#' +
      chalk.green(accepts) +
      "'",
    function() {
      tests.forEach(({ input, output }) => {
        describe(formalized + ' Calling method dfa.run(' + input + ')', function() {
          const { actions, state } = dfa.run(input);
          it(
            chalk.grey(
              'Should stop at state ' +
                chalk.blue(state) +
                ' & return ' +
                chalk.yellow(output) +
                '.'
            ),
            function() {
              assert.equal(actions, output);
            }
          );
        });
      });
    }
  );
});
