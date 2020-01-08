var MainMenu = function() {
  background(0, 0, 0);
  fill(255, 255, 255);
  text("Main Menu", 100, 100);
  
  textSize(20);
  fill(255, 0, 0);
  text("Level 1", 100, 150);
  fill(255, 255, 255);
  text("Score:" + spaceship.score, 100, 200);
  fill(255, 0, 0);
  text("Level 2", 100, 250);
  fill(255, 255, 255);
  text("Score: " + SPACESHIP.score, 100, 300);
  text("Total Score: ", 100, 400);
}
