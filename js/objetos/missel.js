
//CLASSE MISSEL
function Missel(escala, x, y){
	this.escala = escala;
	this.figure = imgMissel;

	this.srcX = 0;
	this.srcY = 0;
	this.srcWidth = 10; 	// 159
	this.srcHeight = 10; 	// 200

	this.x = x;
	this.y = y;

	this.width = 0;
	this.height = 0;

	this.dx = 6;
	this.anima = 1;
	this.visible = true;

	this.colidiu = false;
	
	this.iniciar();
}

//MÉTODOS DO MISSEL
Missel.prototype = {
	iniciar: function(){
		this.srcWidth = 159;
		this.srcHeight = Math.floor( 200 / 4);
		this.width = this.escala.vinte() / 2; 		//quarenta *2
		this.height = this.escala.quarenta() / 2;	 // cem*2
	},

	desenhar: function(){
		//console.log("MISSEL: ", this.figure);
		if(this.visible){
			this.escala.ctx.drawImage(this.figure,
							this.srcX, this.srcY, this.srcWidth, this.srcHeight,
							this.x, this.y, this.width, this.height );
			this.animacao();
		}
	},

	atualizar: function(){
		this.x = this.x + this.dx;
	},

	animacao: function(){
		this.anima++;

		if(this.anima >= 40){
			this.anima = 1;
			this.srcY = 0;
		}

		if(this.anima % 10 == 0){
			this.srcY = this.srcY + this.srcHeight;
		}
	}

}