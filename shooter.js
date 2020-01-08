var Shooter = function(x, y) {
  this.pos = createVector(x, y);
  this.size = 10;
  
  this.display = function(x, y) {
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
    
    if (keyCode === 32) {
      this.pos.x +=2;
    }
    
//     if (keyIsPressed && keyCode === 32) {
//     fill(255, 0, 0);
//     ellipse(this.pos.x, this.pos.y, this.size, this.size);
      
//       this.pos.x ++;
      
//     }
  }

} 
