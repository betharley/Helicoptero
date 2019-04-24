

//CLASSE DOS ENEMYS
function Enemy(escala){
	this.escala = escala;
	this.figure = imgEnemy1;
	this.srcX = 0;
	this.srcY = 0;
	this.srcWidth = 256;
	this.srcHeight = 120;

	this.x = this.escala.largura();
	this.y = 50 + Math.floor ( (this.escala.altura() - 100 ) * Math.random() );
	this.width = 100;
	this.height = 50;

	//this.contador = 3;
	this.anima = 1;
	this.visible = true;
	this.velocidade = 1.5;

	this.iniciar();
}

//MÉTODO DO ENEMY
Enemy.prototype = {
	iniciar: function(){
		this.width = this.escala.cinco() / 2;
		this.height= this.escala.dez() / 2;
		let escolha = (Math.random() * 10); // 0  - 256 - 512
		if(escolha <= 3){
			this.srcX = 0;
		}else
		if(escolha <= 6){
			this.srcX = 256;
		}else
		if(escolha <= 10){
			this.srcX = 512;
		}
	},

	desenhar: function(){
		//this.escala.ctx.fillStyle = "#F00";
		//this.escala.ctx.fillRect(200, 200, 50, 50);

		if(this.visible){
			this.escala.ctx.drawImage(	this.figure, 
							this.srcX, this.srcY, this.srcWidth, this.srcHeight,
							this.x, this.y, this.width, this.height);
			this.animacao();
		}

	},

	atualizar: function(){
		if(this.visible){
			this.x = this.x - this.velocidade;
		}
	},

	animacao: function(){
		this.anima++;

		if(this.anima == 40){
			this.anima = 1;
			this.srcY = 0;
		}

		if(this.anima%10 == 0){
			this.srcY = this.srcY + this.srcHeight;	
		}
	},

	atirar: function(){

	}
}


//Enemy.enemy1 = imgEnemy1;
//console.log("Enemy.imgEnemy1 ", Enemy.imgEnemy1);

/*






*/