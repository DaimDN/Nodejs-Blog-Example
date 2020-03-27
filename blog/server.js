const express = require('express');
const app = express();
const port = 3000;
const parser = require('body-parser');


app.use(express.static(__dirname + '/public'));
app.use(parser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('pages/index');
});




app.listen(port, function(req, res){
  console.log("server is up and running on port " + port);
})
