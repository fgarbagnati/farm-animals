// game will have only one state
var GameState = {
	// load the game assets before game starts
	preload: function() {
		this.load.image('background', 'assets/images/background.png');
	},
	// executed after everything is loaded
	create: function() {
		this.background = this.game.add.sprite(0, 0, 'background');
	},
	// executed multiple times per second
	update: function() {

	}
};

// initiate the Phaser framework
var game = new Phaser.Game(640, 360, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');