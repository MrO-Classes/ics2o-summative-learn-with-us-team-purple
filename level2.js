var Level2 = function() {

  
//   Check if asteroids are touching spaceship, and fail level if they are, but if spacehsip is touching oxygen or water, then don't fail level
  if (!(SPACESHIP.pos.x <= OXYGEN.pos.x + 22.5 && SPACESHIP.pos.x >= OXYGEN.pos.x - 22.5 && SPACESHIP.pos.y <= OXYGEN.pos.y + 22.5 && SPACESHIP.pos.y >= OXYGEN.pos.y - 22.5) && ! (SPACESHIP.pos.x <= WATER.pos.x + 15 && SPACESHIP.pos.x >= WATER.pos.x - 15 && SPACESHIP.pos.y <= WATER.pos.y + 15 && SPACESHIP.pos.y >= WATER.pos.y - 15) && ASTEROID1.pos.x <= SPACESHIP.pos.x + 20 && ASTEROID1.pos.x >= SPACESHIP.pos.x - 20 && ASTEROID1.pos.y <= SPACESHIP.pos.y + 20 && ASTEROID1.pos.y >= SPACESHIP.pos.y - 20) {
  sceneNum = 8;
} else if (!(SPACESHIP.pos.x <= OXYGEN.pos.x + 22.5 && SPACESHIP.pos.x >= OXYGEN.pos.x - 22.5 && SPACESHIP.pos.y <= OXYGEN.pos.y + 22.5 && SPACESHIP.pos.y >= OXYGEN.pos.y - 22.5) && !(SPACESHIP.pos.x <= WATER.pos.x + 15 && SPACESHIP.pos.x >= WATER.pos.x - 15 && SPACESHIP.pos.y <= WATER.pos.y + 15 && SPACESHIP.pos.y >= WATER.pos.y - 15) && ASTEROID2.pos.x <= SPACESHIP.pos.x + 20 && ASTEROID2.pos.x >= SPACESHIP.pos.x - 20 && ASTEROID2.pos.y <= SPACESHIP.pos.y + 20 && ASTEROID2.pos.y >= SPACESHIP.pos.y - 20) {
  sceneNum = 8;
} else if (!(SPACESHIP.pos.x <= OXYGEN.pos.x + 22.5 && SPACESHIP.pos.x >= OXYGEN.pos.x - 22.5 && SPACESHIP.pos.y <= OXYGEN.pos.y + 22.5 && SPACESHIP.pos.y >= OXYGEN.pos.y - 22.5) && !(SPACESHIP.pos.x <= WATER.pos.x + 15 && SPACESHIP.pos.x >= WATER.pos.x - 15 && SPACESHIP.pos.y <= WATER.pos.y + 15 && SPACESHIP.pos.y >= WATER.pos.y - 15) &&  ASTEROID3.pos.x <= SPACESHIP.pos.x + 20 && ASTEROID3.pos.x >= SPACESHIP.pos.x - 20 && ASTEROID3.pos.y <= SPACESHIP.pos.y + 20 && ASTEROID3.pos.y >= SPACESHIP.pos.y - 20) {
  sceneNum = 11;
} else if (!(SPACESHIP.pos.x <= OXYGEN.pos.x + 22.5 && SPACESHIP.pos.x >= OXYGEN.pos.x - 22.5 && SPACESHIP.pos.y <= OXYGEN.pos.y + 22.5 && SPACESHIP.pos.y >= OXYGEN.pos.y - 22.5) && !(SPACESHIP.pos.x <= WATER.pos.x + 15 && SPACESHIP.pos.x >= WATER.pos.x - 15 && SPACESHIP.pos.y <= WATER.pos.y + 15 && SPACESHIP.pos.y >= WATER.pos.y - 15) &&  ASTEROID4.pos.x <= SPACESHIP.pos.x + 20 && ASTEROID4.pos.x >= SPACESHIP.pos.x - 20 && ASTEROID4.pos.y <= SPACESHIP.pos.y + 20 && ASTEROID4.pos.y >= SPACESHIP.pos.y - 20) {
  sceneNum = 11;
} else if (!(SPACESHIP.pos.x <= OXYGEN.pos.x + 22.5 && SPACESHIP.pos.x >= OXYGEN.pos.x - 22.5 && SPACESHIP.pos.y <= OXYGEN.pos.y + 22.5 && SPACESHIP.pos.y >= OXYGEN.pos.y - 22.5) && !(SPACESHIP.pos.x <= WATER.pos.x + 15 && SPACESHIP.pos.x >= WATER.pos.x - 15 && SPACESHIP.pos.y <= WATER.pos.y + 15 && SPACESHIP.pos.y >= WATER.pos.y - 15) &&  ASTEROID5.pos.x <= SPACESHIP.pos.x + 20 && ASTEROID5.pos.x >= SPACESHIP.pos.x - 20 && ASTEROID5.pos.y <= SPACESHIP.pos.y + 20 && ASTEROID5.pos.y >= SPACESHIP.pos.y - 20) {
  sceneNum = 11;
}
  
  
 

//   Display in bottom, left corner of game
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
    rect(50, 100, 500, 400);
    textSize(18);
    fill(0, 0, 0);
    text(QUESTIONSO1[O], 70, 150);
    text(QUESTIONSO2[O], 70, 180); 
    text(ANSWERSO1[O], 70, 250);
    text(ANSWERSO2[O], 70, 300);
    text(ANSWERSO3[O], 70, 350);
    text(ANSWERSO4[O], 70, 400);
    fill(0, 255, 0);
  }
  
      //     Check if SPACESHIP is touching water
    if (SPACESHIP.pos.x <= WATER.pos.x + 15 && SPACESHIP.pos.x >= WATER.pos.x - 15 && SPACESHIP.pos.y <= WATER.pos.y + 15 && SPACESHIP.pos.y >= WATER.pos.y - 15) {
      fill(255, 255, 255);
      rect(50, 100, 500, 400);
      textSize(18);
      fill(0, 0, 0);
      text(QUESTIONSW1[W], 70, 150);
      text(QUESTIONSW2[W], 70, 180);
      text(ANSWERSW1[W], 70, 250);
      text(ANSWERSW2[W], 70, 300);
      text(ANSWERSW3[W], 70, 350);
      text(ANSWERSW4[W], 70, 400);
      fill(0, 255, 0);

    }


  //   Check if SPACESHIP is on rectangle (win the level)
  if (SPACESHIP.pos.x <= 600 && SPACESHIP.pos.x >= 500 && SPACESHIP.pos.y <= 600 && SPACESHIP.pos.y >= 500) {
    sceneNum = 7;
  }


}
