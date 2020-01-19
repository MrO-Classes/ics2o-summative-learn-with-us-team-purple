var Instructions = function() {
  textSize(50);
  background(0, 0, 0);
  image(img1, 100, 100, 40, 40);
  image(img1, 25, 300, 40, 40);
  image(img1, 200, 500, 40, 40);
  image(img1, 450, 220, 40, 40);
  image(img1, 525, 400, 40, 40);
  image(img1, 550, 50, 40, 40);

  fill(255, 255, 255);
  text("Instructions", 175, 100);
  
  textSize(20);
  text("The Earth is losing all of its life! You have been chosen ", 50, 190);
  text("to complete a dangerous mission to save the planet!", 50, 220);
  
  text("- use the arrow keys to control the spaceship", 50, 260);
  text("- land on oxygen and water elements and ", 50, 290);
  text("complete the questions to survive", 60, 320);
  text("- don't get hit by the asteroids (or you restart the level)", 50, 350);
  text("- to complete the level, land on the green square", 50, 380);
  text("- work your way towards collecting the ring (last level)", 50, 410);
  text("and bring it back home to save the planet", 60, 440);

}
