
function setup() {
    createCanvas(1000, 1000);
    background("grey");
    noStroke();

    var columns = 32;
    var rows = 32;
    var w = width / columns;
    var h = height / rows;

    noStroke();
    
    for (var x = 0; x < width; x += w) {
        for (var y = 0; y < height; y += h) {
            /*var r = random(173, 255);
            var g = random(222, 255);
            var b = random(135, 255);
            */
            var burlyWood = ('#DEB887');
           
            fill(burlyWood);
            noStroke();
            rect(x, y, w, w);
            
        
            
            for (var y = 0; y < width; y += h){
                
            noStroke();   
            rect(x, y, w, h);
                 
            }
            var r = random(40, 255);
            var g = random(20, 255);
            var b = random(10, 255);
            fill(r, g, b);
            stroke(3);
            rect(x/1, y/32, w*32, h*3);
          
            //folder
            ellipse(x, y, w, h);
            ellipse(x ++, y ++, x*-2, y);
    
            fill('black');
              //Line shelf
            rect(x/2, y/2, w*20, h*20); 
            
            fill('white');
            fill(255);
            
        //left eye
  arc(680, 700, 90, 90, PI, TWO_PI);
        //right eye    
  arc(800, 700, 90, 90, PI, TWO_PI);
  
            
            var r = random(40, 255);
            var g = random(20, 255);
            var b = random(20, 255);
            fill(r, b, g);
   
  arc(680, 700, 45, 45, PI, TWO_PI);
  arc(800, 700, 45, 45, PI, TWO_PI);
    
            fill('white');
    //mouth
            
  arc(740, 800, 190, 190, TWO_PI, PI);    



var r = random(165, 255);
var g = (14, 255);
var b = random(120, 255);
frameRate(1.2);
 fill(r, g, b);
  textSize(17);      
            textFont("Helvetica");
    text("A folder is placed on the bottom left, next to a creepy face.", 520, 950);         
    fill('red');    
    textSize(30);
     text("A catalog for this genre." ,560, 980);
            
            
    fill('white');
    textFont("Helvetica");
    textSize(25);
    stroke('black');
  
            
            
    var p2 ="It's supposed to be\nan ad for the library\nsection of Horror Fiction.\nI used random color values\non a For loop.The text \nhas random colors too.\nThe stroke on the text has\nframe count. Rect, Arc, and \nEllipse Shapes were used.";
  
text(p2, 10, 200); 
        }
    }
}



function draw(){
    
 var r = random(160, 255);
var g = (20, 255);
var b = random(142, 255);
frameRate(0.9);
 fill(r, g, b);
       
    
    stroke(2);
 var p = "Horror\nFiction\nShelf";     

    
  textSize(72);
textFont("Helvetica");
  text(p, 420, 200);
    
    
    
  noFill();
  stroke(255);
  strokeWeight(4 + (frameCount % 16));
  (frameCount % 400, 200, 100, 100);
    
    
}

