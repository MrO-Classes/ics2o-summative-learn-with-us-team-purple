var Water = function(x, y) {
  this.pos = createVector(x, y);
  this.size = 35;

  this.display = function() {
    fill(45, 137, 207);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
  
  this.CorrectAnswer = function() {
    if (sceneNum === 5) {
      spaceship.score +=10;
      w = 4;
    } else if (sceneNum === 6) {
      SPACESHIP.score +=10;
      W = 4;
    }
    
    
  }
  
  this.WrongAnswer = function() {
    w ++;
    W ++;
    
    if (w === 4) {
      w = 0;
    } else if (W === 4) {
      W = 0;
    }
  }

}
