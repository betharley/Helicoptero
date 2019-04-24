
//CLASSE DO GAME OVER
function GameOver(escala){
	this.escala = escala;
	this.texto = "GAME OVER!";
	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;
	
	this.dx = 2;
	this.dy = 2;
	this.tamanhoFonte = this.escala.quinze();

	this.perdeu = true;	
	this.vitoria = false;

	this.iniciar();
}

//MÉTODOS DO GAME OVER
GameOver.prototype = {
	iniciar: function(){
		this.escala.ctx.font = this.tamanhoFonte + "px Serif";

		//Posição X e Y do texto na canvas, Largura e altura do texto
		this.x = this.escala.largura()/2 - this.escala.ctx.measureText(this.texto).width / 2;
		this.y = this.escala.altura() / 2;
		this.width = this.escala.ctx.measureText(this.texto).width;
		this.height = this.tamanhoFonte;
	},

	desenhar: function(){

		if(this.perdeu){
			this.escala.ctx.fillStyle = "rgba(0, 0, 0, 1)";
			this.escala.ctx.fillRect(0, 0, this.escala.largura(), this.escala.altura());

			this.escala.ctx.fillStyle = "#F00";

			//Desenha o texto na canvas
			this.escala.ctx.fillText(this.texto, this.x,	this.y );

			this.atualizar();
		}

	},

	atualizar: function(){
		this.x = this.x + this.dx;
		this.y = this.y + this.dy;

		if( this.x + this.width > this.escala.largura() || this.x < 0){
			this.dx = this.dx * -1;
		}
		if( this.y > this.escala.altura() || this.y - this.tamanhoFonte < 0){
			this.dy = this.dy * -1;
		}
	}

}

