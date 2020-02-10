// server module
var http = require('http');
var url = require('url');

function startServer(route, handle) {
    // creates listeners
    function onRequest(request,response) { 
        var data = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request received for " + pathname);
        request.setEncoding("UTF8");
        // if data is sent from a page, record it in the data variable
        request.addListener("data",(chunk) => {
            data += chunk;
        });
        // send pathname to router for verification and any data
        request.addListener("end", () => {
            route(handle,pathname,response,data);
        });
    }
    // starts the website
    http.createServer(onRequest).listen('8887');
    console.log("Server started on localhost port 8887.");
}

exports.startServer = startServer;