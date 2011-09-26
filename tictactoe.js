$(document).ready(function(){
	var curPlayer, win, currentPlayer, tableCells, 
	curX, curO, staleCheck;
	var xState = [];
	var oState = [];

	function init() {
		tableCells = $('td');
		$.each (tableCells, function(j, el) {
			$(el).click(onClick);
		});
		curPlayer = $('p')[0];
		$.each (tableCells, function(i, el) {
			xState[i] = false;
			oState[i] = false;
		});
		win = false;
		currentPlayer = 'X';
		$(curPlayer).text("The CurrentPlayer is X.");
		curO = 'The Current Player is O.';
		curX = 'The Current Player is X.';
		staleCheck = false;
	}

	function onClick() {
		if (win == false) {
			if ($(this).text() == '') {
				var self = this;
				$(self).text(currentPlayer);
				if (currentPlayer == 'X')
					xState[parseInt(self.id)] = true;
				else
					oState[parseInt(self.id)] = true;
				checkWin();
				if (currentPlayer == 'X') {
					curPlayer.textContent = curO;
					currentPlayer = 'O';
				}
				else {
					 curPlayer.textContent = curX;
					 currentPlayer = 'X';
				}
			}
		}

	}

	function checkWin() {
		checkState(xState);
		checkState(oState);
		staleCheck = true;
		for (var check = 0; check < xState.length; check++) {
			if (!(xState[check] || oState[check]))
				staleCheck = false;
		}
		if (win) {
			alert((currentPlayer) + ' has won, start the game to play again.');
			curO = (currentPlayer) + ' has won';
			curX = (currentPlayer) + ' has won';
		}
		if (staleCheck) {
			alert('Stalemate! Start the game to play again.');
			curO = 'Stalemate!';
			curX = 'Stalemate!';
		}
	}
	function checkState(state) {
		//check horizontal
		for (var y = 0; y < 9; y+=3) {
			if (state[0+y] && state[1+y] && state[2+y])
				win = true;
		}
		//check vertical
		for (var x = 0; x < 3; x++) {
			if (state[0+x] && state[3+x] && state[6+x])
				win = true;
		}
		//check the "north-west" to "sout-west" diagonal
		if (state[0] && state[4] && state[8])
				win = true;
		//check the "north-east" to "south-east" diagonal
		if (state[2] && state[4] && state[6])
				win = true;
	}
	window.init = init;
});
function reloadPage() {
	window.location.reload();
}
function startGame() {
	$('div').remove();
	$('p').remove();
	var numRows = 3;
	var numCol = 3;
	var div = $('<div></div>').appendTo('body');
	$(div).addClass("outer");
	var table = $('<table></table>').appendTo(div);
	$(table).addClass("inner");
	for (var q = 0; q < numRows; q++)
		$('<tr></tr>').appendTo(table);
	var rows = $('tr');
	$.each (rows, function(num, row) {
		for (var qw = 0; qw < numCol; qw++) {
			var cell = $('<td></td>').appendTo(row);
			$(cell).addClass("cell");
		}
	});
	var cells = $('td');
	for (var qz = 0; qz < cells.length; qz++)
		$(cells[qz]).attr('id', qz);
	$('<p></p>').appendTo('body');
	init();
}