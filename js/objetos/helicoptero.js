
//CLASSE DO HELICOPTERO
function Helicoptero(escala, teclado){
	this.escala = escala;
	this.teclado = teclado;

	this.figure = imgHelicoptero;

	this.srcX = 0;
	this.srcY = 0;
	this.srcWidth = 196;	// 590  / 2 = 295
	this.srcHeight = 111; 	// 334 / 3 = 111

	this.x = 100;
	this.y = 200;
	this.width = 0;   //Math.floor( this.escala.dez() );
	this.height = 0;   //Math.floor( this.escala.vinte() );

	this.dx = 4;
	this.dy = 4;

	this.anima = 1;

	this.colidu = false;
	this.corColisao = "rgba(255,0,0,0.5)";
	this.countColisao = 100;

	this.vidas = 5;

	this.misseis = [];
	this.podeDisparar = true;

	this.iniciar();
}

//MÉTODOS DO HELICOPTERO
Helicoptero.prototype = {
	iniciar: function(){
		this.srcWidth = Math.floor( 590 / 2 );
		this.srcHeight = Math.floor( 334 / 3 );
		this.width = Math.floor( this.escala.cinco() );
		this.height = Math.floor( this.escala.dez() );
	},
	desenhar: function(){
		this.escala.ctx.drawImage(this.figure,
					this.srcX, this.srcY, this.srcWidth, this.srcHeight, 
					this.x, this.y, this.width, this.height);

		if(this.countColisao < 10){
			this.escala.ctx.fillStyle = this.corColisao;
			this.escala.ctx.fillRect(this.x, this.y, this.width, this.height);
			//console.log("COLISÃO VERMELHA", this.countColisao);
		}
		this.countColisao++;		


		this.animacao();
	},
	atualizar: function(){
		this.movimentar();
		if(this.teclado.disparar && this.podeDisparar){
			this.atirar();
		}
		if(this.teclado.disparar == false){
			this.podeDisparar = true;
		}
		if(this.colidiu){
			this.countColisao = 0;
			this.vidas--;
			this.colidiu = false;
		}
	},
	movimentar: function(){
		if(this.teclado.left){
			this.x = this.x - this.dx;
		}else
		if(this.teclado.right){
			this.x = this.x + this.dx;
		}
		if(this.teclado.up){
			this.y = this.y - this.dy;
		}else
		if(this.teclado.down){
			this.y = this.y + this.dy;
		}
		this.x = Math.max(0, Math.min(this.x, this.escala.largura() - this.width) );
		this.y = Math.max(0, Math.min(this.y, this.escala.altura() - this.height) );
	},
	animacao: function(){
		this.anima++;
		if(this.anima >= 40){
			this.anima = 1;
			this.srcY = 0;
			//console.log("ANIMAÇÃO DO HELICOPTERO: ");
		}
		if(this.anima % 8 == 0){
			this.srcY = this.srcY + this.srcHeight;
		}
	},
	atirar: function(){
		let posX = Math.floor(this.x + this.width * 0.9);
		let posY = Math.floor( this.y + this.height * 0.8);
		this.misseis.push(new Missel(this.escala, posX, posY) );
		this.podeDisparar = false;
	}

}











