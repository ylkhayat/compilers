const argv = require('yargs').argv;
const chalk = require('chalk');

function CFG(cfgDesc = '') {
  const rulesArrayRaw = cfgDesc.split(';');
  this.rules = rulesArrayRaw.reduce((accum, singleRule) => {
    const [key, ...subs] = singleRule.split(',');
    return {
      ...accum,
      [key]: subs.map(sub =>
        sub
          .split(',')
          .reduce((repAccum, replacement) => [...repAccum, ...replacement.split('')], [])
      ),
    };
  }, {});

  CFG.prototype.LRE = function() {
    const getReccursiveRulesArray = (originalArray, handledRules, leftMostRule) => {
      const [_, ...restOriginalArray] = originalArray;
      const triggererRules = this.rules[leftMostRule];
      const newArray = triggererRules.map(triggererRule => [
        ...triggererRule,
        ...restOriginalArray,
      ]);
      return newArray.reduce((accum, newRule) => {
        const [reccLeftMost, ...restNewArray] = newRule;
        if (handledRules.includes(reccLeftMost))
          return [...accum, ...getReccursiveRulesArray(newRule, handledRules, reccLeftMost)];
        else return [...accum, newRule];
      }, []);
    };

    const concactNewKey = (newKey, array) => {
      return array.map(item => item.concat(newKey));
    };

    const rulesKeys = Object.keys(this.rules);
    let handledRules = [];
    let newReccArray = [];
    let newReccArrayObject = {};
    rulesKeys.forEach(ruleKey => {
      let reccBool = false;
      const arrayRules = this.rules[ruleKey];
      let appendedRules = [];
      let shiftedRules = [];
      const newKey = `${ruleKey}'`;
      arrayRules.forEach((arrayRule, index) => {
        const [leftMostRule, ...restOfRule] = arrayRule;
        if (ruleKey === leftMostRule) {
          shiftedRules = [...shiftedRules, restOfRule];
        } else if (handledRules.includes(leftMostRule)) {
          newReccArray = getReccursiveRulesArray(arrayRule, handledRules, leftMostRule);

          reccBool = true;
          newReccArray.forEach(newReccRule => {
            const [reccleftMostRule, ...restReccOfRule] = newReccRule;
            if (ruleKey === reccleftMostRule) {
              shiftedRules = [...shiftedRules, restReccOfRule];
            } else {
              appendedRules = [...appendedRules, newReccRule];
            }
          });
        } else {
          appendedRules = [...appendedRules, arrayRule];
        }
      });
      if (shiftedRules.length > 0) {
        this.rules[ruleKey] = concactNewKey(newKey, appendedRules);
        this.rules[newKey] = concactNewKey(newKey, shiftedRules);
      } else {
        this.rules[ruleKey] = appendedRules;
      }
      handledRules = [...handledRules, ruleKey, newKey];
    });

    const keys = Object.keys(this.rules);
    const cfgObject = keys.reduce((accum, key) => {
      const rules = this.rules[key].map(rule => (rule ? rule.join('') : rule));
      return {...accum, [key]: rules};
    }, {});
    console.log(JSON.stringify(cfgObject, null, '\t'));
  };
}

if (argv.cfgString) {
  var cfg = new CFG(argv.cfgString);
  cfg.LRE();
} else {
  console.log(
    chalk.yellow('Please enter a valid cfgString.'),
    'ie: `node ./CFG_submit.js',
    chalk.green('--cfgString'),
    chalk.blue('"S,o,aS;L,k,LT"`')
  );
}

module.exports = {CFG};
