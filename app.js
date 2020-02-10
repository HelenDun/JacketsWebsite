// http://localhost:8887/
var server = require('./server');
var router = require('./router');
var handler = require('./handler');

var  handle = {};
handle['/'] = handler.home;
handle['/home.html'] = handler.home;
handle['/biography.html'] = handler.biography;

// starts the website through the server module
server.startServer(router.route,handle);