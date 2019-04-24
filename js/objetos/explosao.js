

//CLASSE EXPLOSSÃO
function Explosao(escala, x, y, largura, altura){
	this.escala = escala;
	this.x = x;
	this.y = y;
	this.width = largura;
	this.height = altura;

	
	this.figure = imgExplosao;
	this.srcX = 0;
	this.srcY = 0;
	this.srcWidth = 192; 		// 959/5 ==  191.8
	this.srcHeight = 184; 		// 1104/6 == 184

	this.anima = 1;
	this.visible = true;
}

//METODOS DA CLASSE
Explosao.prototype = {
	desenhar: function(){
		this.escala.ctx.drawImage( 	this.figure,
						this.srcX, this.srcY, this.srcWidth, this.srcHeight,
						this.x, this.y, this.width, this.height
					);
		//console.log("explosão sendo desenhada .. ");
		//Anima a explosão		
		this.animacao();
	},

	atualizar: function(){

	},

	animacao: function(){
		this.anima++;

		if( this.anima%3 == 0 && this.visible ){
			this.srcX = this.srcX + this.srcWidth;
			
			if(this.anima%15 == 0){
				this.srcX = 0;
				this.srcY = this.srcY + this.srcHeight;
			}
			if(this.anima >= 90){
				this.visible = false;
			}
		}
	},

	
}


//C:\Users\BC649910\Documents\helicptero\index.html








