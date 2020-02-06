var querystring = require("querystring");

function home(response, data){
    console.log("Executing 'home' handler");
    // loadImage("profile_picture.jpeg")
    response.writeHead(200, {  
        'Content-Type': 'text/html'  
    });
    response.write(data);  
    response.end();  
}

function biography(response,data){
    console.log("Executing 'biography' handler");
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