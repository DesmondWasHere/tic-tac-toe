let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let players = ["X", "O"];
let currentPlayer = "X";
function setup() {
  createCanvas(500, 500);
  strokeWeight(4);
}

function draw() {
  cursor("https://avatars0.githubusercontent.com/u/1617169?s=16");
  background(255);
  let w = 100;
  let h = 100;
  strokeWeight(4);
  line(0, h, 300, h);
  line(0, h * 2, 300, h * 2);
  line(w, 0, w, 300);
  line(w * 2, 0, w * 2, 300);

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      let x = w * i + w / 2;
      let y = h * j + h / 2;
      let spot = board[i][j];
      textSize(32);
      let r = w / 4;
      if (spot == players[1]) {
        noFill();
        ellipse(x, y, r * 2);
      } else if (spot == players[0]) {
        line(x - r, y - r, x + r, y + r);
        line(x + r, y - r, x - r, y + r);
      }
    }
  }
}

function mouseClicked() {
  let x = mouseX;
  let y = mouseY;
  let x1 = floor(x / 100);
  let y1 = floor(y / 100);
  console.log(x, y);
  console.log(x1, y1);
  if (board[x1][y1] == "") {
    board[x1][y1] = currentPlayer;
    if (currentPlayer == "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
    checkforWinner();
  }
}
function equal3(a, b, c) {
  return a == b && b == c && a == c;
}
function checkforWinner() {
  for (let i = 0; i < 3; i++) {
    if (equal3(board[i][0], board[i][1], board[i][2]) && board[i][0] != "") {
      noLoop();
      console.log(board[i][0]);
    }
    if (equal3(board[0][i], board[1][i], board[2][i]) && board[0][i] != "") {
      noLoop();
      console.log(board[0][i]);
    }
  }
  if (equal3(board[0][0], board[1][1], board[2][2]) && board[0][0] != "") {
    noLoop();
    console.log(board[0][0]);
  }
  if (equal3(board[0][2], board[1][1], board[2][0]) && board[1][1] != "") {
    noLoop();
    console.log(board[1][1]);
  }
}
