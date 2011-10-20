describe('Tic tac toe game', function() {
	var game, spaceToMove;
	beforeEach(function () {
		game = new Game();
		game.init();
	});
	
	it('win is false', function() {
		expect(game.win).toEqual(false);
	});
	
	it('is won when three x\'s in a row', function() {
		game.setState('XXX______');
		expect(game.win).toEqual(true);
	});
	
	it('win is false when the state is changed', function() {
		spaceToMove = 4;
		game.move(spaceToMove - 1);
		expect(game.win).toEqual(false);
	});
	
	it('checks for valid states', function() {
		game.setState('XXX______');
		expect(game.isValid()).toEqual(false);
	});
	
	it('should switch players', function() {
		expect(game.currentPlayer).toEqual("X");
		game.move(4);
		expect(game.currentPlayer).toEqual("O");
	});
	
	it('should change state', function() {
		expect(game.stateStr).toEqual("_________");
		spaceToMove = 4;
		game.move(spaceToMove - 1);
		expect(game.stateStr).toEqual("___X_____");
	});
	
	it('should change the state with x\'s and o\'s', function() {
		game.move(1);
		game.move(3);
		expect(game.stateStr).toEqual("_X_O_____");
	});
});