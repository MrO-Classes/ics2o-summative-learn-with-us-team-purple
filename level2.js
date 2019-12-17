var Level2 = function() {

  fill(0, 255, 0);
  rect(500, 500, 100, 100);

  BackButton();
  OXYGEN.display();
  WATER.display();
  SPACESHIP.display();

  if (SPACESHIP.pos.x <= 600 && SPACESHIP.pos.x >= 500 && SPACESHIP.pos.y <= 600 && SPACESHIP.pos.y >= 500) {
    SPACESHIP.score += 50;
    WinState();
    i = 0;
    Level2Scores.push(SPACESHIP.score);
    text(Level2Scores[i], 100, 100);

  }



}

var WinState = function() {
  background(0, 0, 0);
  text("Level Complete!", 200, 200);
}
