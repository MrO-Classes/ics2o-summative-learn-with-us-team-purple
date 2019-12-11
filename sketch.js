var spaceship;
var oxygen;
var water;
var questions = ["What is 1+1?", "6x6", "2 + 6"];
// var answers1 = ["2", "36", "8"];
// var answers2 = ["1", "12", "12"];
var i = 0;


function setup() {
  createCanvas(600, 600);

  spaceship = new Spaceship();
  oxygen = new Oxygen();
  water = new Water();
}

function draw() {
  background(0, 0, 0);

  oxygen.display();
  water.display();
  spaceship.display();
}
