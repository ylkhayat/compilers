var assert = require('assert');
const _ = require('lodash');
var {CFG} = require('../CFG');
const chalk = require('chalk');

let tests1 = [
  {
    cfgString: 'S,ScT,T;T,aSb,iaLb,i;L,SdL,S',
    output: "S,TS';S',cTS';T,aSb,iaLb,i;L,aSbS'dL,iaLbS'dL,iS'dL,aSbS',iaLbS',iS'",
  },
  {cfgString: 'S,Sa,b', output: "S,bS';S',aS'"},
  {cfgString: 'S,Sab,cd', output: "S,cdS';S',abS'"},
  {cfgString: 'S,SuS,SS,Ss,lSr,a', output: "S,lSrS',aS';S',uSS',SS',sS'"},
  {
    cfgString: 'S,SuT,T;T,TF,F;F,Fs,P;P,a,b',
    output: "S,TS';S',uTS';T,FT';T',FT';F,PF';F',sF';P,a,b",
  },
  {cfgString: 'S,z,To;T,o,Sz', output: "S,z,To;T,oT',zzT';T',ozT'"},
  {cfgString: 'S,lLr,a;L,LbS,S', output: "S,lLr,a;L,lLrL',aL';L',bSL'"},
  {
    cfgString: 'S,BC,C;B,Bb,b;C,SC,a',
    output: "S,BC,C;B,bB';B',bB';C,bB'CCC',aC';C',CC'",
  },
];

function formalizer(output) {
  let outputObject = {};
  const outputRules = output.split(';');
  return outputRules.reduce((accum, rule) => {
    const [key, ...restRule] = rule.split(',');
    return {...accum, [key]: restRule};
  }, {});
}

tests1.forEach(({cfgString, output}, i) => {
  describe('Comparing output for the following CFG ' + chalk.yellow(cfgString), function() {
    var cfg = new CFG(cfgString);
    var cfgObject = cfg.LRE();
    const outputObject = formalizer(output);
    it(
      chalk.grey(
        'CFG LRE returned ' +
          chalk.blue(JSON.stringify(cfgObject, null, '')) +
          '\n' +
          'Answer was ' +
          chalk.yellow(JSON.stringify(outputObject, null, '')) +
          '.'
      ),
      function() {
        assert.equal(_.isEqual(cfgObject, outputObject), true);
      }
    );
  });
});
