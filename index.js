'use strict';

var express = require('express'),
exphbs  = require('express-handlebars'); 

var app = express();
var port = 3000;


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {

	var result = {
		"data" : [
			"http://www.techrepublic.com/blog/software-engineer/calling-restful-services-from-your-android-app/",
			"http://www.joelonsoftware.com/items/2008/05/01.html",
			"http://www.vogella.com/tutorials/AndroidListView/article.html",
			"https://github.com/codepath/android-custom-array-adapter-demo/tree/master/app/src/main/res/layout",
			"http://derickbailey.com/2015/11/02/handling-requestreply-timeouts-with-rabbitmq-node-and-promises/?__s=ze9f149rsq6vdyxrr3dm",
			"http://derickbailey.com/email-courses/"
		]
	}
	res.render('home',result);
});

app.get('/search',function(req,res){

	var searchLabel = " for " + req.query.search || "";

	var result = {
					"label" : searchLabel,
					"data" : [{
						"id" : "1",
						"ip":"0.0.0.0",
						"customerName" : "Google",
						"hni" : "13",
						"dov" : "10",
						"predictedSKU" : "23",
						"desc" : "some description",
						"confidence" : "some confidence",
						"suggestedRecom" : "some suggestion recomendation",
						"actionTakenDate" : "22-05-2015 22:23:00",
						"actualSKU" : "23"
					},
					{
						"id" : "2",
						"ip":"0.0.0.0",
						"customerName" : "Google",
						"hni" : "13",
						"dov" : "10",
						"predictedSKU" : "23",
						"desc" : "some description",
						"confidence" : "some confidence",
						"suggestedRecom" : "some suggestion recomendation",
						"actionTakenDate" : "22-05-2015 22:23:00",
						"actualSKU" : "23"
					},
					{
						"id" : "3",
						"ip":"0.0.0.0",
						"customerName" : "Google",
						"hni" : "13",
						"dov" : "10",
						"predictedSKU" : "23",
						"desc" : "some description",
						"confidence" : "some confidence",
						"suggestedRecom" : "some suggestion recomendation",
						"actionTakenDate" : "22-05-2015 22:23:00",
						"actualSKU" : "23"
					},
					{
						"id" : "4",
						"ip":"0.0.0.0",
						"customerName" : "Google",
						"hni" : "13",
						"dov" : "10",
						"predictedSKU" : "23",
						"desc" : "some description",
						"confidence" : "some confidence",
						"suggestedRecom" : "some suggestion recomendation",
						"actionTakenDate" : "22-05-2015 22:23:00",
						"actualSKU" : "23"
					}
					,{
						"id" : "5",
						"ip":"0.0.0.0",
						"customerName" : "Google",
						"hni" : "13",
						"dov" : "10",
						"predictedSKU" : "23",
						"desc" : "some description",
						"confidence" : "some confidence",
						"suggestedRecom" : "some suggestion recomendation",
						"actionTakenDate" : "22-05-2015 22:23:00",
						"actualSKU" : "23"
					}
					]
				};
	res.render('search',result);
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
		{ name: 'Used', y: 75.0, color: '#fa1d2d' },
		{ name: 'Rest', y: 25.0, color: '#3d3d3d' }
		],
		"categorie":{
			"categories" : ['Categorie 1', 'Categorie 2', 'Categorie 3', 'Categorie 4', 'Categorie 5','Categorie 6', 'Categorie 7', 'Categorie 8', 'Categorie 9', 'Categorie 10', 'Categorie 11', 'Categorie 12', 'Categorie 13', 'Categorie 14', 'Categorie 15', 'Categorie 16', 'Categorie 17', 'Categorie 18', 'Categorie 19','Categorie 20', 'Categorie 21','Categorie 22', 'Categorie 23', 'Categorie 24', 'Categorie 25', 'Categorie 26', 'Categorie 27', 'Categorie 28', 'Categorie 29', 'Categorie 30'],
			"serie1" : [100, 80, 46, 61, 23,12, 24, 16, 14, 12, 12, 24, 19, 13, 11, 11, 14, 11, 11, 11, 11, 13, 22, 10, 18, 15, 24, 31, 19, 10],
			"serie2" : [0, 0, 58, 63, 55, 46, 45, 41, 38, 54, 50, 39, 48, 70, 63, 60, 58, 63, 83, 89, 83, 79, 83, 100, 104, 108, 52, 46, 83, 89]
		},
		"skus":{
			"daily" : [{
				name: 'suk1',
				color: '#00FF00',
				y: 110
			}, {
				name: 'suk2',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk3',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk4',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk5',
				color: '#00FF00',
				y: 11
			}, {
				name: 'suk6',
				color: '#00FF00',
				y: 21
			}, {
				name: 'suk7',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk8',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk9',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk10',
				color: '#00FF00',
				y: 51
			}, {
				name: 'suk11',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk12',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk13',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk14',
				color: '#00FF00',
				y: 41
			}, {
				name: 'suk15',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk16',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk17',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk18',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk19',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk20',
				color: '#00FF00',
				y: 31
			}, {
				name: 'suk21',
				color: '#00FF00',
				y: 61
			}, {
				name: 'suk22',
				color: '#00FF00',
				y: 71
			}, {
				name: 'suk23',
				color: '#00FF00',
				y: 10
			}
			],
			"monthly":[{
				name: 'suk1',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk2',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk3',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk4',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk5',
				color: '#00FF00',
				y: 11
			}, {
				name: 'suk6',
				color: '#00FF00',
				y: 21
			}, {
				name: 'suk7',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk8',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk9',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk10',
				color: '#00FF00',
				y: 51
			}, {
				name: 'suk11',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk12',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk13',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk14',
				color: '#00FF00',
				y: 41
			}, {
				name: 'suk15',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk16',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk17',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk18',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk19',
				color: '#00FF00',
				y: 10
			}, {
				name: 'suk20',
				color: '#00FF00',
				y: 31
			}, {
				name: 'suk21',
				color: '#00FF00',
				y: 61
			}, {
				name: 'suk22',
				color: '#00FF00',
				y: 71
			}, {
				name: 'suk23',
				color: '#00FF00',
				y: 10
			}
			]
		} 
		
	}
	);
socket.on('send', function (result) {
	io.sockets.emit('data', result);
});
});
