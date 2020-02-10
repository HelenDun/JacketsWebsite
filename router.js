var fs = require('fs');

// determine whether the path being requested exists/open
function route(handle,pathname,response,reviewData){
    console.log("Routing request received for " + __dirname + pathname);
    if (typeof handle[pathname] === 'function'){
        fs.readFile(__dirname + pathname, (error,data) => {
            if(error){ 
                // if the html page for the path does not exist, 404 error
                console.log("No html file for " + pathname);
                response.writeHead(404,{"Content-Type": "text/plain"});
                response.write("Error 404 page not found");
                response.end();
            }else{
                // if the path exists and is open, send data to the path's function
                handle[pathname](response,data,reviewData);
            }
        });
    }else{ 
        // if the handle for the path does not exist, 404 error
        console.log("No handler for " + pathname);
        response.writeHead(404,{"Content-Type": "text/plain"});
        response.write("Error 404 page not found");
        response.end();
    }
}

exports.route = route;