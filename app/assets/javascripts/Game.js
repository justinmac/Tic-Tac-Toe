//Game() "function()" which holds many key 
//variables, and contains four necessary methods.
function Game() {
	//switchPlayer() function of the Game, which switches the player.
	this.switchPlayer = function() {
		if (this.currentPlayer.charAt(0) == "X") {
			this.currentPlayer = "O";
		}
		else {
			this.currentPlayer = "X";
		}
	}
	
	//init() function of the Game, initializes the Game.
	this.init = function() {
		this.savePlayer = "X";
		this.staleCheck = false;
		this.currentPlayer = "X";
		this.xState = [];
		this.oState = [];
		for (var falseSet = 0; falseSet < 9; falseSet++) {
			this.xState[falseSet] = false;
			this.oState[falseSet] = false;
		}
		this.win = false;
		this.stateStr = "_________";
	}
	
	//checkWin() function of the Game, checks to see if the Game has been won.
	this.checkWin = function() {
		//calling the checkState method, which could set the variable win to true
		this.checkState(this.xState);
		this.checkState(this.oState);
		this.staleCheck = true;
		//check for a stalemate based on what checkState() returned.
		for (var check = 0; check < this.xState.length; check++) {
			if (!(this.xState[check] || this.oState[check]))
				this.staleCheck = false;
		}
		//what to do if there was a win this turn.
		if (this.win) {
			curO = (this.currentPlayer) + ' has won';
			curX = (this.currentPlayer) + ' has won';
		}
		//what to do if there was a stalemate this turn.
		if (this.staleCheck && !this.win) {
			curO = 'Stalemate!';
			curX = 'Stalemate!';
		}
	}
	
	//checkState() function of the Game, which checks every possible 
	//win condition, and sets the variable win accordingly.
	this.checkState = function(state) {
		//check horizontal
		for (var y = 0; y < 9; y+=3) {
			if (state[0+y] && state[1+y] && state[2+y])
				this.win = true;
		}
		//check vertical
		for (var x = 0; x < 3; x++) {
			if (state[0+x] && state[3+x] && state[6+x])
				this.win = true;
		}
		//check the "north-west" to "sout-west" diagonal
		if (state[0] && state[4] && state[8])
				this.win = true;
		//check the "north-east" to "south-east" diagonal
		if (state[2] && state[4] && state[6])
				this.win = true;
	}
	this.move = function(space) {
		if (this.win == false) {
			//and if the cell is blank...
			if (!this.xState[space] && !this.oState[space]) {
				//the x/oState is changed and an X or O is put into the clicked cell.
				if (this.currentPlayer.charAt(0) == 'X') {
					this.xState[parseInt(space)] = true;
				}
				else {
					this.oState[parseInt(space)] = true;
				}
				this.checkWin();
			}
			this.getState();
			this.switchPlayer();
		}
	}
	this.getState = function() {
		this.stateStr = "";
		for (var xo = 0; xo < this.xState.length; xo++) {
			if (this.xState[xo]) {
				this.stateStr += "X";
			}
			else if (this.oState[xo]) {
				this.stateStr += "O";
			}
			else {
				this.stateStr += "_";
			}
		}
	}
	this.setState = function (savedStr) {
		for (var xs = 0; xs < this.xState.length; xs++) {
			if (savedStr.charAt(xs) == 'X')
				this.xState[xs] = true;
			if (savedStr.charAt(xs) == 'O')
				this.oState[xs] = true;
		}
		this.checkWin();
	}
	this.isValid = function () {
		var diff = 0;
		for (var valid = 0; valid < this.xState.length;  valid++) {
			if (this.xState[valid]) diff ++;
			if (this.oState[valid]) diff --;
		}
		return Math.abs(diff) <= 1;
	}
	this.finalSwitch = function() {
		if (this.currentPlayer.charAt(0) == "X") {
			this.savePlayer = "O";
		}
		else {
			this.savePlayer = "X";
		}
	}
}