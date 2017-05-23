function Pipe() {
  //this.top = random(height/2);
  this.bottom = random(height/1.4);
  this.x = width;
  this.w = 10;
  this.speed = 3;



  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.remove ()= true;
        return true;
      }
    }
    this.remove = false;
    return false;
  }

  this.show = function() {
    fill('#f4ad66');
      stroke('black');
    if (this.remove) {
      fill(255, 0, 0);
    }
    //rect(this.x, 0, this.w, this.top);
    rect(this.x,  height-this.bottom, this.w, this.bottom, 3);
      fill('white');
       noStroke();
    arc(this.x, 0, this.bottom, 50, 50, 50);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } 
  }

  
    
}