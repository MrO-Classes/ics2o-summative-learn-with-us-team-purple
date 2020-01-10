var img;

// Level 1 elements
var spaceship;
var oxygen;
var water;
var asteroid1;
var asteroid2;
var asteorid3;
var asteroid4;
var asteroid5;
var level1scores = [];
var i;


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
var I;

// Level 3 elements
var spaceship3;
var oxygen3;
var water3;



//    var O=0; is used to display Oxygen questions (level 2)
var O = 0;

//   Questions and answers for Oxygen (Level 2)
var QUESTIONSO1 = ["$5 + 7 quarters = ?", "Jack spends $2 ¢50 on socks and $5 ¢40 on gloves.", "A bag of gummy bears costs $5.25. You pay $10.00.", "$7 ¢50 - ¢10 = ?",  "Afnan gets $7 from her parents and she spends $3.00.","Correct! You may move on!"];

var QUESTIONSO2 = ["", "If he had $10, how much does he have left?", "How much CHANGE will you be given?","", "How much money does she have left?", ""];

var ANSWERSO1 = ["$6 ¢75",  "$10",    "$10",     "$6 ¢50", "$4", ""];

var ANSWERSO2 = ["$57",     "$2 ¢10",  "$5 ¢25", "$17 ¢50","$10", ""];

var ANSWERSO3 = ["$5 ¢7",   "$7 ¢90",  "$4 ¢75", "$7 ¢60", "$3", ""];

var ANSWERSO4 = ["$5 ¢175", "$3 ¢10",  "62",     "$7 ¢40", "$6 ¢70", ""];

var CHECKANSWEROX = [70,  70,  70,  70,  70];
var CHECKANSWEROY = [250, 300, 350, 400, 250];

// Wrong answer coordinates (level 2, oxygen)
var WRONGANSWEROX1 = [70,  70,  70,  70,   70];
var WRONGANSWEROY1 = [300, 250, 250, 250, 300];

var WRONGANSWEROX2 = [70,  70,  70,   70,  70];
var WRONGANSWEROY2 = [350, 350, 300, 300, 350];

var WRONGANSWEROX3 = [70,   70,  70,  70,  70]; 
var WRONGANSWEROY3 = [400, 400, 400, 350, 400];

// Questions and answers for Water (Level 2)
var QUESTIONSW1 = ["Are these coin collections equal?", "True or false:", "Which coin should be added to make the statement true?", "True or false:", "Correct! You may proceed."];

var QUESTIONSW2 = ["$2 + $3 + ¢50 + ¢5 and $2 + ¢50 + $3 + $5", "$10 - $6 - $2 ¢50 + $1 ¢50 = $3", "$3 ¢25 + ¢50 + _ = $4", "$7 can be represented with 1 bill/coin.", ""];

var ANSWERSW1 = ["Yes", "True", "¢50", "True", ""];

var ANSWERSW2 = ["No", "False", "$1", "False", ""];

var ANSWERSW3 = ["",    "",     "¢25", "", ""];

var ANSWERSW4 = ["",    "",     "¢10", "", ""];

var CHECKANSWERWX = [70,  70,   70, 70];
var CHECKANSWERWY = [300, 250, 350, 300];

// wrong answer coordinates (level 2, water)
var WRONGANSWERWX1 = [70,   70, 70,   70];
var WRONGANSWERWY1 = [250, 300, 250, 250];

var WRONGANSWERWX2 = [70, 70,    70,   70];
var WRONGANSWERWY2 = [350, 350, 300, 350 ];

var WRONGANSWERWX3 = [70, 70,    70,  70];
var WRONGANSWERWY3 = [400, 400, 400, 400];

// var W=0; is used to display Water questions (level 2)
var W = 0;

var sceneNum = 0;


// Questions and answers for level 1 (oxygen)
var questionsO1 = ["Hot chocolate costs $2 at a restaurant. Bob wants to buy", "A Prodigy membership costs $8. David wants to get", "Hanaah's favourite chocolate cake costs $10, but she only", "A Kitkat bar costs $2 on Monday. Friday, the prices double.", "Correct! You may proceed!"];

var questionsO2 = ["one. If he pays $5, how much money should he get back?", "one with his $10. How much money should he get back?", "has $5 ¢50. How much MORE money does she need?", "What is the new cost of the chocolate bar?", ""];

