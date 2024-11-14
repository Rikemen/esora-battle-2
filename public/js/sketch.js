let players = [];
let player1, player2;
let staplerSaurus;
let darumaGorilla;

function preload() {
  staplerSaurus = loadImage("images/staplerSaurus.png"); // パスを確認してください
  darumaGorilla = loadImage("images/darumaGorilla.png"); // パスを確認してください
}

function setup() {
  createCanvas(1200, 600);
  let pos1 = createVector(200, height - 200);
  player1 = new Monster(pos1, staplerSaurus);
  players.push(player1);
  let pos2 = createVector(1000, height - 200);
  player2 = new Monster(pos2, darumaGorilla);
  players.push(player2);
}

function draw() {
  background(220);
  fill(0, 220, 170);
  rect(0, height - 60, width, height);
  for (let i = 0; i < players.length; i++) {
    players[i].display();
    players[i].update();
  }

}

function keyPressed() {
  console.log("some key is pressed");
  if (keyCode === UP_ARROW) {
    console.log("up is pressed");
    if (player1.isJump === false) {
      player1.jump();
    }
  };
  if (keyCode === RIGHT_ARROW) {
    console.log("right is pressed");
    player1.moveR();
  };
  if (keyCode === LEFT_ARROW) {
    console.log("left is pressed");
    player1.moveL();
  };
  if (keyCode === DOWN_ARROW) {
    console.log("right is pressed");
    player1.barrier();
  };
  if (key === "a") {
    console.log("a is pressed");
    player1.normalAttack();
  };
  if (key === "s") {
    console.log("s is pressed");
    player1.specialAttack();
  };

}