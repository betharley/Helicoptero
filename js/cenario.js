
//CLASSE DO CENARIO
function Cenario(escala){
	this.escala = escala;
	this.figure = imgCenario1;

	this.posX1 = 0;
	this.posX2 = this.escala.largura();
	this.y = 0;
	this.width = this.escala.largura();
	this.height = this.escala.altura();
	
	this.velocidade = -0.5;
}
Cenario.prototype = {
	iniciar: function(){
		
	},

	desenhar: function(){
		this.escala.ctx.drawImage(this.figure, this.posX1, this.y, this.width, this.height );

		this.escala.ctx.drawImage(this.figure, this.posX2, this.y, this.width, this.height );
	},

	atualizar: function(){
		this.posX1 = this.posX1 + this.velocidade;
		this.posX2 = this.posX2 + this.velocidade;

		if(this.posX1 + this.width <= 0){
			this.posX2 = 0;
			this.posX1 = this.escala.largura();
		}else
		if(this.posX2 + this.width <= 0){
			this.posX1 = 0;
			this.posX2 = this.escala.largura();
		}
		//console.log("POSICAO X1: ", this.posX1 + "       POSICAO X2 " + this.posX2);
		
	}
}





