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
  fill(55, 190, 10 + sin(frameCount*0.1) *  200, 255); 
  if (mouseIsPressed) {
    stroke(255);
  }
  else {
    noStroke();
  }
  textSize(40)
  text("TRIFORCE", 400, 470);

var sevhun = 700;
var top = 600;
var fihun = 500;
var bottom= 400;   
var thrhun = 300; 
    
triangle(100, top, thrhun, bottom, fihun, top);

triangle(fihun, top, sevhun, bottom, 900, top);
triangle(thrhun, bottom,  fihun, 200, sevhun, bottom);

 
fill('Green');
textSize(50)    
text("Mark G", 450, sevhun);
    

}

