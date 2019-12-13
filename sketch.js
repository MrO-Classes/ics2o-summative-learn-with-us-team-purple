var spaceship;
var oxygen;
var water;
var questions1 = ["What is 1+1?", "6x6", "2 + 6"];
var i = 0;
var sceneNum = 0;


function setup() {
  createCanvas(600, 600);

  spaceship = new Spaceship();
  oxygen = new Oxygen();
  water = new Water();
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
    oxygen.display();
    water.display();
    spaceship.display();
  }

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
  
  if (mouseX <= 400 && mouseX >=250 && mouseY <=400 && mouseY >=350) {
  sceneNum = 4;
  }

  //       Use "Back Button" to return to splsah screen
  if (mouseX <= 110 && mouseX >= 10 && mouseY <= 60 && mouseY >= 10) {
    sceneNum = 0;
  }

}
