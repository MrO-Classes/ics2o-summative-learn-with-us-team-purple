var Water = function(x, y) {
  this.pos = createVector(x, y);
  this.size = 35;
  this.img = loadImage('Water_Droplet_V2.png');

  this.display = function() {
    fill(45, 137, 207);
    image(this.img, this.pos.x, this.pos.y, this.size, this.size);
    
  }
  
  this.CorrectAnswer = function() {
//     Display if water question is answered correctly
    if (sceneNum === 5) {
      spaceship.score +=10;
      w = 4;
    } else if (sceneNum === 6) {
      SPACESHIP.score +=10;
      W = 4;
    } else if (sceneNum === 9) {
      spaceship3.score +=10;
      w3 = 6;
    }
    
    
  }
  
  this.WrongAnswer = function() {
//     Display if water question is answered incorrectly
    
    if (sceneNum === 5) {
      w ++;
    } else if (sceneNum === 6) {
      W ++;
    } else if (sceneNum === 9) {
      w3 ++;
    }
    
    if (w === 4) {
      w = 0;
    } else if (W === 4) {
      W = 0;
    } else if (w3 === 6) {
      w3 = 0;
    }
  }

}
