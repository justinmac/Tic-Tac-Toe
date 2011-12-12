var loginPass, loginName, id;
function takeLogin() {
	id = $("#id").val();
	loginPass = $("#pass").val();
	loginName = $("#name").val();
	getLoginData();
}
function getLoginData() {
	$.get ('http://localhost:3000/users/' + id + '.json', loadLoginData, 'json');
}
function loadLoginData(loginData) {
	if (loginPass == loginData.password && loginName == loginData.name) {
		alert("Login successful!");
		window.location = "http://localhost:3000/games"
		var url = 'http://localhost:3000/users/' + id + '.json',
		settings = {
			type: 'PUT',
			dataType: 'html',
			data: {
				user: {
					logged_in: 'y',
				}
			},
			success: function() {
				changeCell(el);
				game.finalSwitch();
				clicking = false;
			}
		};
	$.ajax (url, settings);
	}
}
function newUser() {
	window.location = "http://localhost:3000/users/new"
}