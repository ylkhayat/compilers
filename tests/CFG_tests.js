var assert = require('assert');
var {CFG} = require('../CFG');
const chalk = require('chalk');

let tests1 = [
  // 'S,ScT,T;T,aSb,iaLb,i;L,SdL,S',
  // 'S,ScT,T;T,aSb,iaLb,i;L,SdL,S',
  // 'S,Sa,b',
  // 'S,Sab,cd',
  // 'S,SuS,SS,Ss,lSr,a',
  // 'S,SuT,T;T,TF,F;F,Fs,P;P,a,b',
  'S,z,To;T,o,Sz',
  // 'S,lLr,a;L,LbS,S',
  // 'S,BC,C;B,Bb,b;C,SC,a',
];

tests1.forEach((cfgString, i) => {
  var cfg = new CFG(cfgString);
  var finalElim = cfg.LRE();
  const keys = Object.keys(finalElim);
  console.log(chalk.yellow('Test n=', i + 1));

  console.log(chalk.green('Input CFG', cfgString));
  console.log();
  keys.forEach(key => {
    const rules = finalElim[key].map(rule => (rule ? rule.join('') : rule));
    console.log(key, ': ', rules);
  });
  console.log(chalk.yellow('='.repeat(10)));
  console.log();
});
