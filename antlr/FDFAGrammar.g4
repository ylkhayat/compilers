grammar FDFAGrammar;

main: accept+;
accept: SUB1 | SUB2;
SUB1: '0'*'1'+'0'('0'+'1'+'0')* {console.log("10")};
SUB2: '0'*'1'+('0''0'+'1'+)* {console.log("01")};