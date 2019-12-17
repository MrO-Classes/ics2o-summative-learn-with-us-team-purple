// Level 1 elements
var spaceship;
var oxygen;
var water;

// Level 2 elements
var SPACESHIP;
var OXYGEN;
var WATER;
var Level2Scores = [];

//   Questions and answers for each level
var questions1 = ["What is 1+1?", "6x6", "2 + 6"];
var answers1 = ["2", "12", "12"];
var answers2 = ["1", "36", "4"];
var answers3 = ["10", "0", "10"];
var answers4 = ["100", "66", "62"];

var checkAnswerX = [200, 200];
var checkAnswerY = [250, 300];

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
  }

  textSize(20);
  fill(255, 255, 255);
  text("Score: " + spaceship.score, 10, 550);

}



//   Increment sceneNum by 1 with mouseClicked
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
  if (mouseX <= 400 && mouseX >= 250 && mouseY <= 400 && mouseY >= 350) {
    sceneNum = 4;
  }

  //       Use "Back Button" to return to splsah screen
  if (mouseX <= 110 && mouseX >= 10 && mouseY <= 60 && mouseY >= 10) {
    sceneNum = 0;
  }

  if (mouseX <= checkAnswerX[i] + 10 && mouseX >= checkAnswerX[i] - 10 && mouseY <= checkAnswerY[i] + 10 && mouseY >= checkAnswerY[i] - 10) {
    spaceship.score++;
  }

  //         Check work for questions
  if (mouseX <= 440 && mouseX >= 365 && mouseY <= 440 && mouseY >= 390 && sceneNum >=5) {
    i++;
  }
  
//   Display Level 1
  

//   Display Level 2
 if (mouseX <=360 && mouseX >=240 && mouseY <=320 && mouseY >= 200 && sceneNum === 4) {
   sceneNum = 6;
 }

}
