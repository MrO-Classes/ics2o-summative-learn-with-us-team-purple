var Level3 = function() {
  
//   Check if spaceship3 is touching oxygen3 or water3
  if (!(spaceship3.pos.x <= oxygen3.pos.x + 22.5 && spaceship3.pos.x >= oxygen3.pos.x - 22.5 && spaceship3.pos.y <= oxygen3.pos.y + 22.5 && spaceship3.pos.y >= oxygen3.pos.y - 22.5) && ! (spaceship3.pos.x <= water3.pos.x + 15 && spaceship3.pos.x >= water3.pos.x - 15 && spaceship3.pos.y <= water3.pos.y + 15 && spaceship3.pos.y >= water3.pos.y - 15) && ASTEROID1.pos.x <= SPACESHIP.pos.x + 20 && ASTEROID1.pos.x >= SPACESHIP.pos.x - 20 && ASTEROID1.pos.y <= SPACESHIP.pos.y + 20 && ASTEROID1.pos.y >= SPACESHIP.pos.y - 20) {
  sceneNum = 8;
} else if (!(spaceship3.pos.x <= OXYGEN.pos.x + 22.5 && spaceship3.pos.x >= OXYGEN.pos.x - 22.5 && SPACESHIP.pos.y <= OXYGEN.pos.y + 22.5 && SPACESHIP.pos.y >= OXYGEN.pos.y - 22.5) && !(SPACESHIP.pos.x <= WATER.pos.x + 15 && SPACESHIP.pos.x >= WATER.pos.x - 15 && SPACESHIP.pos.y <= WATER.pos.y + 15 && SPACESHIP.pos.y >= WATER.pos.y - 15) && ASTEROID2.pos.x <= SPACESHIP.pos.x + 20 && ASTEROID2.pos.x >= SPACESHIP.pos.x - 20 && ASTEROID2.pos.y <= SPACESHIP.pos.y + 20 && ASTEROID2.pos.y >= SPACESHIP.pos.y - 20) {
  sceneNum = 8;
} else if (!(SPACESHIP.pos.x <= OXYGEN.pos.x + 22.5 && SPACESHIP.pos.x >= OXYGEN.pos.x - 22.5 && SPACESHIP.pos.y <= OXYGEN.pos.y + 22.5 && SPACESHIP.pos.y >= OXYGEN.pos.y - 22.5) && !(SPACESHIP.pos.x <= WATER.pos.x + 15 && SPACESHIP.pos.x >= WATER.pos.x - 15 && SPACESHIP.pos.y <= WATER.pos.y + 15 && SPACESHIP.pos.y >= WATER.pos.y - 15) &&  ASTEROID3.pos.x <= SPACESHIP.pos.x + 20 && ASTEROID3.pos.x >= SPACESHIP.pos.x - 20 && ASTEROID3.pos.y <= SPACESHIP.pos.y + 20 && ASTEROID3.pos.y >= SPACESHIP.pos.y - 20) {
  sceneNum = 8;
} else if (!(SPACESHIP.pos.x <= OXYGEN.pos.x + 22.5 && SPACESHIP.pos.x >= OXYGEN.pos.x - 22.5 && SPACESHIP.pos.y <= OXYGEN.pos.y + 22.5 && SPACESHIP.pos.y >= OXYGEN.pos.y - 22.5) && !(SPACESHIP.pos.x <= WATER.pos.x + 15 && SPACESHIP.pos.x >= WATER.pos.x - 15 && SPACESHIP.pos.y <= WATER.pos.y + 15 && SPACESHIP.pos.y >= WATER.pos.y - 15) &&  ASTEROID4.pos.x <= SPACESHIP.pos.x + 20 && ASTEROID4.pos.x >= SPACESHIP.pos.x - 20 && ASTEROID4.pos.y <= SPACESHIP.pos.y + 20 && ASTEROID4.pos.y >= SPACESHIP.pos.y - 20) {
  sceneNum = 8;
} else if (!(SPACESHIP.pos.x <= OXYGEN.pos.x + 22.5 && SPACESHIP.pos.x >= OXYGEN.pos.x - 22.5 && SPACESHIP.pos.y <= OXYGEN.pos.y + 22.5 && SPACESHIP.pos.y >= OXYGEN.pos.y - 22.5) && !(SPACESHIP.pos.x <= WATER.pos.x + 15 && SPACESHIP.pos.x >= WATER.pos.x - 15 && SPACESHIP.pos.y <= WATER.pos.y + 15 && SPACESHIP.pos.y >= WATER.pos.y - 15) &&  ASTEROID5.pos.x <= SPACESHIP.pos.x + 20 && ASTEROID5.pos.x >= SPACESHIP.pos.x - 20 && ASTEROID5.pos.y <= SPACESHIP.pos.y + 20 && ASTEROID5.pos.y >= SPACESHIP.pos.y - 20) {
  sceneNum = 8;
}
  BackButton();
  spaceship3.display();
  oxygen3.display();
  water3.display();

}
