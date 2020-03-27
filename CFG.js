function CFG(cfgDesc = '') {
  const rulesArrayRaw = cfgDesc.split(';');
  this.rules = rulesArrayRaw.reduce((accum, singleRule) => {
    const [key, ...subs] = singleRule.split(',');
    return {
      ...accum,
      [key]: subs.map(sub =>
        sub
          .split(',')
          .reduce(
            (repAccum, replacement) => [...repAccum, ...replacement.split('')],
            [],
          ),
      ),
    };
  }, {});

  CFG.prototype.LRE = function() {
    const getReccursiveRulesArray = (
      originalArray,
      handledRules,
      leftMostRule,
    ) => {
      const [_, ...restOriginalArray] = originalArray;
      const triggererRules = this.rules[leftMostRule];
      const newArray = triggererRules.map(triggererRule => [
        ...triggererRule,
        ...restOriginalArray,
      ]);
      return newArray.map(newRule => {
        const [reccLeftMost, ...restNewArray] = newRule;
        if (handledRules.includes(reccLeftMost))
          return getReccursiveRulesArray(newRule, handledRules, reccLeftMost);
        else return newRule;
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
      const newKey = `${ruleKey}-`;
      arrayRules.forEach((arrayRule, index) => {
        const [leftMostRule, ...restOfRule] = arrayRule;
        if (ruleKey === leftMostRule) {
          shiftedRules = [...shiftedRules, [...restOfRule, newKey]];
        } else if (handledRules.includes(leftMostRule)) {
          newReccArray = getReccursiveRulesArray(
            arrayRule,
            handledRules,
            leftMostRule,
          );
          const prevArray = newReccArrayObject[ruleKey];
          reccBool = true;
          newReccArray.forEach(newReccRule => {
            newReccArrayObject[ruleKey] = [
              ...(prevArray || []),
              ...newReccRule,
            ];
            const [reccleftMostRule, ...restReccOfRule] = newReccRule;
            if (ruleKey === reccleftMostRule) {
              shiftedRules = [...shiftedRules, ...restReccOfRule];
            } else {
              appendedRules = [...appendedRules, ...newReccRule];
            }
          });
        } else {
          appendedRules = [...appendedRules, [...arrayRule, newKey]];
        }
      });
      if (shiftedRules.length > 0) {
        this.rules[ruleKey] = appendedRules;
        this.rules[newKey] = shiftedRules;
      } else if (reccBool) {
        this.rules[ruleKey] = newReccArrayObject[ruleKey];
      } else {
        this.rules[ruleKey] = arrayRules;
      }
      handledRules = [...handledRules, ruleKey, newKey];
    });
    return this.rules;
  };
}

module.exports = {CFG};

/*S,z,To;
T,oT',zzT';
T',ozT'*/

/* S,z,To;
T,o,Sz */
