var Level1 = function() {
  //   Check if asteroids are touching spaceship, and fail level if they are, but if spacehsip is touching oxygen or water, then don't fail level
  if (!(spaceship.pos.x <= oxygen.pos.x + 22.5 && spaceship.pos.x >= spaceship.pos.x - 22.5 && spaceship.pos.y <= spaceship.pos.y + 22.5 & spaceship.pos.y >= spaceship.pos.y - 22.5) && !(spaceship.pos.x <= water.pos.x + 15 && water.pos.x >= water.pos.x - 15 && water.pos.y <= water.pos.y + 15 && spaceship.pos.y >= water.pos.y - 15) && asteroid1.pos.x <= spaceship.pos.x + 20 && asteroid1.pos.x >= spaceship.pos.x - 20 && asteroid1.pos.y <= spaceship.pos.y + 20 && asteroid1.pos.y >= spaceship.pos.y - 20) {
    sceneNum = 8;
  } else if (!(spaceship.pos.x <= oxygen.pos.x + 22.5 && spaceship.pos.x >= oxygen.pos.x - 22.5 && spaceship.pos.y <= oxygen.pos.y + 22.5 && spaceship.pos.y >= oxygen.pos.y - 22.5) && !(spaceship.pos.x <= water.pos.x + 15 && spaceship.pos.x >= water.pos.x - 15 && spaceship.pos.y <= water.pos.y + 15 && spaceship.pos.y >= water.pos.y - 15) && asteroid2.pos.x <= spaceship.pos.x + 20 && asteroid2.pos.x >= spaceship.pos.x - 20 && asteroid2.pos.y <= spaceship.pos.y + 20 && asteroid2.pos.y >= spaceship.pos.y - 20) {
    sceneNum = 8;
  } else if (!(spaceship.pos.x <= oxygen.pos.x + 22.5 && spaceship.pos.x >= oxygen.pos.x - 22.5 && spaceship.pos.y <= oxygen.pos.y + 22.5 && spaceship.pos.y >= oxygen.pos.y - 22.5) && !(spaceship.pos.x <= water.pos.x + 15 && spaceship.pos.x >= water.pos.x - 15 && spaceship.pos.y <= water.pos.y + 15 && spaceship.pos.y >= water.pos.y - 15) && asteroid3.pos.x <= spaceship.pos.x + 20 && asteroid3.pos.x >= spaceship.pos.x - 20 && asteroid3.pos.y <= spaceship.pos.y + 20 && asteroid3.pos.y >= spaceship.pos.y - 20) {
  sceneNum = 8;
  }

  //   Display in bottom, left corner of game
  fill(0, 255, 0);
  rect(500, 500, 100, 100);
  fill(255, 255, 255);
  textSize(20);
  text("Level 1", 10, 525);
  text("Score: " + spaceship.score, 10, 550);

  //   Display Objects
  asteroid1.display();
  asteroid2.display();
  asteroid3.display();
  BackButton();
  oxygen.display();
  water.display();
  spaceship.display();


  //   Check if spaceship is touching oxygen
  if (spaceship.pos.x <= oxygen.pos.x + 22.5 && spaceship.pos.x >= oxygen.pos.x - 22.5 && spaceship.pos.y <= oxygen.pos.y + 22.5 && spaceship.pos.y >= oxygen.pos.y - 22.5) {
    fill(255, 255, 255);
    rect(50, 100, 500, 400);
    textSize(18);
    fill(0, 0, 0);
    text(questionsO1[o], 70, 150);
    text(questionsO2[o], 70, 180);
    text(answersO1[o], 70, 250);
    text(answersO2[o], 70, 300);
    text(answersO3[o], 70, 350);
    text(answersO4[o], 70, 400);
    fill(0, 255, 0);

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

  }


  //   Check if SPACESHIP is on rectangle (win the level)
  if (spaceship.pos.x <= 600 && spaceship.pos.x >= 500 && spaceship.pos.y <= 600 && spaceship.pos.y >= 500) {
    sceneNum = 10;
  }


}

