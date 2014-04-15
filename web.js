// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.configure(function(){

  // disable layout
  app.set("view options", {layout: false});

  // make a custom html template
  app.register('.html', {
    compile: function(str, options){
      return function(locals){
        return str;
      };
    }
  });
});

app.use(logfmt.requestLogger());

app.set('views', __dirname + '/views');
//app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res)
{
    res.render('index.html');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});