var Spaceship = function(x, y) {
  
  this.pos = createVector(x, y);
  this.size = 75;
  this.score = 0;
  
  var X = 4;
  var spaceX;
  
  this.display = function() {
    fill(223, 224, 182);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);

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
    
    spaceX = this.pos.x + X;
    
    X++;
    
    
    spaceX = this.pos.x + X;
    
    X++;
    
    // if (keyIsPressed && keyCode === 32) {
    // ellipse(spaceX, this.pos.y, 10, 10);
    // }


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






