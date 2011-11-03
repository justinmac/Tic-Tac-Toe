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
	}
}