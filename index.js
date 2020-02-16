var { DFA } = require('./DFA');
var { NFA } = require('./NFA');

function Transition({ inp, out0, out1, oute }) {
  this.inp = inp;
  this.out0 = out0 ? (Array.isArray(out0) ? out0 : [out0]) : [];
  this.out1 = out1 ? (Array.isArray(out1) ? out1 : [out1]) : [];
  this.oute = oute ? (Array.isArray(oute) ? oute : [oute]) : [];
  Transition.prototype.get = function() {
    return {
      [this.inp]: { '0': this.out0, '1': this.out1, e: this.oute },
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
  Transition.prototype.transformMultToSing = function() {
    this.inp = Array.isArray(this.inp) ? this.inp.join(',') : this.inp;
    this.out0 = Array.isArray(this.out0) ? this.out0.join(',') : this.out0;
    this.out1 = Array.isArray(this.out1) ? this.out1.join(',') : this.out1;
    return this;
  };
  Transition.prototype.getStates = function() {
    return [
      ...(Array.isArray(this.inp) ? this.inp : [this.inp]),
      ...(Array.isArray(this.out0) ? this.out0 : [this.out0]),
      ...(Array.isArray(this.out1) ? this.out1 : [this.out1]),
    ];
  };
  Transition.prototype.equals = function(transition) {
    return (
      this.inp === transition.getInp() &&
      this.out0 === transition.getZero() &&
      this.out1 === transition.getOne()
    );
  };
  Transition.prototype.add = function({ out0, out1, oute }) {
    if (out0 && !this.out0.includes(out0))
      this.out0 = [...new Set([...this.out0, ...(Array.isArray(out0) ? out0 : [out0])])];
    if (out1 && !this.out1.includes(out1))
      this.out1 = [...new Set([...this.out1, ...(Array.isArray(out1) ? out1 : [out1])])];
    if (oute && !this.oute.includes(oute))
      this.oute = [...new Set([...this.oute, ...(Array.isArray(oute) ? oute : [oute])])];
  };
}

module.exports = { DFA, NFA, Transition };
require('make-runnable');
