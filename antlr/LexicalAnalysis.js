var antlr4 = require('antlr4');
var FDFAGrammarLexer = require('./FDFAGrammarLexer').FDFAGrammarLexer;
var FDFAGrammarParser = require('./FDFAGrammarParser').FDFAGrammarParser;

var input = '1011100';
var chars = new antlr4.InputStream(input);
var lexer = new FDFAGrammarLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new FDFAGrammarParser(tokens);
parser.buildParseTrees = true;
var tree = parser.main();
const {tokens: tokensArray} = tokens;
console.log(
  'Tokens: ',
  tokensArray.map(token => token.text),
);
