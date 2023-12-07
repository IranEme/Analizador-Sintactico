import antlr4 from 'antlr4'
import CalculadoraParser from '/home/iraneme/Escritorio/iran/src/grammar/grammar/CalculadoraParser.js'
import CalculadoraLexer from '/home/iraneme/Escritorio/iran/src/grammar/grammar/CalculadoraLexer.js'
import CustomVisitor from '../helper/CustomVisitor.js';


export function sin(parametro) {

    const input  = parametro;
    const chars  = new antlr4.InputStream(input)
    const lexer  = new CalculadoraLexer(chars)
    const tokens = new antlr4.CommonTokenStream(lexer)
    const parser = new CalculadoraParser(tokens)
    parser.buildParseTrees = true;
    const tree   = parser.file()
    const visitor =  new CustomVisitor();
    return visitor.visitFile(tree);
        
}

