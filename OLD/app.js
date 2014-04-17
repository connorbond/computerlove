//SIMPLE MESSAGE
/*

	var express = require("express");
	var logfmt = require("logfmt");
	var app = express();

	app.use(logfmt.requestLogger());

	app.get('/', function(req, res) {
		res.send('Our week @ Code. Coming soon...');
	});

	//app.listen(3000)

*/

//FULL SITE

	var express = require('express')
		, logger = require('morgan')
		, stylus = require('stylus')
		, nib = require('nib')
		
	var app = express();
		
	function compile(str, path) {
		return stylus(str)
			.set('filename', path)
			.use(nib());
	}

	app.set('views', __dirname + '/views')
	app.set('view engine', 'jade')
	app.use(logger)
	app.use(stylus.middleware(
		{ src: __dirname + '/public'
		, compile: compile
		}
	))
	app.use(express.static(__dirname + '/public'))

	app.get('/', function (req, res) {
		res.render('index',
		{ title : 'Week @ Code' }
		)
	})

	var port = Number(process.env.PORT || 3000);
	app.listen(port, function() {
		console.log("Listening on " + port);
	});