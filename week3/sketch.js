function setup(){
  // Create the canvas
  createCanvas(1000, 1000);
  background(51);
    

var c = color('green');
fill(c);  
strokeWeight(4);
textSize(25)    
text("TRIFORCE", 430, 450);

var c = color('yellow');
fill(c);
strokeWeight(4);
stroke(255, 255, 255);
triangle(100, 600, 300, 400, 500, 600);
triangle(500, 600, 700, 400, 900, 600);
triangle(300, 400,  500, 200, 700, 400);

var c = color('Green');
fill(c);
textSize(50)    
text("Mark G", 450, 700);
}

