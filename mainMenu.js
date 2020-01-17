var MainMenu = function() {
  background(0, 0, 0);
  image(img1, 100, 100, 40, 40);
  image(img1, 75, 300, 40, 40);
  image(img1, 200, 500, 40, 40);
  image(img1, 400, 250, 40, 40);
  image(img1, 500, 400, 40, 40);
  image(img1, 550, 50, 40, 40);

  fill(255, 255, 255);
  textSize(50);
  text("Main Menu", 175, 100);
  
  textSize(20);
  fill(255, 0, 0);
  text("Level 1", 100, 150);
  fill(255, 255, 255);
  text("Score: " + spaceship.score, 100, 200);
  fill(255, 0, 0);
  text("Level 2", 100, 250);
  fill(255, 255, 255);
  text("Score: " + SPACESHIP.score, 100, 300);
  fill(255, 0, 0);
  text("Level 3", 100, 350);
  fill(255, 255, 255);
  text("Score: " + spaceship3.score, 100, 400);
  text("Total Score: ", 100, 450);
}
