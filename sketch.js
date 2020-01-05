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

var SHOOTER;
var shooterX;


//    var i=0; is used to display Oxygen questions
var i = 0;

//   Questions and answers for Oxygen
var questionsO1 = ["$5 + 7 quarters = ?", "Jack spends $2 ¢50 on socks and $5 ¢40 on gloves.", "A bag of gummy bears costs $5.25. You pay $10.00.", "$7 ¢50 - ¢10 = ?",  "Afnan gets $7 from her parents and she spends $3.00.","Correct! You may move on!"];

var questionsO2 = ["", "If he had $10, how much does he have left?", "How much CHANGE will you be given?","", "How much money does she have left?", ""];

var answersO1 = ["$6 ¢75",  "$10",    "$10",     "$6 ¢50", "$4", ""];

var answersO2 = ["$57",     "$2 ¢10",  "$5 ¢25", "$17 ¢50","$10", ""];

var answersO3 = ["$5 ¢7",   "$7 ¢90",  "$4 ¢75", "$7 ¢60", "$3", ""];

var answersO4 = ["$5 ¢175", "$3 ¢10",  "62",     "$7 ¢40", "$6 ¢70", ""];

var checkAnswerOX = [70,  70,  70,  70,  70];
var checkAnswerOY = [250, 300, 350, 400, 250];

// Questions and answers for Water
var questionsW1 = ["Are these coin collections equal?", "True or false:", "Which of the following coins should be added to make the statement true?", "True or false:", "Correct! You may proceed."];

var questionsW2 = ["$2 + $3 + ¢50 + ¢5 and $2 + ¢50 + $3 + $5", "$10 - $6 - $2 ¢50 + $1 ¢50 = $3", "$3 ¢25 + ¢50 + _ = $4", "$7 can be represented with 1 bill/coin.", ""];

var answersW1 = ["Yes", "True", "¢50", "True", ""];

var answersW2 = ["No", "False", "$1", "False", ""];

var answersW3 = ["",    "",     "¢25", "", ""];

var answersW4 = ["",    "",     "¢10", "", ""];

var checkAnswerWX = [70,  70,   70, 70];
var checkAnswerWY = [300, 250, 350, 300];

// var w=0; is used to display Water questions
var w = 0;

var sceneNum = 0;


function setup() {
  createCanvas(600, 600);

  //   Used in level 1
  spaceship = new Spaceship();
  oxygen = new Oxygen();
  water = new Water();

  //   Used in level 2
  SPACESHIP = new Spaceship(100, 100);
  OXYGEN = new Oxygen(300, 400);
  WATER = new Water(400, 200);
  ASTEROID1 = new Asteroid(200, 390);
  ASTEROID2 = new Asteroid(500, 100);
  ASTEROID3 = new Asteroid(300, 500);
  ASTEROID4 = new Asteroid(400, 300);
  ASTEROID5 = new Asteroid(100, 300);
    
  shooterX = SPACESHIP.pos.x;

  

}

function draw() {

  SHOOTER = new Shooter(shooterX, SPACESHIP.pos.y);
  shooterX ++;
  
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

//   Show that question was answered correctly
  if (mouseX <= checkAnswerOX[i] + 50 && mouseX >= checkAnswerOX[i] - 10 && mouseY <= checkAnswerOY[i] + 10 && mouseY >= checkAnswerOY[i] - 10 && SPACESHIP.pos.x <= OXYGEN.pos.x + 22.5 && SPACESHIP.pos.x >= OXYGEN.pos.x - 22.5 && SPACESHIP.pos.y <= OXYGEN.pos.y + 22.5 && SPACESHIP.pos.y >= OXYGEN.pos.y - 22.5) {
//     Display message saying that the question was correctly answered (Oxygen)
    CorrectAnswerOxygen();
  } else if (! (mouseX <= checkAnswerOX[i] + 50 && mouseX >= checkAnswerOX[i] - 10 && mouseY <= checkAnswerOY[i] + 10 && mouseY >= checkAnswerOY[i] - 10) && SPACESHIP.pos.x <= OXYGEN.pos.x + 22.5 && SPACESHIP.pos.x >= OXYGEN.pos.x - 22.5 && SPACESHIP.pos.y <= OXYGEN.pos.y + 22.5 && SPACESHIP.pos.y >= OXYGEN.pos.y - 22.5) {
//     Display different question if answered incorrectly
    WrongAnswerOxygen();
  }
  
//   Water questions
  if (mouseX <= checkAnswerWX[w] + 50 && mouseX >= checkAnswerWX[w] - 10 && mouseY <= checkAnswerWY[w] + 10 && mouseY >= checkAnswerWY[w] - 10 && SPACESHIP.pos.x <= WATER.pos.x + 15 && SPACESHIP.pos.x >= WATER.pos.x - 15 && SPACESHIP.pos.y <= WATER.pos.y + 15 && SPACESHIP.pos.y >= WATER.pos.y - 15) {
    CorrectAnswerWater();
  } else if (! (mouseX <= checkAnswerWX[w] + 50 && mouseX >= checkAnswerWX[w] - 10 && mouseY <= checkAnswerWY[w] + 10 && mouseY >= checkAnswerWY[w] - 10) && SPACESHIP.pos.x <= WATER.pos.x + 15 && SPACESHIP.pos.x >= WATER.pos.x - 15 && SPACESHIP.pos.y <= WATER.pos.y + 15 && SPACESHIP.pos.y >= WATER.pos.y - 15) {
    WrongAnswerWater();
  }

  //         Check work for questions
  // if (mouseX <= 440 && mouseX >= 365 && mouseY <= 440 && mouseY >= 390 && sceneNum >= 5) {
  //   i++;
  // }

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
    
    i = 0;
    w = 0;
    
  } else if (mouseX <= 400 && mouseX >= 315 && mouseY <= 510 && mouseY >= 450 && sceneNum === 8) {
    sceneNum = 6;
//     Reset to original position
    SPACESHIP.pos = createVector(100, 100);
    ASTEROID1.pos = createVector(200, 390);   
    ASTEROID2.pos = createVector(500, 100);
    ASTEROID3.pos = createVector(300, 500);
    ASTEROID4.pos = createVector(400, 300);
    ASTEROID5.pos = createVector(100, 300);
    
    i = 0;
    w = 0;
    
  }
  

}


