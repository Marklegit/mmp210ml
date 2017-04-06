function setup() {
  // Create the canvas
  createCanvas(1000, 1000);
  background(100);

  // Set colors
    var nhun = 900;
    var shun = 600;
    var tthun = 320;
  var top = 300;
    var fihun = 500;
  var bottom = 400;
    var tohun = 200;
    var ohun = 100;
    var eifive = 85; 
    var stwo = 72;
    var twen = 20;
    
  fill('lightblue')
  triangle(shun, ohun, bottom, ohun, 550, 250);
  fill('pink')
  triangle(300, tohun, bottom, ohun, shun,top);
  fill ('black')
  rect(top, nhun, bottom, 40);
  fill('lightblue');
  triangle(top, fihun, shun, top, top, 60);
  fill('lightblue')
  triangle(top, 60, fihun, top, tohun, top)
  
  fill('purple')
  ellipse(tthun, 544, stwo, stwo)
  fill('lightyellow')
  ellipse(tthun, 644, stwo, stwo)
  fill('yellow')
  ellipse(tthun, 744, stwo, stwo)
  fill('green')
  ellipse(tthun, 844, stwo, stwo)
  
line(nhun,twen, eifive, twen);
line(nhun, nhun, nhun, twen);
stroke(255)
line(90, nhun, eifive, twen)
}
