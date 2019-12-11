var Spaceship = function(x, y) {
  this.pos = createVector(100, 100);
  this.size = 75;

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

    //     Check if spaceship is touching oxygen
    if (this.pos.x <= oxygen.pos.x + 22.5 && this.pos.x >= oxygen.pos.x - 22.5 && this.pos.y <= oxygen.pos.y + 22.5 && this.pos.y >= oxygen.pos.y - 22.5) {
      fill(255, 255, 255);
      rect(150, 150, 300, 300);
      textSize(18);
      fill(0, 0, 0);
      text(questions[i], 200, 200);
      // text(answers1[i], 200, 300);
      // text(answers2[i], 200, 350);

    }

    //     Check if spaceship is touching water
    if (this.pos.x <= water.pos.x + 15 && this.pos.x >= water.pos.x - 15 && this.pos.y <= water.pos.y + 15 && this.pos.y >= water.pos.y - 15) {
      fill(255, 255, 255);
      rect(150, 150, 300, 300);
      textSize(18);
      fill(0, 0, 0);
      text(questions[i], 200, 200);

    }

  }


}
