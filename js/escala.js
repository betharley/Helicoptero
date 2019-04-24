
//CLASSE DA ESCALA
function Escala(contexto){
	this.ctx = contexto;

}

//MÉTODOS DA ESCALA
Escala.prototype = {
	largura: function(){
		return Math.floor( this.ctx.canvas.width );
	},
	altura: function(){
		return Math.floor( this.ctx.canvas.height );
	},
	cinco: function(){
		return Math.floor( this.largura() / 5 );
	},
	dez: function(){
		return Math.floor( this.largura() / 10 );
	},
	quinze: function(){
		return Math.floor( this.largura() / 15 );
	},
	vinte: function(){
		return Math.floor( this.largura() / 20 );
	},
	trinta: function(){
		return Math.floor( this.largura() / 30 );
	},
	quarenta: function(){
		return Math.floor( this.largura() / 40 );
	},
	sessenta: function(){
		return Math.floor( this.largura() / 80 );
	},
	oitenta: function(){
		return Math.floor( this.largura() / 80 );
	},
	cem: function(){
		return Math.floor( this.largura() / 100 );
	}
}