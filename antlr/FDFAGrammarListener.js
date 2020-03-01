// Generated from ./antlr/FDFAGrammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by FDFAGrammarParser.
function FDFAGrammarListener() {
  antlr4.tree.ParseTreeListener.call(this);
  return this;
}

FDFAGrammarListener.prototype = Object.create(
  antlr4.tree.ParseTreeListener.prototype,
);
FDFAGrammarListener.prototype.constructor = FDFAGrammarListener;

// Enter a parse tree produced by FDFAGrammarParser#main.
FDFAGrammarListener.prototype.enterMain = function(ctx) {};

// Exit a parse tree produced by FDFAGrammarParser#main.
FDFAGrammarListener.prototype.exitMain = function(ctx) {};

// Enter a parse tree produced by FDFAGrammarParser#accept.
FDFAGrammarListener.prototype.enterAccept = function(ctx) {};

// Exit a parse tree produced by FDFAGrammarParser#accept.
FDFAGrammarListener.prototype.exitAccept = function(ctx) {};

exports.FDFAGrammarListener = FDFAGrammarListener;
