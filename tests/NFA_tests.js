var assert = require('assert');
var { NFA } = require('../NFA');
const chalk = require('chalk');

let tests1 = [
  {
    dfaString: 's0,s0;s0,s1;s1,s2;s2,s3;s3,s3##s0,s0#s0,s3',
    tests: [
      { input: '10100', output: true },
      { input: '00010', output: false },
      { input: '0101000', output: true },
      { input: '1011111', output: false },
      { input: '11011', output: true },
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
  var dfa = new NFA(dfaString);
  let formalized = formalizer(dfa.getStates(), dfa.getAcceptStates());
  const [zTransitions, oTransitions, eTransitions, accepts] = dfaString.split('#');
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
