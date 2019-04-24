

//CLASSE DA FASE 01
function Fase01(escala, teclado){
	this.escala = escala;
	this.teclado = teclado;

	this.cenario = new Cenario(this.escala);
	this.helicoptero = new Helicoptero(this.escala, this.teclado);
	this.colisao = new Colisao();
	this.vida = new Vida(this.escala);
	this.gameover = new GameOver(this.escala);

	this.inimigos =  [];	 // new Enemy(this.escala);
	this.explosoes = [];

	this.countInimigo = 0;
	this.timerInimigo = 60;
	this.jogando = true;

	this.iniciar();
}


//MÉTODOS DA CLASSE
Fase01.prototype = {
	iniciar: function(){
		console.log("FASE 01 INICIADA");
	},

	desenhar: function(){
		//this.escala.ctx.fillStyle = "#DDD";
		//this.escala.ctx.fillRect(0, 0, this.escala.largura(), this.escala.altura() );

		if(this.jogando){
			//Desenha o Cenario
			this.cenario.desenhar();

			//Desenha as explosões
			for(let i in this.explosoes){
				let explosao = this.explosoes[i];
				explosao.desenhar();
				if( !explosao.visible ){
					this.explosoes.splice(i, 1);
					i--;
				}
			}
		
			//Desenha os inimigos
			for(let i in this.inimigos){
				let inimigo = this.inimigos[i];
				inimigo.desenhar();
			}
	
			//Desenha o helicoptero
			this.helicoptero.desenhar();

			//Desenha os misseis
			for(let i in this.helicoptero.misseis){
				let missel = this.helicoptero.misseis[i];
				missel.desenhar();
			}

			//Desenha a vida
			this.vida.desenhar();
			if(this.vida.width <= 0){
				this.jogando = false;
			}

		}
		if(!this.jogando){		
			//Desenha o GameOver
			this.gameover.desenhar();
		}

	},

	atualizar: function(){
		//Atualiza o Cenario
		this.cenario.atualizar();

		//Gerador de inimigos
		if(this.countInimigo > this.timerInimigo && this.inimigos.length < 20){
			let inimigo = new Enemy(this.escala);
			this.inimigos.push( inimigo );
			this.countInimigo = 0;
		}
		this.countInimigo++;

		//Atualiza os inimigos
		for(let i in this.inimigos){
			let inimigo = this.inimigos[i];
			inimigo.atualizar();
			
			//Testa colisão do helicptero com o inimigo
			if( this.colisao.colidiu(this.helicoptero, inimigo) ){
				this.explosoes.push( new Explosao( this.escala, inimigo.x, inimigo.y, inimigo.width, inimigo.height ) );
				inimigo.visible = false;
				this.vida.atualizar();
				this.helicoptero.countColisao = 0;
				//console.log("COLIDIU FASE ", this.visible);
			}
			//remove o inimigo
			if(inimigo.x + inimigo.width < 0 || inimigo.visible == false){
				this.inimigos.splice(i, 1);
				i--;
				//console.log("tamanho this.inimigos " + this.inimigos.length);
			}
		}

		//Atualizar os misseis
		for(let i in this.helicoptero.misseis){
			let missel = this.helicoptero.misseis[i];
			missel.atualizar();

			//Testa os misseis com cada inimigo na tela
			if(missel.visible){
				for(let e in this.inimigos){
					let enemy = this.inimigos[e];
					//console.log("enemy.visible ", enemy.visible);
					if(enemy.visible){
						//Verifica colisão com o missel e o inimigo
						if( this.colisao.colidiu(missel, enemy) ){
							missel.visible = false;
							//enemy.contador--;				
							//if(enemy.contador <= 0){
								enemy.visible = false;
								//Instancia uma explosão
								this.explosoes.push(new Explosao( this.escala, enemy.x, enemy.y, enemy.width, enemy.height) );
								//console.log("this.explosoes", this.explosoes.length);
							//}
							break;
						}
					}
				}
			}
			//remove os misseis do helicoptero
			if( !missel.visible || missel.x > this.escala.largura() ){
				//console.log("MISSEL ", missel.visible +" // " + missel.x + "  /// TAMANHO " + this.helicoptero.misseis.length);
				this.helicoptero.misseis.splice(i, 1);
				i--;
			}
		}

		//Desenha o helicoptero
		this.helicoptero.atualizar();
	},

	remover: function(){

	}
}






