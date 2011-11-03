function testAjax() {
	alert('testing ajax');
	function loadStuffFromServer(gameData) {
		alert(gameData.state);
	}
	$.get ( 'http://localhost:3000/games/6.json', loadStuffFromServer, 'json');
}

function testPost() {
	var url = 'http://localhost:3000/games/6.json',
		settings = {
			type: 'PUT', // we use this to modify existing games
			dataType: 'json',
			data: {
				game: {
					state: 'X:XXXXXXXXX'
				}
			},
			error: function(err) {
				alert('error: '  + err);
			},
			success: afterSaveToServer
		};
		
	$.ajax ( url, settings );
}

function afterSaveToServer(game) {
	alert('game: ' + game);
}

$(function(){
	testPost();
	setTimeout(testPost, 5000);
});