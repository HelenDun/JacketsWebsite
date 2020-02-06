var fs = require('fs');

function route(handle,pathname,response,reviewData){
    console.log("Routing request received for " + __dirname + pathname);
    if (typeof handle[pathname] === 'function'){
        fs.readFile(__dirname + pathname, (error,data) => {
            if(error){
                console.log("No html file for " + pathname);
                response.writeHead(404,{"Content-Type": "text/plain"});
                response.write("Error 404 page not found");
                response.end();
            }else{
                handle[pathname](response,data,reviewData);
            }
        });
    }else{
        console.log("No handler for " + pathname);
        response.writeHead(404,{"Content-Type": "text/plain"});
        response.write("Error 404 page not found");
        response.end();
    }
}

exports.route = route;