var express = require('express');
// var Beer = require('./public...')
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/beers');
var Beer = require("./models/BeerModel");

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/', function(req, res, next) {
  res.send('Testing Server')
})

app.get('/beers', function (req, res, next) {
  Beer.find(function (error, beers) {
    if (error) {
      console.error(error)
      return next(error);
    } else {
      res.send(beers);
    }
  });
});

app.listen('8000', function() {
  console.log("Listening on port 8000");
})

// app.post('/beers', function(req, res, next) {
//   var beer = new Beer(req.body);

//   beer.save(function(err, beer) {
//     if (err) {
//       console.error(err)
//       return next(err);
//     } else {
//       res.json(beer);
//     }
//   });
// });

// app.delete('/beers/:id', function(req, res, next) {
//   console.log(req.param.id);
//   res.send("In the delete route");
// });

// app.delete('/beers/:id', function(req, res, next) {
//   Beer.remove({ _id: req.param.id }, function(err) {
//     if (err) {
//       console.error(err)
//       return next(err);
//     } else {
//       res.send("Beer Deleted");
//     }
//   });
// });

// app.put('/beers/:id', function(req, res, next) {
//   console.log(req.params.id);
//   console.log(req.body);
//   res.send(req.body);
// });

app.put('/beers/:id', function(req, res, next) {
  console.log(req.params.id);
  console.log(req.body);
  res.send(req.body);
});