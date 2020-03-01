// Generated from ./antlr/FDFAGrammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FDFAGrammarListener = require('./FDFAGrammarListener').FDFAGrammarListener;
var grammarFileName = "FDFAGrammar.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0004\u000e\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002",
    "\u0006\u0002\b\n\u0002\r\u0002\u000e\u0002\t\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0002\u0002\u0004\u0002\u0004\u0002\u0003\u0003\u0002\u0003",
    "\u0004\u0002\f\u0002\u0007\u0003\u0002\u0002\u0002\u0004\u000b\u0003",
    "\u0002\u0002\u0002\u0006\b\u0005\u0004\u0003\u0002\u0007\u0006\u0003",
    "\u0002\u0002\u0002\b\t\u0003\u0002\u0002\u0002\t\u0007\u0003\u0002\u0002",
    "\u0002\t\n\u0003\u0002\u0002\u0002\n\u0003\u0003\u0002\u0002\u0002\u000b",
    "\f\t\u0002\u0002\u0002\f\u0005\u0003\u0002\u0002\u0002\u0003\t"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [  ];

var symbolicNames = [ null, "SUB1", "SUB2" ];

var ruleNames =  [ "main", "accept" ];

function FDFAGrammarParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

FDFAGrammarParser.prototype = Object.create(antlr4.Parser.prototype);
FDFAGrammarParser.prototype.constructor = FDFAGrammarParser;

Object.defineProperty(FDFAGrammarParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

FDFAGrammarParser.EOF = antlr4.Token.EOF;
FDFAGrammarParser.SUB1 = 1;
FDFAGrammarParser.SUB2 = 2;

FDFAGrammarParser.RULE_main = 0;
FDFAGrammarParser.RULE_accept = 1;


function MainContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FDFAGrammarParser.RULE_main;
    return this;
}

MainContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MainContext.prototype.constructor = MainContext;

MainContext.prototype.accept = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AcceptContext);
    } else {
        return this.getTypedRuleContext(AcceptContext,i);
    }
};

MainContext.prototype.enterRule = function(listener) {
    if(listener instanceof FDFAGrammarListener ) {
        listener.enterMain(this);
	}
};

MainContext.prototype.exitRule = function(listener) {
    if(listener instanceof FDFAGrammarListener ) {
        listener.exitMain(this);
	}
};




FDFAGrammarParser.MainContext = MainContext;

FDFAGrammarParser.prototype.main = function() {

    var localctx = new MainContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, FDFAGrammarParser.RULE_main);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 5; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 4;
            this.accept();
            this.state = 7; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===FDFAGrammarParser.SUB1 || _la===FDFAGrammarParser.SUB2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AcceptContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FDFAGrammarParser.RULE_accept;
    return this;
}

AcceptContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AcceptContext.prototype.constructor = AcceptContext;

AcceptContext.prototype.SUB1 = function() {
    return this.getToken(FDFAGrammarParser.SUB1, 0);
};

AcceptContext.prototype.SUB2 = function() {
    return this.getToken(FDFAGrammarParser.SUB2, 0);
};

AcceptContext.prototype.enterRule = function(listener) {
    if(listener instanceof FDFAGrammarListener ) {
        listener.enterAccept(this);
	}
};

AcceptContext.prototype.exitRule = function(listener) {
    if(listener instanceof FDFAGrammarListener ) {
        listener.exitAccept(this);
	}
};




FDFAGrammarParser.AcceptContext = AcceptContext;

FDFAGrammarParser.prototype.accept = function() {

    var localctx = new AcceptContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, FDFAGrammarParser.RULE_accept);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 9;
        _la = this._input.LA(1);
        if(!(_la===FDFAGrammarParser.SUB1 || _la===FDFAGrammarParser.SUB2)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.FDFAGrammarParser = FDFAGrammarParser;
