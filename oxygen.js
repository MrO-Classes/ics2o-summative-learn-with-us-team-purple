var Oxygen = function(x, y) {
  this.pos = createVector(x, y);
  this.size = 45;

  this.display = function() {
    fill(255, 255, 255);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);

  }
  
  this.CorrectAnswer = function() {
    if (sceneNum === 5) {
      spaceship.score +=10;
      o = 4;
    } else if (sceneNum === 6) {
      SPACESHIP.score +=10;
      O = 5;
    }
  }
  
  this.WrongAnswer = function() {
    O ++;
    o ++;
    
    if (o === 4) {
      o = 0;
    } else if (O === 5) {
      O = 0;
    }
  }
}
