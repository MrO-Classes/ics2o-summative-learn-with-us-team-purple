var Oxygen = function(x, y) {
  this.pos = createVector(x, y);
  this.size = 45;

  this.display = function() {
    fill(255, 255, 255);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);

  }
}
