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
    oxygen.display();
    water.display();
    spaceship.display();
  }

//   Increment sceneNum by 1 with mouseClicked
  mouseClicked = function() {

    sceneNum++;
  }
}
