//Game() "function()" which holds many key 
//variables, and contains four necessary methods.
function Game() {
	//switchPlayer() function of the Game, which switches the player.
	this.switchPlayer = function() {
		this.currentPlayer = this.currentPlayer == 'X' ?
			"O" : "X";
	}
	this.setCurrentPlayer = function(newCurPlayer) {
		this.currentPlayer = this.savePlayer = newCurPlayer;
	}
	//init() function of the Game, initializes the Game.
	this.init = function() {
		this.staleCheck = this.win = false;
		this.xState = [];
		this.oState = [];
		for (var falseSet = 0; falseSet < 9; falseSet++) {
			this.xState[falseSet] = this.oState[falseSet] = false;
		}
		this.stateStr = "_:_________";
	}
	//checkWin() function of the Game, checks to see if the Game has been won.
	this.checkWin = function() {
		//calling the checkState method, 
		//which could set the variable win to true
		this.checkState(this.xState);
		this.checkState(this.oState);
		this.staleCheck = true;
		//check for a stalemate based on what checkState() returned.
		for (var check = 0; check < this.xState.length; check++) {
			if (!this.xState[check] && !this.oState[check])
				this.staleCheck = false;
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
		if (!this.win) {
			//and if the cell is blank...
			if (!this.xState[space] && !this.oState[space]) {
				//the x/oState is changed and an X or O is put into the clicked cell.
				if (this.currentPlayer == "X") {
					this.xState[space] = true;
				}
				else {
					this.oState[space] = true;
				}
				this.checkWin();
			}
			this.switchPlayer();
			this.getState();
		}
	}
	this.getState = function() {
		this.stateStr = this.currentPlayer + ":";
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
		this.currentPlayer = savedStr[0] == "X" ?
		"X" : "O";
		this.savePlayer = savedStr[0] == "X" ?
		"X" : "O";
		for (var xs = 0; xs < this.xState.length; xs++) {
			if (savedStr.charAt(xs + 2) == 'X')
				this.xState[xs] = true;
			if (savedStr.charAt(xs + 2) == 'O')
				this.oState[xs] = true;
		}
		this.getState();
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
		this.savePlayer = this.currentPlayer == 'X' ? 
		"X" : "O";
	}
}