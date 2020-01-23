var Oxygen = function(x, y) {
  this.pos = createVector(x, y);
  this.size = 45;
  this.img = loadImage('Oxygen_V2.png');

  this.display = function() {
    fill(255, 255, 255);
    image(this.img, this.pos.x, this.pos.y, this.size, this.size);

  }
  
  this.CorrectAnswer = function() {
//     Display if oxygen question is answerd correctly
    if (sceneNum === 5) {
      spaceship.score +=10;
      o = 4;
    } else if (sceneNum === 6) {
      SPACESHIP.score +=10;
      O = 5;
    } else if (sceneNum === 9) {
      spaceship3.score +=10;
      o3 = 6;
    }
  }
  
  this.WrongAnswer = function() {
//     Display if oxygen question is answered incorrectly
    O ++;
    o ++;
    o3++;
    
    if (o === 4) {
      o = 0;
    } else if (O === 5) {
      O = 0;
    } else if (o3 === 6) {
      o3 = 0;
    }
  }
}


