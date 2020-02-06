// server module
var http = require('http');
var url = require('url');

function startServer(route, handle) {
    function onRequest(request,response) { 
        var reviewData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request received for " + pathname);
        request.setEncoding("UTF8");

        request.addListener("data",(chunk) => {
            reviewData += chunk;
        });
        request.addListener("end", () => {
            route(handle,pathname,response,reviewData);
        });
    }
    http.createServer(onRequest).listen('8887');
    console.log("Server started on localhost port 8887.");
}

exports.startServer = startServer;