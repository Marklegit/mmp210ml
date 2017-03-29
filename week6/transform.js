var r = 0;
function setup() {
  createCanvas(640, 480);
    
    noStroke();
}

function draw() { 
  background(0);
    fill("green")
    ellipse(0,0, 100);
    
    translate(width/2, height/2);
    
    /*push();
    for (var i= 0; i < 16; i++) {
        ellipse(100, 0 50);
        rotate(PI/8)
    }
    pop();
    */
    
    
    push();
    rotate(r);
    rectMode(CENTER);
    rect(-25, -25, 50 ,50);
    pop();
    
    push();
    rotate(-r); 
    fill("blue");
    rect(100, 100, 50, 50);
    
    pop();
    
    r += 0.01;
}



 