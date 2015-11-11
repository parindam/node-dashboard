'use strict';

var express = require('express'),
exphbs  = require('express-handlebars'); 

var app = express();
var port = 3000;


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
	res.render('home');
});



app.use(express.static('public/'));



var io = require('socket.io').listen(app.listen(port));

console.log("Listening on port " + port);

io.sockets.on('connection', function (socket) {
	socket.emit('data',
	{
		"bandwidth" :  [
			{ name: 'load percentage', y: 90.0, color: '#b2c831' },
			{ name: 'rest', y: 10.0, color: '#3d3d3d' }
		],
		"diskSpace" : [
			{ name: 'Used', y: 95.0, color: '#fa1d2d' },
			{ name: 'Rest', y: 5.0, color: '#3d3d3d' }
		],
		"categorie":{
			"categories" : ['Categorie 1', 'Categorie 2', 'Categorie 3', 'Categorie 4', 'Categorie 5','Categorie 6', 'Categorie 7', 'Categorie 8', 'Categorie 9', 'Categorie 10', 'Categorie 11', 'Categorie 12', 'Categorie 13', 'Categorie 14', 'Categorie 15', 'Categorie 16', 'Categorie 17', 'Categorie 18', 'Categorie 19','Categorie 20', 'Categorie 21','Categorie 22', 'Categorie 23', 'Categorie 24', 'Categorie 25', 'Categorie 26', 'Categorie 27', 'Categorie 28', 'Categorie 29', 'Categorie 30'],
			"serie1" : [100, 80, 46, 61, 23,12, 24, 16, 14, 12, 12, 24, 19, 13, 11, 11, 14, 11, 11, 11, 11, 13, 22, 10, 18, 15, 24, 31, 19, 10],
			"serie2" : [0, 0, 58, 63, 55, 46, 45, 41, 38, 54, 50, 39, 48, 70, 63, 60, 58, 63, 83, 89, 83, 79, 83, 100, 104, 108, 52, 46, 83, 89]
		}
		
	}
	);
	socket.on('send', function (result) {
		io.sockets.emit('data', result);
	});
});
