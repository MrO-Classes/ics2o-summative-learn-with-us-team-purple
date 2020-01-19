var Level3 = function() {
  
//   Check if spaceship3 is touching oxygen3 or water3
  if (!(spaceship3.pos.x <= oxygen3.pos.x + 30 && spaceship3.pos.x >= oxygen3.pos.x - 30 && spaceship3.pos.y <= oxygen3.pos.y + 30 && spaceship3.pos.y >= oxygen3.pos.y - 30) && ! (spaceship3.pos.x <= water3.pos.x + 20 && spaceship3.pos.x >= water3.pos.x - 20 && spaceship3.pos.y <= water3.pos.y + 20 && spaceship3.pos.y >= water3.pos.y - 20) && Asteroid1.pos.x <= spaceship3.pos.x + 90 && Asteroid1.pos.x >= spaceship3.pos.x && 
Asteroid1.pos.y <= spaceship3.pos.y + 75 && Asteroid1.pos.y >= spaceship3.pos.y) {
  sceneNum = 12;
} else if (!(spaceship3.pos.x <= oxygen3.pos.x + 30 && spaceship3.pos.x >= oxygen3.pos.x - 30 && spaceship3.pos.y <= oxygen3.pos.y + 30 && spaceship3.pos.y >= oxygen3.pos.y - 30) && !(spaceship3.pos.x <= water3.pos.x + 20 && spaceship3.pos.x >= water3.pos.x - 20 && spaceship3.pos.y <= water3.pos.y + 20 && spaceship3.pos.y >= water3.pos.y - 20) && Asteroid2.pos.x <= spaceship3.pos.x + 90 && Asteroid2.pos.x >= spaceship3.pos.x && 
Asteroid2.pos.y <= spaceship3.pos.y + 75 && Asteroid2.pos.y >= spaceship3.pos.y) {
  sceneNum = 12;
} else if (!(spaceship3.pos.x <= oxygen3.pos.x + 30 && spaceship3.pos.x >= oxygen3.pos.x - 30 && spaceship3.pos.y <= oxygen3.pos.y + 30 && spaceship3.pos.y >= oxygen3.pos.y - 30) && !(spaceship3.pos.x <= water3.pos.x + 20 && spaceship3.pos.x >= water3.pos.x - 20 && spaceship3.pos.y <= water3.pos.y + 20 && spaceship3.pos.y >= water3.pos.y - 20) &&  Asteroid3.pos.x <= spaceship3.pos.x + 90 && Asteroid3.pos.x >= spaceship3.pos.x && 
Asteroid3.pos.y <= spaceship3.pos.y + 75 && Asteroid3.pos.y >= spaceship3.pos.y) {
  sceneNum = 12;
} else if (!(spaceship3.pos.x <= oxygen3.pos.x + 30 && spaceship3.pos.x >= oxygen3.pos.x - 30 && spaceship3.pos.y <= oxygen3.pos.y + 30 && spaceship3.pos.y >= oxygen3.pos.y - 30) && !(spaceship3.pos.x <= water3.pos.x + 20 && spaceship3.pos.x >= water3.pos.x - 20 && spaceship3.pos.y <= water3.pos.y + 20 && spaceship3.pos.y >= water3.pos.y - 20) &&  Asteroid4.pos.x <= spaceship3.pos.x + 90 && Asteroid4.pos.x >= spaceship3.pos.x && 
Asteroid4.pos.y <= spaceship3.pos.y + 75 && Asteroid4.pos.y >= spaceship3.pos.y) {
  sceneNum = 12;
} else if (!(spaceship3.pos.x <= oxygen3.pos.x + 30 && spaceship3.pos.x >= oxygen3.pos.x - 30 && spaceship3.pos.y <= oxygen3.pos.y + 30 && spaceship3.pos.y >= oxygen3.pos.y - 30) && !(spaceship3.pos.x <= water3.pos.x + 20 && spaceship3.pos.x >= water3.pos.x - 20 && spaceship3.pos.y <= water3.pos.y + 20 && spaceship3.pos.y >= water3.pos.y - 20) &&  Asteroid5.pos.x <= spaceship3.pos.x + 90 && Asteroid5.pos.x >= spaceship3.pos.x && 
Asteroid5.pos.y <= spaceship3.pos.y + 75 && Asteroid5.pos.y >= spaceship3.pos.y) {
  sceneNum = 12;
} else if (!(spaceship3.pos.x <= oxygen3.pos.x + 30 && spaceship3.pos.x >= oxygen3.pos.x - 30 && spaceship3.pos.y <= oxygen3.pos.y + 30 && spaceship3.pos.y >= oxygen3.pos.y - 30) && !(spaceship3.pos.x <= water3.pos.x + 20 && spaceship3.pos.x >= water3.pos.x - 20 && spaceship3.pos.y <= water3.pos.y + 20 && spaceship3.pos.y >= water3.pos.y - 20) &&  Asteroid6.pos.x <= spaceship3.pos.x + 90 && Asteroid6.pos.x >= spaceship3.pos.x && 
Asteroid6.pos.y <= spaceship3.pos.y + 75 && Asteroid6.pos.y >= spaceship3.pos.y) {
  sceneNum = 12;
}
  
//   Display in bottom left (score) and right corner (rectangle)
  fill(0, 255, 0);
  image(img2, 500, 500, 100, 100);
  fill(255, 255, 255);
  textSize(20);
  text("Level 3", 10, 525);
  text("Score: " + spaceship3.score, 10, 550);
  
  
//   Display elements
  Asteroid1.display();
  Asteroid2.display();
  Asteroid3.display();
  Asteroid4.display();
  Asteroid5.display();
  Asteroid6.display();
  BackButton();
  oxygen3.display();
  water3.display(); 
  spaceship3.display();

  
    //   Check if spaceship3 is touching oxygen3
  if (spaceship3.pos.x <= oxygen3.pos.x + 30 && spaceship3.pos.x >= oxygen3.pos.x - 30 && spaceship3.pos.y <= oxygen3.pos.y + 30 && spaceship3.pos.y >= oxygen3.pos.y - 30) {
    fill(255, 255, 255);
    rect(50, 100, 500, 400);
    textSize(18);
    fill(0, 0, 0);
    text(questions3O1[o3], 70, 150);
    text(questions3O2[o3], 70, 180); 
    text(answers3O1[o3], 70, 250);
    text(answers3O2[o3], 70, 300);
    text(answers3O3[o3], 70, 350);
    text(answers3O4[o3], 70, 400);
    fill(0, 255, 0);
  }
  
  //     Check if spaceship3 is touching water3
    if (spaceship3.pos.x <= water3.pos.x + 20 && spaceship3.pos.x >= water3.pos.x - 20 && spaceship3.pos.y <= water3.pos.y + 20 && spaceship3.pos.y >= water3.pos.y - 20) {
      fill(255, 255, 255);
      rect(50, 100, 500, 400);
      textSize(18);
      fill(0, 0, 0);
      text(questions3W1[w3], 70, 150);
      text(questions3W2[w3], 70, 180);
      text(answers3W1[w3], 70, 250);
      text(answers3W2[w3], 70, 300);
      fill(0, 255, 0);

    }
  
      //   Check if spaceship3 is on earth (win the level)
  if (spaceship3.pos.x <= 600 && spaceship3.pos.x >= 500 && spaceship3.pos.y <= 600 && spaceship3.pos.y >= 500) {
    sceneNum = 13;
  }

}
