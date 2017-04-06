// windows
function setup() { 
   createCanvas(1000, 1000);
    noStroke();
}

function draw() {
    background('darkgreen');
    
    var windowWidth = width/6; // window width
    var windowHeight = height/2; // window height
    
    for ( var x = windowWidth/4; x < width; x+=windowWidth) {
       for (var y = windowHeight/4; y < height; y+=windowHeight) {
           
           fill("grey");
           rect(x, y, windowWidth/2, windowHeight/2);
           
           fill("yellow");
           stroke(167, 22, 54);
           
           rect(x, y, windowWidth/4, windowHeight/8);
           
           rect(x, y, windowWidth/2, windowHeight/8);
           
           rect(x, y + windowHeight/8, windowWidth/4, windowHeight/8);
           
           rect(x + windowWidth/4, y + windowHeight/8, windowWidth/4, windowHeight/8);
           
        
           
           fill("brown");
           
           rect(x, y, windowWidth/2, windowHeight/16);
           
           rect(x, y, windowWidth/16, windowHeight/2);
           
           fill("red");
           
           rect(x, y * 2, windowWidth/2, windowHeight/16);
           
         
        }
    }
        
}