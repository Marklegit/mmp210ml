
var bird;
var pipes = [];
var song;

    

function setup() {
  createCanvas(800, 300);
  bird = new Bird();
  pipes.push(new Pipe());
   

}


function draw() {
  background('#04caf7');
 fill('green');
 stroke('yellow');
 text(frameCount, 400, 40);  
    

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      
    }


    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }


  }

  bird.update();
  bird.show();

    
    
  if (frameCount % 10 == 0) {
    pipes.push(new Pipe());
  
      
  }
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
}

