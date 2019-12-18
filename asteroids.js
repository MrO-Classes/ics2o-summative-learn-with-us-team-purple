var Asteroid = function (x, y) {
  this.pos = createVector(500, 300);
  this.size = 50;
  
  this.display = function () {
  ellipse(this.pos.x, this.pos.y, this.size, this.size);
    
    this.pos.x -=1;
    this.pos.y ++;

  }
}
