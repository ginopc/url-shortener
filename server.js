/**
 *   URL Shortener microservice
 *
 *   author  : Maurizio Aru
 *   created : 2017.04.26
 */

var express = require('express');
var app = express();
var PORT = process.env.port || 8080;

app.get('/', function(req, res, next) {
	res.send('URL-shortener microservice - by M. Aru');
});

app.listen(PORT, function(){
	console.log('Server running on port ' + PORT);
	console.log('[CTRL+C to exit]');
});
