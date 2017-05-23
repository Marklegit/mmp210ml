function Bird() {
  this.y = height/3;
  this.x = 64;
  
  this.gravity = 0.6;
  this.lift = -15;
  this.velocity = 0;

  this.show = function() {
      fill('red');
      ellipse(this.x+20, this.y +3, 30, 30, 20);
        fill('yellow');
      ellipse(this.x+20, this.y +3, 24, 24, 20);
      fill('lightblue');
    rect(this.x, this.y, 40, 10, 20);
    fill('black');
    rect(this.x+10, this.y+2, 5, 5, 20);
    rect(this.x+20, this.y+2, 5, 5, 20);
      rect(this.x+30, this.y+2, 5, 5, 20);
      
}

  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.remove();
    }

    if (this.y < 0) {
      this.remove ();
      this.velocity = 0;
    } 
    if (this.remove =  true ){
   fill('red');
   stroke('black');
   textSize(22);    
    line(120, 20, 40, 20);    
   
    
        
   } 

  }

}