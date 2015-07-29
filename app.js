var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;
var morgan = require('morgan');
var Firebase = require("firebase");
var router  = express.Router();
var expressLayouts = require('express-ejs-layouts');


app.set('views', './views');
app.set('view engine', 'ejs');
app.set('layout', 'layout.ejs'); // defaults to 'layout'     


app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.get(function(req, res){
  res.render('layout')
})
router.get('/', function(req, res){
  res.render('index', { header: 'Welcome to ChatterBox'});
});
router.get('/rubyroom', function(req, res){
  res.render('rubyroom', { header: 'ChatterBox Ruby'});
});
router.get('/jsroom', function(req, res){
  res.render('jsroom', { header: 'ChatterBox JavaScript'});
});

app.use(expressLayouts);
app.use('/', router);
app.listen(port);
console.log('Server started on ' + port);