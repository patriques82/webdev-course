var express = require('express');
var app = express();

app.listen(3000, function () {
  console.log('The app is working and listening for requests!');
});

/* Step 1 (Bareboones)
app.get('/', function(req, res) {
  res.send("Here is servers response..")
  // res.status(404).send('Sorry, we cannot find that!');
  // res.status(500).send({ error: 'something blew up' });
})
*/

// Step 2 (Send file)
app.get('/example', function(req, res) {
  res.sendFile(__dirname + '/public/example.html')
})
