// game will have only one state
var GameState = {
	// load the game assets before game starts
	preload: function() {
		this.load.image('background', 'assets/images/background.png');
		this.load.image('chicken', 'assets/images/chicken.png');
		this.load.image('horse', 'assets/images/horse.png');
		this.load.image('pig', 'assets/images/pig.png');
		this.load.image('sheep', 'assets/images/sheep3.png');

	},
	// executed after everything is loaded
	create: function() {
		// fits game to screen with aspect ratio, centers game screen
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;

		this.background = this.game.add.sprite(0, 0, 'background');

		this.chicken = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'chicken');
		this.chicken.anchor.setTo(0.5, 0.5); // note -- since both values in setTo() are the same, can be written just once, as on line 28

		this.horse = this.game.add.sprite(120, 10, 'horse');
		this.horse.scale.setTo(0.5);

		this.pig = this.game.add.sprite(500, 300, 'pig');
		this.pig.anchor.setTo(0.5);
		this.pig.scale.setTo(-1, 1);
	},
	// executed multiple times per second
	update: function() {

	}
};

// initiate the Phaser framework
var game = new Phaser.Game(640, 360, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');