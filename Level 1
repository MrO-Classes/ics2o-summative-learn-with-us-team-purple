var Level1 = function() {
  //   Check if asteroids are touching spaceship, and fail level if they are, but if spacehsip is touching oxygen or water, then don't fail level
  if (!(spaceship.pos.x <= oxygen.pos.x + 22.5 && spaceship.pos.x >= spaceship.pos.x - 22.5 && spaceship.pos.y <= spaceship.pos.y + 22.5 & spaceship.pos.y >= spaceship.pos.y - 22.5) && !(spaceship.pos.x <= water.pos.x + 15 && water.pos.x >= water.pos.x - 15 && water.pos.y <= water.pos.y + 15 && spaceship.pos.y >= water.pos.y - 15) && Asteroid1.pos.x <= spaceship.pos.x + 20 && Asteroid1.pos.x >= spaceship.pos.x - 20 && Asteroid1.pos.y <= spaceship.pos.y + 20 && Asteroid1.pos.y >= spaceship.pos.y - 20) {
    sceneNum = 8;
  } else if (!(spaceship.pos.x <= oxygen.pos.x + 22.5 && spaceship.pos.x >= oxygen.pos.x - 22.5 && spaceship.pos.y <= oxygen.pos.y + 22.5 && spaceship.pos.y >= oxygen.pos.y - 22.5) && !(spaceship.pos.x <= water.pos.x + 15 && spaceship.pos.x >= water.pos.x - 15 && spaceship.pos.y <= water.pos.y + 15 && spaceship.pos.y >= water.pos.y - 15) && A2.pos.x <= spaceship.pos.x + 20 && Asteriod2.pos.x >= spaceship.pos.x - 20 && Asteroid2.pos.y <= spaceship.pos.y + 20 && Asteriod2.pos.y >= spaceship.pos.y - 20) {
    sceneNum = 8;
  } else if (!(spaceship.pos.x <= oxygen.pos.x + 22.5 && spaceship.pos.x >= oxygen.pos.x - 22.5 && spaceship.pos.y <= oxygen.pos.y + 22.5 && spaceship.pos.y >= oxygen.pos.y - 22.5) && !(spaceship.pos.x <= water.pos.x + 15 && spaceship.pos.x >= water.pos.x - 15 && spaceship.pos.y <= water.pos.y + 15 && spaceship.pos.y >= water.pos.y - 15) && Asteroid3.pos.x <= spaceship.pos.x + 20 && Asteroid3.pos.x >= spaceship.pos.x - 20 && Asteroid3.pos.y <= spaceship.pos.y + 20 && Asteroid3.pos.y >= spaceship.pos.y - 20) {
   
  if (shooter.pos.x <= Asteroid1.pos.x + 20 && shooter.pos.x >= Asteroid1.pos.x - 20 && shooter.pos.y <= Asteroid1.pos.y + 20 && shooter.pos.x >= Asteroid1.pos.y - 20) {
    rect(10, 10, 10, 10);
  }



  //   Display in bottom, left corner of game
  fill(0, 255, 0);
  rect(500, 500, 100, 100);
  fill(255, 255, 255);
  textSize(20);
  text("Level 2", 10, 525);
  text("Score: " + SPACESHIP.score, 10, 550);

  //   Display Objects
  Asteroid1.display();
  Asteroid2.display();
  Asteroid3.display();
  backButton();
  oxygen.display();
  water.display();
  spaceship.display();
  shooter.display();


  //   Check if SPACESHIP is touching OXYGEN
  if (spaceship.pos.x <= oxygen.pos.x + 22.5 && spaceship.pos.x >= oxygen.pos.x - 22.5 && spaceship.pos.y <= oxygen.pos.y + 22.5 && spaceship.pos.y >= oxygen.pos.y - 22.5) {
    fill(255, 255, 255);
    rect(50, 100, 500, 400);
    textSize(18);
    fill(0, 0, 0);
    text(questionsO1[i], 70, 150);
    text(questionsO2[i], 70, 180);
    text(answersO1[i], 70, 250);
    text(answersO2[i], 70, 300);
    text(answersO3[i], 70, 350);
    text(answersO4[i], 70, 400);
    fill(0, 255, 0);
    // rect(365, 390, 75, 50);
    // fill(0, 0, 0);
    // text("Check", 375, 420);

  }

  //     Check if SPACESHIP is touching water
  if (spaceship.pos.x <= water.pos.x + 15 && spaceship.pos.x >= water.pos.x - 15 && spaceship.pos.y <= water.pos.y + 15 && spaceship.pos.y >= water.pos.y - 15) {
    fill(255, 255, 255);
    rect(50, 100, 500, 400);
    textSize(18);
    fill(0, 0, 0);
    text(questionsW1[w], 70, 150);
    text(questionsW2[w], 70, 180);
    text(answersW1[w], 70, 250);
    text(answersW2[w], 70, 300);
    text(answersW3[w], 70, 350);
    text(answersW4[w], 70, 400);
    fill(0, 255, 0);
    // rect(365, 390, 75, 50);
    // fill(0, 0, 0);
    // text("Check", 375, 420);

  }


  //   Check if SPACESHIP is on rectangle (win the level)
  if (spaceship.pos.x <= 600 && spaceship.pos.x >= 500 && spaceship.pos.y <= 600 && spaceship.pos.y >= 500) {
    sceneNum = 7;
  }


}


// Display if Level Completed
var WinState = function() {
  background(0, 0, 0);
  fill(255, 255, 255);
  textSize(30);
  text("Level Complete!", 200, 200);
  spaceship.score += 50;
  i = 0;
  Level2Scores.push(spaceship.score);
  textSize(20);
  text("Score: " + Level2Scores[i], 200, 400);
  fill(255, 0, 0);
  rect(200, 450, 85, 60);
  fill(0, 0, 0);
  text("Home", 215, 485);
  fill(255, 0, 0);
  rect(315, 450, 85, 60);
  fill(0, 0, 0);
  text("Next", 330, 475);
  text("Level", 330, 495);
  spaceship.pos = createVector(100, 100);

}

// Display if Level Lost (Hit by Asteroid)
var LoseState = function() {
  background(0, 0, 0);
  fill(255, 255, 255);
  textSize(30);
  text("Level Failed!", 200, 200);
  spacship.score = 0;
  i = 0;
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

// Correct Oxygen question answer
var CorrectAnswerOxygen = function() {
  spaceship.score += 10;
  i = 5;

}

// Wrong Oxygen question answer
var WrongAnswerOxygen = function() {
  i++;

  if (i === 5) {
    i = 0;
  }
}

// Correct Water question answer
var CorrectAnswerWater = function() {
  spaceship.score += 10;
  w = 4;
}

// Wrong Water question answer
var WrongAnswerWater = function() {
  w++;

  if (w === 4) {
    w = 0;
  }
}

}
