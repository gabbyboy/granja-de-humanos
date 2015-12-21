/// <reference path="Helper/Constantes.ts" />

class GameManager
{
	game:Phaser.Game;
	
	constructor()
	{
		this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload:this.preload, create:this.create});
	}
	
	preload()
	{
		this.loadStates();
		//this.game.load.image('logo', 'assets/logo.png');
		this.game.stage.backgroundColor = 0x000000;
	}	
	
	loadStates()
	{
		this.game.state.add(Constantes.inicio, "")
	}
	
	create()
	{ 
		//var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
		//logo.anchor.setTo(0.5, 0.5);
	}
}

window.onload = () => {
	var game = new GameManager();
}