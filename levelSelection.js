var LevelSelection = function() {
  BackButton();
  image(img1, 100, 100, 40, 40);
  image(img1, 75, 300, 40, 40);
  image(img1, 200, 500, 40, 40);
  image(img1, 400, 250, 40, 40);
  image(img1, 500, 400, 40, 40);
  image(img1, 550, 50, 40, 40);

  fill(255, 255, 255);
  textSize(20);
//   Level 1
  rect(60, 200, 120, 120);
  fill(0, 0, 0);
  text("Level 1", 85, 250);
//   Level 2
  fill(255, 255,255);
  rect(240, 200, 120, 120);
  fill(0, 0, 0);
  text("Level 2", 265, 250);
//   Level 3
  fill(255, 255, 255);
  rect(420, 200, 120, 120);
  fill(0, 0, 0);
  text("Level 3", 445, 250);

}
