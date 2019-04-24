

function Vida(escala){
	this.escala = escala;

	this.posX = this.escala.trinta() / 2;
	this.posY = this.escala.trinta() / 3;
	this.posWidth = this.escala.cinco();
	this.posHeight = this.escala.trinta();

	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;
	this.color = "rgba(0,0,255,0.8)";
	this.colorVermelha = "rgba(255,0,0,0.5)";

	this.quantidade = 4;

	this.iniciar();
}

Vida.prototype = {
	iniciar: function(){
		this.x = this.posX;
		this.y = this.posY;
		this.width = this.posWidth;
		this.height = this.posHeight;

	},
	
	atualizar: function(){
		this.width = this.width - this.escala.vinte();
		//console.log("this.width", this.width);
	},

	desenhar: function(){

		this.escala.ctx.fillStyle = this.colorVermelha;
		this.escala.ctx.fillRect(this.posX, this.posY, this.posWidth, this.posHeight);

		if(this.width > 0){
			this.escala.ctx.fillStyle = this.color;
			this.escala.ctx.fillRect(this.x, this.y, this.width, this.height);
		}
	}
}




