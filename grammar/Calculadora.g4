grammar Calculadora;

file: expr+;          

expr: 
        '(' expr ')' #parentesis
        |
        '(' expr operation=(PARENTESIS|TIMES|DIV|PLUS|MINUS) expr ')'#multiplicacion
        |
        expr operation=(TIMES|DIV) expr     #timesDiv
        |
        expr operation=(PLUS|MINUS) expr    #plusSubtraction
        |
        NUMBER              #number
        ;

PLUS    :   '+';
MINUS   :   '-';
TIMES   :   '*';
DIV     :   '/';
PARENTESIS: ')(';
NUMBER  :   [0-9]+;
SPACES  :   [ \t\r\n]+ -> skip;