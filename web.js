// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();
var port = Number(process.env.PORT || 5000);

app.use(logfmt.requestLogger());

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res)
{
    res.render('index.html');
});

app.listen(port, function() {
  console.log("Listening on " + port);
});