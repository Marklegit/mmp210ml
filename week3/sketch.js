function setup(){
  // Create the canvas
  createCanvas(1000, 1000);
  background(51);

var tff = 255;
var senhun = 700;     
var sixhun = 600;
var fivhun = 500;
var forhun = 400; 
    
var c = color


('green');
fill(c);  
strokeWeight(4);
textSize(25)    
text("TRIFORCE", 430, 450);

    
    
var c = color
('yellow');
fill(c);
strokeWeight(4);
stroke(tff, tff, tff);
triangle(100, sixhun, 300, forhun, fivhun,sixhun);
triangle(fivhun, sixhun, senhun, 400, 900, sixhun);
triangle(300, forhun,  fivhun, 200, senhun, 400);

var c = color

('Green');
fill(c);
textSize(50)    
text("Mark G", 450, senhun);
}

