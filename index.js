var {DFA} = require('./DFA');
var {NFA} = require('./NFA');
var {CFG} = require('./CFG');
const _ = require('lodash');

function joinSet(input) {
  let newState = '';
  if (input instanceof Set) {
    return [...input].join(',');
  } else {
    newState = input;
  }
  return newState;
}

function Transition({inp, out0, out1, oute, outa}) {
  this.inp = inp;
  this.out0 = out0 ? out0 : new Set();
  this.out1 = out1 ? out1 : new Set();
  this.oute = oute ? oute : new Set();
  this.outa = outa ? outa : new Set();

  Transition.prototype.get = function() {
    const inpTransition = joinSet(this.inp);
    const out0Transition = joinSet(this.out0);
    const out1Transition = joinSet(this.out1);

    return {
      [inpTransition]: {
        '0': out0Transition,
        '1': out1Transition,
        e: this.oute,
        a: this.outa,
      },
    };
  };
  Transition.prototype.valid = function() {
    return Array.isArray(this.inp) ? this.inp.length > 0 : !!this.inp;
  };
  Transition.prototype.getInp = function() {
    return this.inp;
  };
  Transition.prototype.getEps = function() {
    return this.oute;
  };
  Transition.prototype.getZero = function() {
    return this.out0;
  };
  Transition.prototype.getOne = function() {
    return this.out1;
  };
  Transition.prototype.getAction = function() {
    return this.outa;
  };
  Transition.prototype.transformMultToSing = function() {
    this.inp = this.inp;
    this.out0 = this.out0;
    this.out1 = this.out1;
    return this;
  };
  Transition.prototype.getStates = function() {
    const newStates = new Set();
    if (this.inp.size > 0) newStates.add([...this.inp].join(','));
    if (this.out0.size > 0) newStates.add([...this.out0].join(','));
    if (this.out1.size > 0) newStates.add([...this.out1].join(','));
    if (this.oute.size > 0) newStates.add([...this.oute].join(','));
    return newStates;
  };
  Transition.prototype.equals = function(transition) {
    return (
      this.inp === transition.getInp() &&
      this.out0 === transition.getZero() &&
      this.out1 === transition.getOne()
    );
  };
  Transition.prototype.add = function({out0s, out1s, outes}) {
    if (out0s)
      out0s.forEach(out0 => {
        this.out0.add(out0);
      });
    if (out1s)
      out1s.forEach(out1 => {
        this.out1.add(out1);
      });
    if (outes)
      outes.forEach(oute => {
        this.oute.add(oute);
      });
    return this;
  };
}

module.exports = {DFA, NFA, CFG, Transition};
require('make-runnable');

/*
Presuming a vigorous engagement for my long-lost self to that particular place, I wouldn't dare to describe it since jubilant thoughts embark fading to the void once expressed, yet, set free from that safe entity called mind.
However, eagerness to reveal such feelings to some living individuals remains questionable and nonsense for that long-awaited moment to simply slip a shred of evidence to a certain loving memory or a gloriously notable sight that would effectively reconcile my distant affection to believe that such a place actually exists.
 */
