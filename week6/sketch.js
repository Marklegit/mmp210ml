var r = 0;
var t = 1;
var b = 2;

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
fill('Green');
textSize(50)    
text("Mark G", 420, 700);
    

var top = 600;
var bottom= 400;   
    
    translate (0,0);
    
rotate(r);
triangle(100, 600, 300, bottom, 500, top);

rotate(t)
triangle(500, top, 700, bottom, 900, top);
    
rotate(r)
triangle(300, bottom,  500, 200, 700, bottom);

 
r += 0.01;
t += 0.01;
b += 0.01;    
}

