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
		game.setState("X:XXX______");
		expect(game.win).toEqual(true);
	});
	
	it('win is false when the state is changed', function() {
		spaceToMove = 4;
		game.move(spaceToMove - 1);
		expect(game.win).toEqual(false);
	});
	
	it('checks for valid states', function() {
		game.setState('X:XXX______');
		expect(game.isValid()).toEqual(false);
	});
	
	it('should switch players', function() {
		game.setState("X:_________");
		expect(game.currentPlayer).toEqual("X");
		game.move(4);
		expect(game.currentPlayer).toEqual("O");
	});
	
	it('should change state', function() {
		game.setState("X:_________");
		expect(game.stateStr).toEqual("X:_________");
		spaceToMove = 4;
		game.move(spaceToMove - 1);
		expect(game.stateStr).toEqual("O:___X_____");
	});
	
	it('should change the state with x\'s and o\'s', function() {
		game.setState("X:_________");
		game.move(1);
		game.move(3);
		expect(game.stateStr).toEqual("X:_X_O_____");
	});
});