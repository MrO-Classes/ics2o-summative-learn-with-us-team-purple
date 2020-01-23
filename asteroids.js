var Asteroid = function(x, y) {
  var X = 2;
  var Y = 2;
  
  this.pos = createVector(x, y);
  this.size = 50;

  this.display = function() {
    fill(120, 120, 120);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);

    this.pos.y = this.pos.y + Y;
    this.pos.x = this.pos.x + X;


    if (this.pos.y > 600) {
      Y =- 2;
    } else if (this.pos.y < 0) {
      Y = 2;
    } else if (this.pos.x > 600) {
      X =- 2;
    } else if (this.pos.x < 0) {
      X = 2;
    }


  }
}