var answersO1 = ["$5", "$2", "$5 ¢50",  "$2", ""];

var answersO2 = ["$2", "$8", "$15 ¢50", "$4", ""];

var answersO3 = ["$3", "$10", "$10",    "$1", ""];

var answersO4 = ["$0", "$0", "$4 ¢50",  "$5", ""];

var checkanswerOX = [70,  70,   70,  70];
var checkanswerOY = [350, 250, 400, 300];

// Wrong answer coordinates (level 1, oxygen)
var wronganswerOX1 = [70,   70,  70,  70];
var wronganswerOY1 = [250, 300, 250, 250];

var wronganswerOX2 = [70,   70,  70,  70];
var wronganswerOY2 = [300, 350, 300, 350];

var wronganswerOX3 = [70,   70,  70,  70];
var wronganswerOY3 = [400, 400, 350, 400];

var o = 0;

// water questions (level 1)
var questionsW1 = ["True or false:", "Which of these collections is equal to $10?", "Matthew wants to buy a cookie and drink. Cookies are ¢50, and drinks are $1 ¢50", "Maryam is going to David's party and needs a gift. The gift costs $5 ¢75, but she only has $4 ¢90", "Correct! You may proceed"];

var questionsW2 = ["¢10 = $0.10", "", "If he wants to pay with only 1 bill/coin, which should he use?", "How much more money does she need?", ""];

var answersW1 = ["True",  "$1 ¢50 + $1 ¢50 + $1 ¢50",     "$5",    "$5 ¢75", ""];

var answersW2 = ["False", "¢50 + $2 ¢50 + $3 + $1 ¢50", "$10", "¢85", ""];

var answersW3 = ["",      "$3 + $3 + $1 ¢50 + $2 + ¢50", "$1",  "$4 ¢90", ""];

var answersW4 = ["",      "", 
      "$2",  "$10", ""];

var checkanswerWX = [70,   70,  70,  70];
var checkanswerWY = [250, 350, 400, 300];

// Wrong answer coordinates (level 1, water)
var wronganswerWX1 = [70,   70,  70,  70];
var wronganswerWY1 = [300, 250, 250, 250];

var wronganswerWX2 = [70,   70,  70,  70];
var wronganswerWY2 = [350, 300, 300, 350];

var wronganswerWX3 = [70,   70,  70,  70];
var wronganswerWY3 = [400, 350, 350, 400];

var w = 0;




