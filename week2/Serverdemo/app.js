var express = require('express');
var server = express();

server.listen(3000, function() {
  console.log("it works!");
})

server.get('/', function(req, res) {
  res.send("hello browser, from server");
});

server.get('/forbidden', function(req, res) {
  res.status(400).send("not allowed");
})

server.get('/nice-page', function(req, res) {
  res.sendFile(__dirname + '/public/example.html')
})
