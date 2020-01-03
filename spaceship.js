var Spaceship = function(x, y) {
  var speed = 2;
  var z = 0;
  
  this.pos = createVector(100, 100);
  this.size = 75;
  this.score = 0;

  this.display = function() {
    fill(223, 224, 182);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);

    z = z + speed;

    //     Move spaceship
    if (keyIsPressed && keyCode === 38) {
      this.pos.y -= 2;
    } else if (keyIsPressed && keyCode === 40) {
      this.pos.y += 2;
    } else if (keyIsPressed && keyCode === 39) {
      this.pos.x += 2;
    } else if (keyIsPressed && keyCode === 37) {
      this.pos.x -= 2;
    }
    
    if (keyIsPressed && keyCode === 32) {
    ellipse(z, this.pos.y, 10, 10);
    }


    //     Constrain spaceship inside the canvas
    if (this.pos.y < 0) {
      this.pos = createVector(this.pos.x, 0);
    } else if (this.pos.y > 600) {
      this.pos = createVector(this.pos.x, 600);
    } else if (this.pos.x < 0) {
      this.pos = createVector(0, this.pos.y)
    } else if (this.pos.x > 600) {
      this.pos = createVector(600, this.pos.y);
    }

  }


}
