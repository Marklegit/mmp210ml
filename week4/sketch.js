function setup() {
  createCanvas(1000, 1000);
}
function draw() {
 
    
  background('#222222');
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

var top = 600;
var bottom= 400;   

triangle(100, 600, 300, bottom, 500, top);

triangle(500, top, 700, bottom, 900, top);
triangle(300, bottom,  500, 200, 700, bottom);

 
fill('Green');
textSize(50)    
text("Mark G", 450, 700);
    

}

