var Spaceship = function(x, y) {

  this.pos = createVector(x, y);
  this.size = 75;
  this.score = 0;

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

  this.lose = function() {
    //     Display if hit by asteroid
    background(0, 0, 0);
    fill(255, 255, 255);
    textSize(30);
    text("Level Failed!", 200, 200);
    this.score = 0;
//     Reset variables
    O = 0;
    o = 0;
    W = 0;
    w = 0;
    w3 = 0;
    o3 = 0;

//     Display message
    textSize(20);
    text("Score: 0", 200, 400);
    fill(255, 0, 0);
    rect(200, 450, 85, 60);
    fill(0, 0, 0);
    text("Home", 215, 485);
    fill(255, 0, 0);
    rect(315, 450, 85, 60);
    fill(0, 0, 0);
    text("Retry", 330, 475);
    text("Level", 330, 495);

  }

  this.win = function() {
    //     Display if you win the level
    background(0, 0, 0);
    fill(255, 255, 255);
    textSize(30);
    text("Level Complete!", 200, 200);
    this.score += 50;
//     Reset all variables to 0
    O = 0;
    W = 0;
    I = 0;
    o = 0;
    w = 0;
    i = 0;
    o3 = 0;
    w3 = 0;
    i3 = 0;

    if (sceneNum === 7) {
      textSize(20);
      text("Score: " + Level2Scores[I], 200, 400);
      Level2Scores.push(this.score);
    } else if (sceneNum === 10) {
      textSize(20);
      text("Score: " + level1scores[i], 200, 400);
      level1scores.push(this.score);
    } else if (sceneNum === 13) {
      textSize(20);
      text("Score: " + Level3Scores[i3], 200, 400);
      Level3Scores.push(this.score);
    }
    
//     Display message
    textSize(20);
    fill(255, 0, 0);
    rect(200, 450, 85, 60);
    fill(0, 0, 0);
    text("Home", 215, 485);
    fill(255, 0, 0);
    rect(315, 450, 85, 60);
    fill(0, 0, 0);
    text("Next", 330, 475);
    text("Level", 330, 495);
    this.pos = createVector(100, 100);

  }
  
  this.complete = function() {
//     Display if game is completed (whole game finished)
    background(0, 0, 0);
    textSize(30);
    fill(255, 255, 255);
    text("Congratulations!!", 200, 200);
    textSize(20);
    text("Thanks to you, the Earth has now been saved!", 150, 300);
    fill(255, 0, 0);
    rect(257.5, 450, 85, 60);
    fill(0, 0, 0);
    text("Home", 272.5, 485);
    
  }


}
