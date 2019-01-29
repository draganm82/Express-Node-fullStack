//to run express is need to
var express = require('express');
var app = express();

var port = (8080);

app.use (express.static('public'));
app.use (express.static('src/views'));
app.use (express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function (reg,res){
  //res.send ('zdravo svete');
  res.render ('index', {list: ['first val', '2nd val', '3rd val'],
  nav:['services', 'portfolio', 'about', 'team','contact']

    });
});

app.get('/routing', function (reg,res){
  res.send ('zdravo node svete');
});

app.listen(port, function(err){
  console.log ('The server is running on port: ' + port);
});
