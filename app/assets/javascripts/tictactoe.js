//initializes the "Game" object and stores it in a variable "game."
var game = new Game();
//calls the StartGame() function when the page loads
$(document).ready(startGame);
//initializing many variables for varied use in the program.
var curPlayer, curPlayBox, updateForm, stateBox
var saverbox, saverStr, tableCells;
//sets the vars that will show the user who's turn it is.
var curO = 'The Current Player is O.';
var curX = 'The Current Player is X.';

//init() function, which begins the gameplay, 
//after the StartGame() function has set up the board.
function init() {
	tableCells = $('td');
	//initializes "game"
	game.init();
	$(stateBox).val(game.stateStr);
	$(curPlayer).text("The CurrentPlayer is X.");
	//sets up the clickListener for the cells, and sets all of the 
	//contents of the xState and oState arrays to false.
	$.each (tableCells, function(j, el) {
		$(el).click(onClick);
	});
	$.each (tableCells, function(i, el) {
		game.xState[i] = false;
		game.oState[i] = false;
	});
}

//startGame() function, that begins the game whenever the page 
//is loaded, beginning where the game was left off.
function startGame() {
	//removing past html that is no longer needed.
	$('div.outer').remove();
	$('p.current').remove();
	var numRows = 3;
	var numCol = 3;
	//setting up the div, table, rows, and finally 
	//cells, and adding classes to all of them.
	var div = $('<div></div>').appendTo('body').addClass("outer");
	var table = $('<table></table>').appendTo(div).addClass("inner");
	for (var q = 0; q < numRows; q++)
		$('<tr></tr>').appendTo(table);
	var rows = $('tr');
	$.each (rows, function(num, row) {
		for (var qw = 0; qw < numCol; qw++)
			var cell = $('<td></td>').appendTo(row).addClass("cell");
	});
	var cells = $('td');
	for (var qz = 0; qz < cells.length; qz++)
		$(cells[qz]).attr('id', qz);
	$('<p></p>').appendTo('body').addClass("current");
	//calls the setHtmlVars() function, which gives 
	//values to many html based variables
	setHtmlVars();
	saverStr = $(saverbox).val();
	//calls the regular init() function
	init();
	//after the many xState and oState components have been set to
	//false, the function sets them to true based on saverBox.
	game.setState(saverStr);
	$.each (tableCells, function(c, cel) {
		if (game.xState[c])
			$(cel).text("X");
		if (game.oState[c])
			$(cel).text("O");
	});
	game.currentPlayer = $(curPlayBox).val();
	game.savePlayer = $(curPlayBox).val();
}

//onClick() function, that plants an X or O in the cell clicked, if that 
//cell is empty, and then checks to see if someone has won.
function onClick() {
	//if the game has not been won...
	if (game.win == false) {
		//and if the cell is blank...
		if ($(this).text() == '') {
			game.move(this.id);
			changeCurPlayBox();
			changeCell(this);
			game.finalSwitch();
			if (game.win)
				alert((this.currentPlayer) + ' has won, new game to play again.');
			if (game.staleCheck)
				alert('Stalemate! New game to play again.');
			if (this.currentPlayer == 'X')
				$(curPlayer).text(curO);
			else
				$(curPlayer).text(curX);
			game.getState();
			$(statebox).val(game.stateStr);
			$(saverbox).val(game.stateStr);
			//submit the form to save the game temporarily.
			$(updateForm).submit();
		}
	}
}

//getState() function, that sets the state String to 
//what the game's state happens to be.


//newGame() function, starts the game over completely, 
//with blank cells and blank arrays xState and oState.
function newGame() {
	//calls the setHtmlVars() function, which gives 
	//values to many html based variables
	setHtmlVars();
	//removing past html that is no longer needed.
	$('div.outer').remove();
	$('p.current').remove();
	var numRows = 3;
	var numCol = 3;
	//setting up the div, table, rows, and finally 
	//cells, and adding classes to all of them.
	var div = $('<div></div>').appendTo('body').addClass("outer");
	var table = $('<table></table>').appendTo(div).addClass("inner");
	for (var q = 0; q < numRows; q++)
		$('<tr></tr>').appendTo(table);
	var rows = $('tr');
	$.each (rows, function(num, row) {
		for (var qw = 0; qw < numCol; qw++)
			var cell = $('<td></td>').appendTo(row).addClass("cell");
	});
	var cells = $('td');
	for (var qz = 0; qz < cells.length; qz++)
		$(cells[qz]).attr('id', qz);
	$('<p></p>').appendTo('body').addClass("current");
	//calls the regular init() function
	init();
	//note the lack of code here, 
	//because there is no need to set any 
	//xState components or oState components 
	//to true when starting a new game.
}

//setHtmlVars() function, which sets the reference for statebox, 
//curPlayBox, updateForm, saverBox, and curPlayer.
function setHtmlVars() {
	statebox = $("#new_game_saver");
	curPlayBox = $("#game_currentplayer");
	updateForm = $('form.edit_game');
	saverbox = $("#game_state");
	curPlayer = $('p')[0];
}
function changeCell(cell) {
	$(cell).text(game.savePlayer);
}
function changeCurPlayBox() {
	if (game.currentPlayer.charAt(0) == "X") {
		curPlayBox.val("O");
	}
	else {
		curPlayBox.val("X");
	}
}