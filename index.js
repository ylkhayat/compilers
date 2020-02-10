var { DFA } = require('./DFA');
var { NFA } = require('./NFA');

function Transition({ inp, out0, out1 }) {
  this.inp = inp;
  this.out0 = out0 ? [out0] : [];
  this.out1 = out1 ? [out1] : [];
  this.oute = [];
  Transition.prototype.get = function() {
    return {
      [this.inp]: { '0': this.out0, '1': this.out1, e: this.oute },
    };
  };
  Transition.prototype.add = function({ out0, out1, oute }) {
    if (out0) this.out0 = [...this.out0, out0];
    if (out1) this.out1 = [...this.out1, out1];
    if (oute) this.oute = [...this.oute, oute];
  };
}

module.exports = { DFA, NFA, Transition };
require('make-runnable');
