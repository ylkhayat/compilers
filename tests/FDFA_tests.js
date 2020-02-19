var assert = require('assert');
var { DFA } = require('../DFA');
const chalk = require('chalk');

let tests1 = [
  {
    dfaString: 's0,s0,s1,00;s1,s2,s1,01;s2,s0,s3,10;s3,s3,s3,11#s0,s1,s2',
    tests: [{ input: '1011100', output: '1000' }],
  },
  {
    dfaString: 's0,s0,s1,00;s1,s2,s1,01;s2,s0,s3,10;s3,s3,s3,11#',
    tests: [
      { input: '1', output: '01' },
      { input: '10', output: '10' },
      { input: '100', output: '00' },
    ],
  },
  {
    dfaString: 's0,s0,s1,00;s1,s2,s1,01;s2,s0,s3,10;s3,s3,s3,11#s3',
    tests: [
      { input: '101', output: '11' },
      { input: '10', output: '10' },
      { input: '100', output: '00' },
    ],
  },
  {
    dfaString: 's0,s1,s3,000;s1,s2,s3,001;s2,s2,s4,010;s3,s1,s4,011;s4,s2,s4,100#s2,s4',
    tests: [
      { input: '01110110', output: '010' },
      { input: '0101001', output: '100' },
      { input: '1010', output: '001' },
      { input: '101011001', output: '100' },
      { input: '11110', output: '010' },
    ],
  },
  {
    dfaString: 's0,s1,s0,11;s1,s1,s2,10;s2,s1,s3,01;s3,s1,s0,00#s2,s3',
    tests: [
      { input: '01110', output: '0010' },
      { input: '1101111', output: '0011' },
      { input: '11001000', output: '0110' },
      { input: '0110111', output: '0011' },
      { input: '10110010', output: '0110' },
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
