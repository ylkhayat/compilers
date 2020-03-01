// Generated from ./antlr/FDFAGrammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

var serializedATN = [
  '\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964',
  '\u0002\u0004B\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003',
  '\u0002\u0007\u0002\t\n\u0002\f\u0002\u000e\u0002\f\u000b\u0002\u0003',
  '\u0002\u0006\u0002\u000f\n\u0002\r\u0002\u000e\u0002\u0010\u0003\u0002',
  '\u0003\u0002\u0006\u0002\u0015\n\u0002\r\u0002\u000e\u0002\u0016\u0003',
  '\u0002\u0006\u0002\u001a\n\u0002\r\u0002\u000e\u0002\u001b\u0003\u0002',
  '\u0007\u0002\u001f\n\u0002\f\u0002\u000e\u0002"\u000b\u0002\u0003\u0002',
  "\u0003\u0002\u0003\u0003\u0007\u0003'\n\u0003\f\u0003\u000e\u0003*",
  '\u000b\u0003\u0003\u0003\u0006\u0003-\n\u0003\r\u0003\u000e\u0003.\u0003',
  '\u0003\u0003\u0003\u0006\u00033\n\u0003\r\u0003\u000e\u00034\u0003\u0003',
  '\u0006\u00038\n\u0003\r\u0003\u000e\u00039\u0007\u0003<\n\u0003\f\u0003',
  '\u000e\u0003?\u000b\u0003\u0003\u0003\u0003\u0003\u0002\u0002\u0004',
  '\u0003\u0003\u0005\u0004\u0003\u0002\u0002\u0002K\u0002\u0003\u0003',
  '\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0003\n\u0003',
  '\u0002\u0002\u0002\u0005(\u0003\u0002\u0002\u0002\u0007\t\u00072\u0002',
  '\u0002\b\u0007\u0003\u0002\u0002\u0002\t\f\u0003\u0002\u0002\u0002\n',
  '\b\u0003\u0002\u0002\u0002\n\u000b\u0003\u0002\u0002\u0002\u000b\u000e',
  '\u0003\u0002\u0002\u0002\f\n\u0003\u0002\u0002\u0002\r\u000f\u00073',
  '\u0002\u0002\u000e\r\u0003\u0002\u0002\u0002\u000f\u0010\u0003\u0002',
  '\u0002\u0002\u0010\u000e\u0003\u0002\u0002\u0002\u0010\u0011\u0003\u0002',
  '\u0002\u0002\u0011\u0012\u0003\u0002\u0002\u0002\u0012 \u00072\u0002',
  '\u0002\u0013\u0015\u00072\u0002\u0002\u0014\u0013\u0003\u0002\u0002',
  '\u0002\u0015\u0016\u0003\u0002\u0002\u0002\u0016\u0014\u0003\u0002\u0002',
  '\u0002\u0016\u0017\u0003\u0002\u0002\u0002\u0017\u0019\u0003\u0002\u0002',
  '\u0002\u0018\u001a\u00073\u0002\u0002\u0019\u0018\u0003\u0002\u0002',
  '\u0002\u001a\u001b\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002',
  '\u0002\u001b\u001c\u0003\u0002\u0002\u0002\u001c\u001d\u0003\u0002\u0002',
  '\u0002\u001d\u001f\u00072\u0002\u0002\u001e\u0014\u0003\u0002\u0002',
  '\u0002\u001f"\u0003\u0002\u0002\u0002 \u001e\u0003\u0002\u0002\u0002',
  ' !\u0003\u0002\u0002\u0002!#\u0003\u0002\u0002\u0002" \u0003\u0002',
  "\u0002\u0002#$\b\u0002\u0002\u0002$\u0004\u0003\u0002\u0002\u0002%'",
  "\u00072\u0002\u0002&%\u0003\u0002\u0002\u0002'*\u0003\u0002\u0002\u0002",
  '(&\u0003\u0002\u0002\u0002()\u0003\u0002\u0002\u0002),\u0003\u0002\u0002',
  '\u0002*(\u0003\u0002\u0002\u0002+-\u00073\u0002\u0002,+\u0003\u0002',
  '\u0002\u0002-.\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002./\u0003',
  '\u0002\u0002\u0002/=\u0003\u0002\u0002\u000202\u00072\u0002\u000213',
  '\u00072\u0002\u000221\u0003\u0002\u0002\u000234\u0003\u0002\u0002\u0002',
  '42\u0003\u0002\u0002\u000245\u0003\u0002\u0002\u000257\u0003\u0002\u0002',
  '\u000268\u00073\u0002\u000276\u0003\u0002\u0002\u000289\u0003\u0002',
  '\u0002\u000297\u0003\u0002\u0002\u00029:\u0003\u0002\u0002\u0002:<\u0003',
  '\u0002\u0002\u0002;0\u0003\u0002\u0002\u0002<?\u0003\u0002\u0002\u0002',
  '=;\u0003\u0002\u0002\u0002=>\u0003\u0002\u0002\u0002>@\u0003\u0002\u0002',
  '\u0002?=\u0003\u0002\u0002\u0002@A\b\u0003\u0003\u0002A\u0006\u0003',
  '\u0002\u0002\u0002\r\u0002\n\u0010\u0016\u001b (.49=\u0004\u0003\u0002',
  '\u0002\u0003\u0003\u0003',
].join('');

var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function(ds, index) {
  return new antlr4.dfa.DFA(ds, index);
});

function FDFAGrammarLexer(input) {
  antlr4.Lexer.call(this, input);
  this._interp = new antlr4.atn.LexerATNSimulator(
    this,
    atn,
    decisionsToDFA,
    new antlr4.PredictionContextCache(),
  );
  return this;
}

FDFAGrammarLexer.prototype = Object.create(antlr4.Lexer.prototype);
FDFAGrammarLexer.prototype.constructor = FDFAGrammarLexer;

Object.defineProperty(FDFAGrammarLexer.prototype, 'atn', {
  get: function() {
    return atn;
  },
});

FDFAGrammarLexer.EOF = antlr4.Token.EOF;
FDFAGrammarLexer.SUB1 = 1;
FDFAGrammarLexer.SUB2 = 2;

FDFAGrammarLexer.prototype.channelNames = ['DEFAULT_TOKEN_CHANNEL', 'HIDDEN'];

FDFAGrammarLexer.prototype.modeNames = ['DEFAULT_MODE'];

FDFAGrammarLexer.prototype.literalNames = [];

FDFAGrammarLexer.prototype.symbolicNames = [null, 'SUB1', 'SUB2'];

FDFAGrammarLexer.prototype.ruleNames = ['SUB1', 'SUB2'];

FDFAGrammarLexer.prototype.grammarFileName = 'FDFAGrammar.g4';

FDFAGrammarLexer.prototype.action = function(localctx, ruleIndex, actionIndex) {
  switch (ruleIndex) {
    case 0:
      this.SUB1_action(localctx, actionIndex);
      break;
    case 1:
      this.SUB2_action(localctx, actionIndex);
      break;
    default:
      throw 'No registered action for:' + ruleIndex;
  }
};

FDFAGrammarLexer.prototype.SUB1_action = function(localctx, actionIndex) {
  switch (actionIndex) {
    case 0:
      console.log('10');
      break;
    default:
      throw 'No registered action for:' + actionIndex;
  }
};

FDFAGrammarLexer.prototype.SUB2_action = function(localctx, actionIndex) {
  switch (actionIndex) {
    case 1:
      console.log('01');
      break;
    default:
      throw 'No registered action for:' + actionIndex;
  }
};

exports.FDFAGrammarLexer = FDFAGrammarLexer;
