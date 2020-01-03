// Level 1 elements
var spaceship;
var oxygen;
var water;

// Level 2 elements
var SPACESHIP;
var OXYGEN;
var WATER;
var Level2Scores = [];
var ASTEROID1;
var ASTEROID2;
var ASTEROID3;
var ASTEROID4;
var ASTEROID5;


//   Questions and answers for each level
var questions1 = ["What is 1+1?", "6x6", "2 + 6", "A bag of gummy bears costs $5.25. You pay $10.00. How much CHANGE will you be given?"];
var answers1 = ["2", "12", "12", "0"];
var answers2 = ["1", "36", "4", "0"];
var answers3 = ["10", "0", "8", "0"];
var answers4 = ["100", "66", "62", "0"];

var checkAnswerX = [200, 200, 200];
var checkAnswerY = [250, 300, 350];

//    var i=0; is used to display different questions
var i = 0;
var sceneNum = 0;


function setup() {
  createCanvas(600, 600);

  //   Used in level 1
  spaceship = new Spaceship();
  oxygen = new Oxygen();
  water = new Water();

  //   Used in level 2
  SPACESHIP = new Spaceship();
  OXYGEN = new Oxygen();
  WATER = new Water();
  ASTEROID1 = new Asteroid(200, 390);
  ASTEROID2 = new Asteroid(500, 100);
  ASTEROID3 = new Asteroid(300, 500);
  ASTEROID4 = new Asteroid(400, 300);
  ASTEROID5 = new Asteroid(100, 300);

}

function draw() {
  background(0, 0, 0);

  //   Draw each Scene
  if (sceneNum === 0) {
    Scene1();
  } else if (sceneNum === 1) {
    About();
    BackButton();
  } else if (sceneNum === 2) {
    MainMenu();
    BackButton();
  } else if (sceneNum === 3) {
    Instructions();
    BackButton();
  } else if (sceneNum === 4) {
    BackButton();
    LevelSelection();
  } else if (sceneNum === 5) {
    //     Display Level 1
  } else if (sceneNum === 6) {
    Level2();
  } else if (sceneNum === 7) {
    WinState();
  } else if (sceneNum === 8) {
    LoseState();
  } else if (sceneNum === 9) {
//     Display Level 3
  } 


}



//   Increment sceneNum with each mouse click
mouseClicked = function() {
  //     About Screen
  if (mouseX <= 350 && mouseX >= 240 && mouseY <= 250 && mouseY >= 200 && sceneNum === 0) {
    sceneNum = 1;
  }

  //     Main Menu Screen
  if (mouseX <= 400 && mouseX >= 250 && mouseY <= 300 && mouseY >= 275 && sceneNum === 0) {
    sceneNum = 2;
  }
  //     Instructions
  if (mouseX <= 400 && mouseX >= 250 && mouseY <= 375 && mouseY >= 300 && sceneNum === 0) {
    sceneNum = 3;
  }

  //       Play
  if (mouseX <= 400 && mouseX >= 250 && mouseY <= 400 && mouseY >= 350 && sceneNum === 0) {
    sceneNum = 4;
  }

  //       Use "Back Button" to return to splsah screen
  if (mouseX <= 110 && mouseX >= 10 && mouseY <= 60 && mouseY >= 10 && sceneNum <= 7) {
    sceneNum = 0;
  }

//   Increase score each after answering question correctly
  if (mouseX <= checkAnswerX[i] + 10 && mouseX >= checkAnswerX[i] - 10 && mouseY <= checkAnswerY[i] + 10 && mouseY >= checkAnswerY[i] - 10) {
    SPACESHIP.score +=10;
  }

  //         Check work for questions
  if (mouseX <= 440 && mouseX >= 365 && mouseY <= 440 && mouseY >= 390 && sceneNum >= 5) {
    i++;
  }

  //   Display Level 1


  //   Display Level 2
  if (mouseX <= 360 && mouseX >= 240 && mouseY <= 320 && mouseY >= 200 && sceneNum === 4) {
    sceneNum = 6;
  }

  //   End of Level 2 (Move to Level 3 or return to splash)
  if (mouseX <= 285 && mouseX >= 200 && mouseY <= 510 && mouseY >= 450 && sceneNum === 7) {
    sceneNum = 0;
  } else if (mouseX <= 400 && mouseX >= 315 && mouseY <= 510 && mouseY >= 450 && sceneNum === 7) {
    sceneNum = 9;
  }
  
//   Lost Level 2 (Retry or return to splash) 
  if (mouseX <= 285 && mouseX >= 200 && mouseY <= 510 && mouseY >= 450 && sceneNum === 8) {
    sceneNum = 0;
//     Reset to original position
    SPACESHIP.pos = createVector(100, 100);
    ASTEROID1.pos = createVector(200, 390);   
    ASTEROID2.pos = createVector(500, 100);
    ASTEROID3.pos = createVector(300, 500);
    ASTEROID4.pos = createVector(400, 300);
    ASTEROID5.pos = createVector(100, 300);
    
  } else if (mouseX <= 400 && mouseX >= 315 && mouseY <= 510 && mouseY >= 450 && sceneNum === 8) {
    sceneNum = 6;
//     Reset to original position
    SPACESHIP.pos = createVector(100, 100);
    ASTEROID1.pos = createVector(200, 390);   
    ASTEROID2.pos = createVector(500, 100);
    ASTEROID3.pos = createVector(300, 500);
    ASTEROID4.pos = createVector(400, 300);
    ASTEROID5.pos = createVector(100, 300);
    
  }

}
