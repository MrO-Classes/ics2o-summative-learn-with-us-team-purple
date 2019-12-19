var Asteroid = function(x, y) {
  var X1 = -2;
  var Y1 = 2;
  
  this.pos = createVector(500, 300);
  this.size = 50;

  this.display = function() {
    fill(120, 120, 120);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);

    this.pos.y = this.pos.y + Y1;
    this.pos.x = this.pos.x + X1;


    if (this.pos.y > 600) {
      Y1 -= 2;
    } else if (this.pos.y < 0) {
      Y1 += 2;
    } else if (this.pos.x > 600) {
      X1 -= 2;
    } else if (this.pos.x < 0) {
      X1 += 2;
    }


  }
}

var Asteroid2 = function(x, y) {
  var X2 = 3;
  var Y2 = -3;
  
  this.pos = createVector(400, 400);
  this.size = 50;
  
  this.display = function() {
    fill(120, 120, 120);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
    
    this.pos.y = this.pos.y + Y2;
    this.pos.x = this.pos.x + X2;
    
    if (this.pos.y > 600) {
      Y2 -=3;
    } else if (this.pos.y < 0) {
      Y2 +=3;
    } else if (this.pos.x > 600) {
      X2 -=3;
    } else if (this.pos.x < 0) {
      X2 +=3;
    }
  }
}

var Asteroid3 = function(x, y) {
  var X3 = 3;
  var Y3 = -3;
  
  this.pos = createVector(300, 250);
  this.size = 50;
  
  this.display = function() {
    fill(120, 120, 120);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
    
    this.pos.y = this.pos.y + Y3;
    this.pos.x = this.pos.x + X3;
    
    if (this.pos.y > 600) {
      Y3 -=3;
    } else if (this.pos.y < 0) {
      Y3 +=3;
    } else if (this.pos.x > 600) {
      X3 -=3;
    } else if (this.pos.x < 0) {
      X3 +=3;
    }
  }
}
