var Level2 = function() {

//   Check if asteroids are touching spaceship, and fail level if they are, but if spacehsip is touching oxygen or water, then don't fail level
  if (!(SPACESHIP.pos.x <= OXYGEN.pos.x + 22.5 && SPACESHIP.pos.x >= OXYGEN.pos.x - 22.5 && SPACESHIP.pos.y <= OXYGEN.pos.y + 22.5 && SPACESHIP.pos.y >= OXYGEN.pos.y - 22.5) && ! (SPACESHIP.pos.x <= WATER.pos.x + 15 && SPACESHIP.pos.x >= WATER.pos.x - 15 && SPACESHIP.pos.y <= WATER.pos.y + 15 && SPACESHIP.pos.y >= WATER.pos.y - 15) && ASTEROID1.pos.x <= SPACESHIP.pos.x + 20 && ASTEROID1.pos.x >= SPACESHIP.pos.x - 20 && ASTEROID1.pos.y <= SPACESHIP.pos.y + 20 && ASTEROID1.pos.y >= SPACESHIP.pos.y - 20) {
  sceneNum = 8;
} else if (!(SPACESHIP.pos.x <= OXYGEN.pos.x + 22.5 && SPACESHIP.pos.x >= OXYGEN.pos.x - 22.5 && SPACESHIP.pos.y <= OXYGEN.pos.y + 22.5 && SPACESHIP.pos.y >= OXYGEN.pos.y - 22.5) && !(SPACESHIP.pos.x <= WATER.pos.x + 15 && SPACESHIP.pos.x >= WATER.pos.x - 15 && SPACESHIP.pos.y <= WATER.pos.y + 15 && SPACESHIP.pos.y >= WATER.pos.y - 15) && ASTEROID2.pos.x <= SPACESHIP.pos.x + 20 && ASTEROID2.pos.x >= SPACESHIP.pos.x - 20 && ASTEROID2.pos.y <= SPACESHIP.pos.y + 20 && ASTEROID2.pos.y >= SPACESHIP.pos.y - 20) {
  sceneNum = 8;
} else if (!(SPACESHIP.pos.x <= OXYGEN.pos.x + 22.5 && SPACESHIP.pos.x >= OXYGEN.pos.x - 22.5 && SPACESHIP.pos.y <= OXYGEN.pos.y + 22.5 && SPACESHIP.pos.y >= OXYGEN.pos.y - 22.5) && !(SPACESHIP.pos.x <= WATER.pos.x + 15 && SPACESHIP.pos.x >= WATER.pos.x - 15 && SPACESHIP.pos.y <= WATER.pos.y + 15 && SPACESHIP.pos.y >= WATER.pos.y - 15) &&  ASTEROID3.pos.x <= SPACESHIP.pos.x + 20 && ASTEROID3.pos.x >= SPACESHIP.pos.x - 20 && ASTEROID3.pos.y <= SPACESHIP.pos.y + 20 && ASTEROID3.pos.y >= SPACESHIP.pos.y - 20) {
  sceneNum = 8;
} else if (!(SPACESHIP.pos.x <= OXYGEN.pos.x + 22.5 && SPACESHIP.pos.x >= OXYGEN.pos.x - 22.5 && SPACESHIP.pos.y <= OXYGEN.pos.y + 22.5 && SPACESHIP.pos.y >= OXYGEN.pos.y - 22.5) && !(SPACESHIP.pos.x <= WATER.pos.x + 15 && SPACESHIP.pos.x >= WATER.pos.x - 15 && SPACESHIP.pos.y <= WATER.pos.y + 15 && SPACESHIP.pos.y >= WATER.pos.y - 15) &&  ASTEROID4.pos.x <= SPACESHIP.pos.x + 20 && ASTEROID4.pos.x >= SPACESHIP.pos.x - 20 && ASTEROID4.pos.y <= SPACESHIP.pos.y + 20 && ASTEROID4.pos.y >= SPACESHIP.pos.y - 20) {
  sceneNum = 8;
} else if (!(SPACESHIP.pos.x <= OXYGEN.pos.x + 22.5 && SPACESHIP.pos.x >= OXYGEN.pos.x - 22.5 && SPACESHIP.pos.y <= OXYGEN.pos.y + 22.5 && SPACESHIP.pos.y >= OXYGEN.pos.y - 22.5) && !(SPACESHIP.pos.x <= WATER.pos.x + 15 && SPACESHIP.pos.x >= WATER.pos.x - 15 && SPACESHIP.pos.y <= WATER.pos.y + 15 && SPACESHIP.pos.y >= WATER.pos.y - 15) &&  ASTEROID5.pos.x <= SPACESHIP.pos.x + 20 && ASTEROID5.pos.x >= SPACESHIP.pos.x - 20 && ASTEROID5.pos.y <= SPACESHIP.pos.y + 20 && ASTEROID5.pos.y >= SPACESHIP.pos.y - 20) {
  sceneNum = 8;
}

  fill(0, 255, 0);
  rect(500, 500, 100, 100);
  fill(255, 255, 255);
  textSize(20);
  text("Level 2", 10, 525);
  text("Score: " + SPACESHIP.score, 10, 550);

  //   Display Objects
  ASTEROID1.display();
  ASTEROID2.display();
  ASTEROID3.display();
  ASTEROID4.display();
  ASTEROID5.display();
  BackButton();
  OXYGEN.display();
  WATER.display();
  SPACESHIP.display();
  
  //   Check if SPACESHIP is touching OXYGEN
  if (SPACESHIP.pos.x <= OXYGEN.pos.x + 22.5 && SPACESHIP.pos.x >= OXYGEN.pos.x - 22.5 && SPACESHIP.pos.y <= OXYGEN.pos.y + 22.5 && SPACESHIP.pos.y >= OXYGEN.pos.y - 22.5) {
    fill(255, 255, 255);
    rect(150, 150, 300, 300);
    textSize(18);
    fill(0, 0, 0);
    text(questions1[i], 200, 200);
    text(answers1[i], 200, 250);
    text(answers2[i], 200, 300);
    text(answers3[i], 200, 350);
    text(answers4[i], 200, 400);
    fill(0, 255, 0);
    rect(365, 390, 75, 50);
    fill(0, 0, 0);
    text("Check", 375, 420);

  }
  
      //     Check if SPACESHIP is touching water
    if (SPACESHIP.pos.x <= WATER.pos.x + 15 && SPACESHIP.pos.x >= WATER.pos.x - 15 && SPACESHIP.pos.y <= WATER.pos.y + 15 && SPACESHIP.pos.y >= WATER.pos.y - 15) {
      fill(255, 255, 255);
      rect(150, 150, 300, 300);
      textSize(18);
      fill(0, 0, 0);
      text(questions1[i], 200, 200);
      text(answers1[i], 200, 250);
      text(answers2[i], 200, 300);
      text(answers3[i], 200, 350);
      text(answers4[i], 200, 400);
      fill(0, 255, 0);
      rect(365, 390, 75, 50);
      fill(0, 0, 0);
      text("Check", 375, 420);

    }


  //   Check if SPACESHIP is on rectangle (win the level)
  if (SPACESHIP.pos.x <= 600 && SPACESHIP.pos.x >= 500 && SPACESHIP.pos.y <= 600 && SPACESHIP.pos.y >= 500) {
    sceneNum = 7;
  }


}


// Display if Level Completed
var WinState = function() {
  background(0, 0, 0);
  fill(255, 255, 255);
  textSize(30);
  text("Level Complete!", 200, 200);
  SPACESHIP.score += 50;
  i = 0;
  Level2Scores.push(SPACESHIP.score);
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

}

// Display if Level Lost (Hit by Asteroid)
var LoseState = function() {
  background(0, 0, 0);
  fill(255, 255, 255);
  textSize(30);
  text("Level Failed!", 200, 200);
  SPACESHIP.score = 0;
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
