var assert = require('assert');
var LexicalAnalysis = require('../antlr/LexicalAnalysis');
const chalk = require('chalk');

let tests1 = [
  {input: '0011', output: ['']},
  {input: '0101', output: ['']},
  {input: '1001', output: ['']},
  {input: '11100', output: ['']},
  {input: '111', output: ['']},
  {input: '01000100', output: ['']},
  {input: '00110011', output: ['']},
  {input: '01', output: ['']},
  {input: '01001', output: ['']},
  {input: '001100', output: ['']},
];

tests1.forEach(({input, output}, i) => {
  it('', function() {
    console.log(chalk.yellow(i + 1 + '. Input: ' + input));
    LexicalAnalysis.run(input);
    console.log('=======' + '='.repeat(input.length));
  });
});
