var express = require('express');
var bodyParser = require('body-parser'); 
var app = express();
var mongoose = require('mongoose');

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 

app.listen(8000, function() {
  console.log("Fullstack project. Listening on 8000.")

});
