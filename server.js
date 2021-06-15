var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

require('./app/routes/customer.routes.js')(app);

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Servidor en http://%s:%s", host, port)

})