function setup() {
  createCanvas(600, 600);

  //   Used in level 1
  spaceship = new Spaceship(100, 100);
  oxygen = new Oxygen(300, 400);
  water = new Water(400, 200);
  asteroid1 = new Asteroid(300, 100);
  asteroid2 = new Asteroid(100, 400);
  asteroid3 = new Asteroid(500, 200);

  //   Used in level 2
  SPACESHIP = new Spaceship(100, 100);
  OXYGEN = new Oxygen(300, 400);
  WATER = new Water(400, 200);
  ASTEROID1 = new Asteroid(200, 390);
  ASTEROID2 = new Asteroid(500, 100);
  ASTEROID3 = new Asteroid(300, 500);
  ASTEROID4 = new Asteroid(400, 300);
  ASTEROID5 = new Asteroid(100, 300);


  
//   Used in level 3
  spaceship3 = new Spaceship(100, 100);
  oxygen3 = new Oxygen(300, 400);
  water3 = new Water(400, 200);
  
  img = loadImage('Logo.png');


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
    Level1();
  } else if (sceneNum === 6) {
    Level2();
  } else if (sceneNum === 7) {
//     Level 2 winstate
    SPACESHIP.win();
  } else if (sceneNum === 8) {
//     Level 1 lose state
    BackButton();
    spaceship.lose();
  } else if (sceneNum === 9) {
//     Display Level 3
    Level3();
  }  else if (sceneNum === 10) {
//     Level 1 winstate
    spaceship.win();
  } else if (sceneNum === 11) {
    SPACESHIP.lose();
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
  if (mouseX <= 110 && mouseX >= 10 && mouseY <= 60 && mouseY >= 10 && sceneNum <= 9) {
    sceneNum = 0;
  }
  
//   Show that oxygen questions were answered correctly (level 1)
  if (mouseX <= checkanswerOX[o] + 100 && mouseX >= checkanswerOX[o] - 10 && mouseY <= checkanswerOY[o] + 10 && mouseY >= checkanswerOY[o] - 10 && spaceship.pos.x <= oxygen.pos.x + 22.5 && spaceship.pos.x >= oxygen.pos.x - 22.5 && spaceship.pos.y <= oxygen.pos.y + 22.5 && spaceship.pos.y >= oxygen.pos.y - 22.5) {
    oxygen.CorrectAnswer();
  } else if (mouseX <= wronganswerOX1[o] + 100 && mouseX >= wronganswerOX1[o] - 10 && mouseY <= wronganswerOY1[o] + 10 && mouseY >= wronganswerOY1[o] - 10 && spaceship.pos.x <= oxygen.pos.x + 22.5 && spaceship.pos.x >= oxygen.pos.x - 22.5 && spaceship.pos.y <= oxygen.pos.y + 22.5 && spaceship.pos.y >= oxygen.pos.y - 22.5) {
    oxygen.WrongAnswer();
  } else if (mouseX <= wronganswerOX2[o] + 100 && mouseX >= wronganswerOX2[o] - 10 && mouseY <= wronganswerOY2[o] + 10 && mouseY >= wronganswerOY2[o] - 10 && spaceship.pos.x <= oxygen.pos.x + 22.5 && spaceship.pos.x >= oxygen.pos.x - 22.5 && spaceship.pos.y <= oxygen.pos.y + 22.5 && spaceship.pos.y >= oxygen.pos.y - 22.5) {
    oxygen.WrongAnswer();
  } else if (mouseX <= wronganswerOX3[o] + 100 && mouseX >= wronganswerOX3[o] - 10 && mouseY <= wronganswerOY3[o] + 10 && mouseY >= wronganswerOY3[o] - 10 && spaceship.pos.x <= oxygen.pos.x + 22.5 && spaceship.pos.x >= oxygen.pos.x - 22.5 && spaceship.pos.y <= oxygen.pos.y + 22.5 && spaceship.pos.y >= oxygen.pos.y - 22.5) {
    oxygen.WrongAnswer();
  }

//   water questions (level 1)
  if (mouseX <= checkanswerWX[w] + 100 && mouseX >= checkanswerWX[w] - 10 && mouseY <= checkanswerWY[w] + 10 && mouseY >= checkanswerWY[w] - 10 && spaceship.pos.x <= water.pos.x + 15 && spaceship.pos.x >= water.pos.x - 15 && spaceship.pos.y <= water.pos.y + 15 && spaceship.pos.y >= water.pos.y - 15) {
    water.CorrectAnswer();
  } else if (mouseX <= wronganswerWX1[w] + 100 && mouseX >= wronganswerWX1[w] - 10 && mouseY <= wronganswerWY1[w] + 10 && mouseY >= wronganswerWY1[w] - 10 && spaceship.pos.x <= water.pos.x + 15 && spaceship.pos.x >= water.pos.x - 15 && spaceship.pos.y <= water.pos.y + 15 && spaceship.pos.y >= water.pos.y - 15) {
    water.WrongAnswer();
  } else if (mouseX <= wronganswerWX2[w] + 100 && mouseX >= wronganswerWX2[w] - 10 && mouseY <= wronganswerWY2[w] + 10 && mouseY >= wronganswerWY2[w] - 10 && spaceship.pos.x <= water.pos.x + 15 && spaceship.pos.x >= water.pos.x - 15 && spaceship.pos.y <= water.pos.y + 15 && spaceship.pos.y >= water.pos.y - 15) {
    water.WrongAnswer();
  } else if (mouseX <= wronganswerWX3[w] + 100 && mouseX >= wronganswerWX3[w] - 10 && mouseY <= wronganswerWY3[w] + 10 && mouseY >= wronganswerWY3[w] - 10 && spaceship.pos.x <= water.pos.x + 15 && spaceship.pos.x >= water.pos.x - 15 && spaceship.pos.y <= water.pos.y + 15 && spaceship.pos.y >= water.pos.y - 15) {
    water.WrongAnswer();
  }
  
  
//   Show that question was answered correctly (level 2)
  if (mouseX <= CHECKANSWEROX[O] + 50 && mouseX >= CHECKANSWEROX[O] - 10 && mouseY <= CHECKANSWEROY[O] + 10 && mouseY >= CHECKANSWEROY[O] - 10 && SPACESHIP.pos.x <= OXYGEN.pos.x + 22.5 && SPACESHIP.pos.x >= OXYGEN.pos.x - 22.5 && SPACESHIP.pos.y <= OXYGEN.pos.y + 22.5 && SPACESHIP.pos.y >= OXYGEN.pos.y - 22.5) {
//     Display message saying that the question was correctly answered (Oxygen)
    OXYGEN.CorrectAnswer();
  } else if (mouseX <= WRONGANSWEROX1[O] + 100 && mouseX >= WRONGANSWEROX1[O] - 10 && mouseY <= WRONGANSWEROY1[O] + 10 && mouseY >= WRONGANSWEROY1[O] - 10 && SPACESHIP.pos.x <= OXYGEN.pos.x + 22.5 && SPACESHIP.pos.x >= OXYGEN.pos.x - 22.5 && SPACESHIP.pos.y <= OXYGEN.pos.y + 22.5 && SPACESHIP.pos.y >= OXYGEN.pos.y - 22.5) {
//     Display different question if answered incorrectly
    OXYGEN.WrongAnswer();
  } else if (mouseX <= WRONGANSWEROX2[O] + 100 && mouseX >= WRONGANSWEROX2[O] - 10 && mouseY <= WRONGANSWEROY2[O] + 10 && mouseY >= WRONGANSWEROY2[O] - 10 && SPACESHIP.pos.x <= OXYGEN.pos.x + 22.5 && SPACESHIP.pos.x >= OXYGEN.pos.x - 22.5 && SPACESHIP.pos.y <= OXYGEN.pos.y + 22.5 && SPACESHIP.pos.y >= OXYGEN.pos.y - 22.5) {
//     Display different question if answered incorrectly
    OXYGEN.WrongAnswer();
  } else if (mouseX <= WRONGANSWEROX3[O] + 100 && mouseX >= WRONGANSWEROX3[O] - 10 && mouseY <= WRONGANSWEROY3[O] + 10 && mouseY >= WRONGANSWEROY3[O] - 10 && SPACESHIP.pos.x <= OXYGEN.pos.x + 22.5 && SPACESHIP.pos.x >= OXYGEN.pos.x - 22.5 && SPACESHIP.pos.y <= OXYGEN.pos.y + 22.5 && SPACESHIP.pos.y >= OXYGEN.pos.y - 22.5) {
//     Display different question if answered incorrectly
    OXYGEN.WrongAnswer();
  }
  
//   Water questions (level 2)
  if (mouseX <= CHECKANSWERWX[W] + 100 && mouseX >= CHECKANSWERWX[W] - 10 && mouseY <= CHECKANSWERWY[W] + 10 && mouseY >= CHECKANSWERWY[W] - 10 && SPACESHIP.pos.x <= WATER.pos.x + 15 && SPACESHIP.pos.x >= WATER.pos.x - 15 && SPACESHIP.pos.y <= WATER.pos.y + 15 && SPACESHIP.pos.y >= WATER.pos.y - 15) {
    WATER.CorrectAnswer();
  } else if (mouseX <= WRONGANSWERWX1[W] + 100 && mouseX >= WRONGANSWERWX1[W] - 10 && mouseY <= WRONGANSWERWY1[W] + 10 && mouseY >= WRONGANSWERWY1[W] - 10 && SPACESHIP.pos.x <= WATER.pos.x + 15 && SPACESHIP.pos.x >= WATER.pos.x - 15 && SPACESHIP.pos.y <= WATER.pos.y + 15 && SPACESHIP.pos.y >= WATER.pos.y - 15) {
    WATER.WrongAnswer();
  } else if (mouseX <= WRONGANSWERWX2[W] + 100 && mouseX >= WRONGANSWERWX2[W] - 10 && mouseY <= WRONGANSWERWY2[W] + 10 && mouseY >= WRONGANSWERWY2[W] - 10 && SPACESHIP.pos.x <= WATER.pos.x + 15 && SPACESHIP.pos.x >= WATER.pos.x - 15 && SPACESHIP.pos.y <= WATER.pos.y + 15 && SPACESHIP.pos.y >= WATER.pos.y - 15) {
    WATER.WrongAnswer();
  } else if (mouseX <= WRONGANSWERWX3[W] + 100 && mouseX >= WRONGANSWERWX3[W] - 10 && mouseY <= WRONGANSWERWY3[W] + 10 && mouseY >= WRONGANSWERWY3[W] - 10 && SPACESHIP.pos.x <= WATER.pos.x + 15 && SPACESHIP.pos.x >= WATER.pos.x - 15 && SPACESHIP.pos.y <= WATER.pos.y + 15 && SPACESHIP.pos.y >= WATER.pos.y - 15) {
    WATER.WrongAnswer();
  }


  //   Display Level 1
  if (mouseX <= 180 && mouseX >= 60 && mouseY <= 320 && mouseY >= 200 && sceneNum === 4) {
    sceneNum = 5;
  }


  //   Display Level 2
  if (mouseX <= 360 && mouseX >= 240 && mouseY <= 320 && mouseY >= 200 && sceneNum === 4) {
    sceneNum = 6;
  }
  

//   Display Level 3
  if (mouseX <= 540 && mouseX >= 420 && mouseY <= 320 && mouseY >= 200 && sceneNum === 4) {
    sceneNum = 9;
  }
  
//   End of Level 1 (Move to Level 2 or return to splash)
  
  if (mouseX <= 285 && mouseX >= 200 && mouseY <= 510 && mouseY >= 450 && sceneNum === 10) {
    sceneNum = 0;
  } else if (mouseX <= 400 && mouseX >= 315 && mouseY <= 510 && mouseY >= 450 && sceneNum === 10) {
    sceneNum = 6;
  }


  //   End of Level 2 (Move to Level 3 or return to splash)
  if (mouseX <= 285 && mouseX >= 200 && mouseY <= 510 && mouseY >= 450 && sceneNum === 7) {
    sceneNum = 0;
  } else if (mouseX <= 400 && mouseX >= 315 && mouseY <= 510 && mouseY >= 450 && sceneNum === 7) {
    sceneNum = 9;
  }
  
// Lost level 1 (return to splash or retry)
  
  if (mouseX <= 285 && mouseX >= 200 && mouseY <= 510 && mouseY >= 450 && sceneNum === 8) {
    sceneNum = 0;
    spaceship.pos = createVector(100, 100);
    asteroid1.pos = createVector(300, 100);   
    asteroid2.pos = createVector(100, 400);
    asteroid3.pos = createVector(500, 200);
    
    o = 0;
    w = 0;
  
  } else if (mouseX <= 400 && mouseX >= 315 && mouseY <= 510 && mouseY >= 450 && sceneNum === 8) {
    sceneNum = 5;
    spaceship.pos = createVector(100, 100);
    asteroid1.pos = createVector(300, 100);   
    asteroid2.pos = createVector(100, 400);
    asteroid3.pos = createVector(500, 200);
    
    o = 0;
    w = 0;
  }
  
  
//   Lost Level 2 (return to splash or retry) 
  if (mouseX <= 285 && mouseX >= 200 && mouseY <= 510 && mouseY >= 450 && sceneNum === 11) {
    sceneNum = 0;
//     Reset to original position
    SPACESHIP.pos = createVector(100, 100);
    ASTEROID1.pos = createVector(200, 390);   
    ASTEROID2.pos = createVector(500, 100);
    ASTEROID3.pos = createVector(300, 500);
    ASTEROID4.pos = createVector(400, 300);
    ASTEROID5.pos = createVector(100, 300);
    
    O = 0;
    W = 0;
    
  } else if (mouseX <= 400 && mouseX >= 315 && mouseY <= 510 && mouseY >= 450 && sceneNum === 11) {
    sceneNum = 6;
//     Reset to original position
    SPACESHIP.pos = createVector(100, 100);
    ASTEROID1.pos = createVector(200, 390);   
    ASTEROID2.pos = createVector(500, 100);
    ASTEROID3.pos = createVector(300, 500);
    ASTEROID4.pos = createVector(400, 300);
    ASTEROID5.pos = createVector(100, 300);
    
    O = 0;
    W = 0;
    
    
  }
  

}


