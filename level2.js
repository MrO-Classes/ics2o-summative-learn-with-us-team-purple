var Level2 = function() {
  ASTEROID.display();
  
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

  fill(0, 255, 0);
  // rect(500, 500, 100, 100);
  fill(255, 255, 255);
  textSize(20);
  text("Level 2", 10, 525);
  text("Score: " + SPACESHIP.score, 10, 550);

  BackButton();
  OXYGEN.display();
  WATER.display();
  SPACESHIP.display();

  if (SPACESHIP.pos.x <= 600 && SPACESHIP.pos.x >= 500 && SPACESHIP.pos.y <= 600 && SPACESHIP.pos.y >= 500) {
    sceneNum = 7;
  }


}

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
