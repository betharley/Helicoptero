
//CLASSE DE COLISÃO
function Colisao(){

}

//MÉTODOS DA COLISÃO
Colisao.prototype = {

	colidiu: function(nave, enemy){

		//Distância dos centros dos objetos
		let distaX = (nave.x + nave.width/2) - (enemy.x + enemy.width/2);
		let distaY = (nave.y + nave.height/2) - (enemy.y + enemy.height/2);

		//Soma das larguras
		let largura = (nave.width + enemy.width) / 2;
		let altura = (nave.height + enemy.height) / 2;
	
		if( Math.abs(distaX) < largura && Math.abs(distaY) < altura ){
			//nave.colidiu = true;
			//enemy.colidiu = true;
			//console.log("COLIDIU ... ");
			return true;
		}
		//console.log("COLIDIU ... ", altura);
		return false;
	},
	


}




















/*













Zyxel-AMG1302-T15C- 
S162E18020158
 (Online)
2134092633
*/





