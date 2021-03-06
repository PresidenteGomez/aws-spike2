var express = require('express');
var Routes = require('./server/routes');
// var config = require('./server/config/config');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

/** load routes*/

require('./server/routes')(app);

// var port = config.server.port;

app.listen(process.env.PORT || port);

console.log('App started on port ' + port);