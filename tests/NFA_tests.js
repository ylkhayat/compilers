var assert = require('assert');
var { NFA } = require('../NFA');
const chalk = require('chalk');

let tests1 = [
  {
    nfaString: 's0,s1;s1,s2;s2,s3#s0,s0;s1,s1;s2,s3;s3,s3#s1,s0;s2,s1;s3,s2#s1,s2,s3',
    tests: [
      { input: '0100', output: true },
      { input: '1111', output: false },
      { input: '01000', output: true },
      { input: '00', output: true },
      { input: '1101100', output: true },
    ],
  },
  {
    nfaString: 's0,s1;s1,s3;s3,s3#s0,s2;s2,s3;s3,s3#s1,s2;s3,s2#s3',
    tests: [
      { input: '0101100', output: true },
      { input: '010101', output: true },
      { input: '111010', output: true },
      { input: '10100', output: false },
      { input: '10101', output: false },
    ],
  },
  // {
  //   nfaString: 's0,s0;s1,s2;s3,s3#s0,s0;s0,s1;s2,s3;s3,s3#s1,s2#s3',
  //   tests: [
  //     { input: '11', output: true },
  //     { input: '1011', output: true },
  //     { input: '1111', output: true },
  //     { input: '1110', output: true },
  //     { input: '001', output: false },
  //     { input: '10', output: false },
  //     { input: '000', output: false },
  //   ],
  // },
];

function formalizer(allStates, acceptStates) {
  let coloredStates = 'States [';
  allStates.forEach(state => {
    coloredStates += (acceptStates.includes(state) ? chalk.green(state) : state) + ', ';
  });
  return coloredStates.substring(0, coloredStates.length - 2) + ']';
}

tests1.forEach(({ nfaString, tests }, i) => {
  var dfa = new NFA(nfaString);
  let formalized = formalizer(dfa.getStates(), dfa.getAcceptStates());
  const [zTransitions, oTransitions, eTransitions, accepts] = nfaString.split('#');
  describe(
    'NFA#' +
      (i + 1) +
      " with NFAString '" +
      chalk.yellow(zTransitions) +
      '#' +
      chalk.blue(oTransitions) +
      '#' +
      chalk.grey(eTransitions) +
      '#' +
      chalk.green(accepts) +
      "'",
    function() {
      tests.forEach(({ input, output }) => {
        describe(formalized + ' Calling method dfa.run(' + input + ')', function() {
          const { pass, state } = dfa.run(input);
          it(
            chalk.grey(
              'Should stop at state ' +
                chalk.blue(state) +
                ' & return ' +
                chalk.yellow(output) +
                '.'
            ),
            function() {
              assert.equal(pass, output);
            }
          );
        });
      });
    }
  );
});
