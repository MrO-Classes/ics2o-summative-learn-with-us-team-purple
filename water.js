var Water = function (x, y) {
this.pos = createVector (400, 200);
  this.size = 35;
  
  this.display = function() {
    fill(45, 137, 207);
  ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
  
}
