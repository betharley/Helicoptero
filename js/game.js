
//CLASSE DO GAME
function Game(escala, teclado){
	this.escala = escala;
	this.teclado = teclado;
	this.ligado = false;

	this.faseAtual = 1;
	this.fases = [];
	
	this.fase();
}

//MÉTODOS DO GAME
Game.prototype = {

	fase: function(){
		let objeto;
		if(this.faseAtual == 1){
			objeto = new Fase01(this.escala, this.teclado);
		}
		this.fases[0] = objeto;
	},
	
	ligar: function(){
		this.ligado = true;
		this.rodando();
	},

	desligar: function(){
		this.ligado = false;
	},

	rodando: function(){
		if(!this.ligado){
			return;
		}
		this.limpar();

		this.atualizar();
		this.desenhar();

		let roda = this;
		requestAnimationFrame(function(){
			roda.rodando();
		});
		//console.log("game ok");
	},

	desenhar: function(){
		this.fases[0].desenhar();
	},

	atualizar: function(){
		this.fases[0].atualizar();
	},

	limpar: function(){
		this.escala.ctx.clearRect(0, 0, this.escala.largura(), this.escala.altura() );
	},
}



