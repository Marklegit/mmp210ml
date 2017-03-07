function setup() {
  createCanvas(1000, 1000);
}
function draw() {
 
    
  background('#222222');
/*cursor horizontal line*/    
 line(width/2, 0, width/2, height);
  if (mouseX < 500) {
    cursor(CROSS);
  } else {
    cursor(HAND);
  }   
/*cursor horizontal line*/    
    
    
  strokeWeight(4);
  fill(55, 190, 10 + sin(frameCount*0.1) *  255, 255, 255);
  if (mouseIsPressed) {
    stroke(255);
  }
  else {
    noStroke();
  }
  textSize(40)
  text("TRIFORCE", 400, 470);


    
var c = color('yellow');
fill(c);
strokeWeight(4);
stroke(255, 255, 255);
if (mouseIsPressed)
triangle(10, 60, 30, 40, 50, 60);

else
triangle(100, 600, 300, 400, 500, 600);

triangle(500, 600, 700, 400, 900, 600);
triangle(300, 400,  500, 200, 700, 400);

 
var c = color('Green');
fill(c);
textSize(50)    
text("Mark G", 450, 700);
    

}

