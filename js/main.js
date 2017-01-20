// game will have only one state
var GameState = {
	// load the game assets before game starts
	preload: function() {
		this.load.image('background', 'assets/images/background.png');
		this.load.image('arrow', 'assets/images/arrow.png');
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

		var animalData = [
			{key: 'chicken', text: 'CHICKEN'},
			{key: 'horse', text: 'HORSE'},
			{key: 'pig', text: 'PIG'},
			{key: 'sheep', text: 'SHEEP'},
		];

		this.animals = this.game.add.group();

		var self = this;
		var animal;
		animalData.forEach(function(element) {
			animal = self.animals.create(-1000, this.game.world.centerY, element.key);

			animal.customParams = {text: element.text};
			animal.anchor.setTo(0.5);

			animal.inputEnabled = true;
			animal.input.pixelPerfectClick = true;
			animal.events.onInputDown.add(self.animateAnimal, self);
		});

		this.currentAnimal = this.animals.next();
		this.currentAnimal.position.set(this.game.world.centerX, this.game.world.centerY);

		this.rightArrow = this.game.add.sprite(580, this.game.world.centerY, 'arrow');
		this.rightArrow.anchor.setTo(0.5);
		this.rightArrow.customParams = {direction: 1};
		// right arrow allow user input
		this.rightArrow.inputEnabled = true;
		this.rightArrow.input.pixelPerfectClick = true;
		this.rightArrow.events.onInputDown.add(this.switchAnimal, this);

		this.leftArrow = this.game.add.sprite(60, this.game.world.centerY, 'arrow');
		this.leftArrow.anchor.setTo(0.5);
		this.leftArrow.scale.x = -1;
		this.leftArrow.customParams = {direction: -1};
		// left arrow allow user input
		this.leftArrow.inputEnabled = true;
		this.leftArrow.input.pixelPerfectClick = true;
		this.leftArrow.events.onInputDown.add(this.switchAnimal, this);

	}, 
	// executed multiple times per second
	update: function() {

	},
	switchAnimal: function(sprite, event) {
		console.log('switch');
		var newAnimal, endX;

		if(sprite.customParams.direction > 0) {
			newAnimal = this.animals.next();
			endX = 640 + this.currentAnimal.width/2;
		} else {
			newAnimal = this.animals.previous();
			endX = -this.currentAnimal.width/2;
		}

		this.currentAnimal.x = endX; 
		// get direction of arrow

		// get next animal

		// get final destination of current animal

		// move current animal to final destination

		// set the next animal as the new current animal
	},
	animateAnimal: function(sprite, event) {
		console.log('animate animal');
	}
};

// initiate the Phaser framework
var game = new Phaser.Game(640, 360, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');