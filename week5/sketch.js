// windows
function setup() { 
   createCanvas(1000, 1000);
    noStroke();
}

function draw() {
    background(0);
    
    var windowWidth = width/6; // window width
    var windowHeight = height/2; // window height
    
    for ( var x = windowWidth/4; x < width; x+=windowWidth) {
       for (var y = windowHeight/4; y < height; y+=windowHeight) {
           
           fill("orange");
           rect(x, y, windowWidth/2, windowHeight/2);
           
           fill("yellow");
        
      
           rect(x, y + windowHeight/8, windowWidth/4, windowHeight/8);
           rect(x + windowWidth/4, y + windowHeight/8, windowWidth/4, windowHeight/8);
         
           fill("orange");
           triangle(500, 320, 40, 625, 960, 626);
        
           fill("red");
           triangle(500, 420, 40, 625, 960, 626);
           
             fill("yellow");
           triangle(500, 520, 40, 625, 960, 626);
           
           fill("orange");
           rect(40, 20, 920, 100);
           
           fill("black");
           rect(120, 30, 720, 70);
        }
    }
        
}