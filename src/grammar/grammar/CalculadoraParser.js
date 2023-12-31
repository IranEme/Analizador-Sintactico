// Generated from ./grammar/Calculadora.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CalculadoraVisitor from './CalculadoraVisitor.js';

const serializedATN = [4,1,9,35,2,0,7,0,2,1,7,1,1,0,4,0,6,8,0,11,0,12,0,
7,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,22,8,1,1,1,1,1,1,1,
1,1,1,1,1,1,5,1,30,8,1,10,1,12,1,33,9,1,1,1,0,1,2,2,0,2,0,3,1,0,3,7,1,0,
5,6,1,0,3,4,37,0,5,1,0,0,0,2,21,1,0,0,0,4,6,3,2,1,0,5,4,1,0,0,0,6,7,1,0,
0,0,7,5,1,0,0,0,7,8,1,0,0,0,8,1,1,0,0,0,9,10,6,1,-1,0,10,11,5,1,0,0,11,12,
3,2,1,0,12,13,5,2,0,0,13,22,1,0,0,0,14,15,5,1,0,0,15,16,3,2,1,0,16,17,7,
0,0,0,17,18,3,2,1,0,18,19,5,2,0,0,19,22,1,0,0,0,20,22,5,8,0,0,21,9,1,0,0,
0,21,14,1,0,0,0,21,20,1,0,0,0,22,31,1,0,0,0,23,24,10,3,0,0,24,25,7,1,0,0,
25,30,3,2,1,4,26,27,10,2,0,0,27,28,7,2,0,0,28,30,3,2,1,3,29,23,1,0,0,0,29,
26,1,0,0,0,30,33,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,3,1,0,0,0,33,31,
1,0,0,0,4,7,21,29,31];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CalculadoraParser extends antlr4.Parser {

    static grammarFileName = "Calculadora.g4";
    static literalNames = [ null, "'('", "')'", "'+'", "'-'", "'*'", "'/'", 
                            "')('" ];
    static symbolicNames = [ null, null, null, "PLUS", "MINUS", "TIMES", 
                             "DIV", "PARENTESIS", "NUMBER", "SPACES" ];
    static ruleNames = [ "file", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalculadoraParser.ruleNames;
        this.literalNames = CalculadoraParser.literalNames;
        this.symbolicNames = CalculadoraParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 3);
    		case 1:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalculadoraParser.RULE_file);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 5; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 4;
	            this.expr(0);
	            this.state = 7; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1 || _la===8);
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
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, CalculadoraParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 10;
	            this.match(CalculadoraParser.T__0);
	            this.state = 11;
	            this.expr(0);
	            this.state = 12;
	            this.match(CalculadoraParser.T__1);
	            break;

	        case 2:
	            localctx = new MultiplicacionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 14;
	            this.match(CalculadoraParser.T__0);
	            this.state = 15;
	            this.expr(0);
	            this.state = 16;
	            localctx.operation = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 248) !== 0))) {
	                localctx.operation = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 17;
	            this.expr(0);
	            this.state = 18;
	            this.match(CalculadoraParser.T__1);
	            break;

	        case 3:
	            localctx = new NumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 20;
	            this.match(CalculadoraParser.NUMBER);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 31;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 29;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new TimesDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CalculadoraParser.RULE_expr);
	                    this.state = 23;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 24;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===5 || _la===6)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 25;
	                    this.expr(4);
	                    break;

	                case 2:
	                    localctx = new PlusSubtractionContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CalculadoraParser.RULE_expr);
	                    this.state = 26;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 27;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===3 || _la===4)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 28;
	                    this.expr(3);
	                    break;

	                } 
	            }
	            this.state = 33;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

CalculadoraParser.EOF = antlr4.Token.EOF;
CalculadoraParser.T__0 = 1;
CalculadoraParser.T__1 = 2;
CalculadoraParser.PLUS = 3;
CalculadoraParser.MINUS = 4;
CalculadoraParser.TIMES = 5;
CalculadoraParser.DIV = 6;
CalculadoraParser.PARENTESIS = 7;
CalculadoraParser.NUMBER = 8;
CalculadoraParser.SPACES = 9;

CalculadoraParser.RULE_file = 0;
CalculadoraParser.RULE_expr = 1;

class FileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculadoraParser.RULE_file;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitFile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculadoraParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParentesisContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitParentesis(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.ParentesisContext = ParentesisContext;

class TimesDivContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.operation = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	TIMES() {
	    return this.getToken(CalculadoraParser.TIMES, 0);
	};

	DIV() {
	    return this.getToken(CalculadoraParser.DIV, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitTimesDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.TimesDivContext = TimesDivContext;

class MultiplicacionContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.operation = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	PARENTESIS() {
	    return this.getToken(CalculadoraParser.PARENTESIS, 0);
	};

	TIMES() {
	    return this.getToken(CalculadoraParser.TIMES, 0);
	};

	DIV() {
	    return this.getToken(CalculadoraParser.DIV, 0);
	};

	PLUS() {
	    return this.getToken(CalculadoraParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(CalculadoraParser.MINUS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitMultiplicacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.MultiplicacionContext = MultiplicacionContext;

class NumberContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(CalculadoraParser.NUMBER, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.NumberContext = NumberContext;

class PlusSubtractionContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.operation = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	PLUS() {
	    return this.getToken(CalculadoraParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(CalculadoraParser.MINUS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitPlusSubtraction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.PlusSubtractionContext = PlusSubtractionContext;


CalculadoraParser.FileContext = FileContext; 
CalculadoraParser.ExprContext = ExprContext; 
