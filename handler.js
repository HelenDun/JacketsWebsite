var querystring = require("querystring");

// shows the pages correlating to the requested paths, w/ necessary data

// shows the home page
function home(response, data){
    console.log("Executing 'home' handler");
    // Image function does not work
    // loadImage("profile_picture.jpeg")
    response.writeHead(200, {  
        'Content-Type': 'text/html'  
    });
    response.write(data);  
    response.end();  
}

// shows the biography page
function biography(response,data){
    console.log("Executing 'biography' handler");
    // Image function does not work
    // loadImage("family_picture.jpeg")
    response.writeHead(200, {  
        'Content-Type': 'text/html'  
    });
    response.write(data);  
    response.end();
}
exports.home = home;
exports.biography = biography;

/*
function loadImage(src){
    var img = new Image();
    img.src = src;
    img.onload = () => {
        console.log("Image " + name + "loaded")
    }
}
*/