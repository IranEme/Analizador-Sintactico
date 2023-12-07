import CalculadoraVisitor from "../grammar/grammar/CalculadoraVisitor.js";
export default class CustomVisitor extends  CalculadoraVisitor {

	// Visit a parse tree produced by CalculadoraParser#file.
	visitFile(ctx) {
		console.log("Iniciando..")
    const resultado = this.visit(ctx.expr())
    
    //console.log('resultados: '+resultado)

	  return resultado;
	}

// Visit a parse tree produced by CalculadoraParser#parentesis.
visitParentesis(ctx) {
  const num1 = this.visit(ctx.expr(0))
  return Number(num1);
}
	// Visit a parse tree produced by CalculadoraParser#multiplicacion.
	visitMultiplicacion(ctx) {
    console.log('parentesis')
    const numero = this.visit(ctx.expr(0))
    const numero2 = this.visit(ctx.expr(1))

    if(ctx.operation.type == 7){
      return numero*numero2;
    }
    if(ctx.operation.type == 3){
      return numero+numero2
    }
    if(ctx.operation.type == 4){
      return numero-numero2
    }
    if(ctx.operation.type == 5){
      return numero*numero2
    }
    if(ctx.operation.type == 6){
      return numero/numero2
    }
	}

	// Visit a parse tree produced by CalculadoraParser#timesDiv.
	visitTimesDiv(ctx) {
    const numero = this.visit(ctx.expr(0))
    const numero2 = this.visit(ctx.expr(1))
    if (ctx.operation.type == 5){
      console.log('Es una multiplicacion')
      return numero*numero2;
    }

    if (ctx.operation.type==6) {
      console.log('division')
      return numero/numero2;
    }
	}


	// Visit a parse tree produced by CalculadoraParser#plusSubtraction.
	visitPlusSubtraction(ctx) {
    //console.log('Encontre una suma o una resta')
		const numero = this.visit(ctx.expr(0))
    const numero2 = this.visit(ctx.expr(1))
    if (ctx.operation.type ==3) {
      console.log('suma')
      return numero+numero2;
    }

    if (ctx.operation.type== 4) {
      console.log('resta')
      return numero-numero2;
    }
	  
	}

// Visit a parse tree produced by CalculadoraParser#number.
visitNumber(ctx) {
	console.log(Number(ctx.getText()))
  return Number(ctx.getText());
}


}