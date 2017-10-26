var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var server = require('http').Server(app);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//routes
//--------------------------------------------------------------------------
//Login page files:
exports.home = function(request, response){
	response.sendFile(__dirname + '/resources/templates/login/login.html');
	console.log("login.html sent");
}

exports.usrimg = function(request, response) {
	response.sendFile(__dirname + '/resources/templates/login/images/user.png');
	console.log("user.png sent");
}

exports.keyimg = function(request, response) {
	response.sendFile(__dirname + '/resources/templates/login/images/key.png');
	console.log("key.png sent");
}

exports.redoimg = function(request, response) {
	response.sendFile(__dirname + '/resources/templates/login/images/redo.png');
	console.log("redo.png sent");
}

exports.nameimg = function(request, response) {
	response.sendFile(__dirname + '/resources/templates/login/images/name.png');
	console.log("name.png sent");
}

exports.mailimg = function(request, response) {
	response.sendFile(__dirname + '/resources/templates/login/images/mail.png');
	console.log("mail.png sent");
}

exports.lockimg = function(request, response) {
	response.sendFile(__dirname + '/resources/templates/login/images/lock.png');
	console.log("lock.png sent");
}

exports.avatarimg = function(request, response) {
	response.sendFile(__dirname + '/resources/templates/login/images/avatar.png');
	console.log("avatar.png sent");
}

//---------------------------

//Login javascript code
exports.login = function(request, response){
	response.sendFile(__dirname + '/resources/templates/login/login.js');
	console.log("login.js sent");
}

//Hashing algorithm
exports.md5 = function(request, response){
	response.sendFile(__dirname + '/resources/templates/login/md5.js');
	console.log("md5.js sent");
}

//--------------------------------------------------------------------------
//SignUp page files:

exports.signup = function(request, response){
	response.sendFile(__dirname + '/resources/templates/login/signup.html');
	console.log("signup.html sent");
}

//---------------------------

//The game homepage

exports.start = function(request, response) {
	response.sendFile(__dirname + '/resources/templates/game/index.html');
	console.log("index.html sent");
}
exports.game = function(request, response) {
	response.sendFile(__dirname + '/resources/templates/game/game.js');
	console.log("game.js sent");
}

//---------------------------
//TheGame Common style file and background

exports.style = function(request, response) {
	response.sendFile(__dirname + '/resources/templates/login/style.css');
	console.log("style.css sent");
}

exports.background = function(request, response) {
	response.sendFile(__dirname + '/resources/templates/login/images/background.jpg');
	console.log("background.jpg sent");
}

exports.username = function(request, response){
	var username = request.body;
	console.log(request.body);
	//check username with data base and respond with salt

}

/*
 * Sample Image route function
 * send file param should point to file in our directory
 */
