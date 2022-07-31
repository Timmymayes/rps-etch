/*

functions:

createBoard(size) : 
- create a new board
- delete the current board, including event listeners
- create a new board and add event listeners hooked up to the "activate" function

activate(): 
-this function should just change the class of the calling div from 'inactive' to 'active'



*/

let size = 16;
let boardWidth = 960;
let container = document.getElementById("container");
let header = document.getElementById("header");
let button = document.createElement("button");
button.appendChild(document.createTextNode("Create a Custom Board"));
button.addEventListener("click", createCustomBoard);
let boardExists = false;

function createBoard(numRows, parent) {
  let cellWidth = boardWidth / numRows;
  let numCols = numRows;
  let board = [];
  let index = 0;
  let gridRowProp = "repeat(" + numRows + ", " + cellWidth + "px)";
  console.log(gridRowProp);
  container.style.gridTemplateColumns = gridRowProp;
  container.style.gridTemplateRows = gridRowProp;

  // if board exists destroy it
  if (boardExists) {
    // nodelist starts at 1.
    console.log(container.childNodes[container.childNodes.length - 1]);
    let i = container.childNodes.length - 1;
    while (i > 0) {
      let curNode = container.childNodes[i];
      curNode.removeEventListener;
      container.removeChild(curNode);
      console.log(container.childNodes.length);
      i--;
    }
    boardExists = false;
  } else {
    console.log("no board, lets make one");
  }

  //populate board array
  for (var i = 0; i < numRows; i++) {
    for (var j = 0; j < numCols; j++) {
      board.push(createCell(cellWidth, index));
      index++;
    }
  }

  board.forEach((cell) => {
    cell.addEventListener("mouseover", activateCell);
    container.appendChild(cell);
  });
  boardExists = true;
  return;
}

function createCell(width, cellID) {
  const cell = document.createElement("div");
  let widthProp = width + "px";
  cell.id = cellID;
  cell.classList.add("cell", "inactive");
  cell.style.width = widthProp;
  cell.style.height = widthProp;
  cell.style.backgroundColor = "rgba(0,0,0,0)";

  return cell;
}

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  return "rgb(" + red + ", " + blue + ", " + green + ")";
}

function activateCell(e) {
  //  e.target.classList.add("active");
  //  e.target.classList.remove("inactive");
  //  let color = getRandomColor();
  let startColorValue = e.target.style.backgroundColor;
  let colorValueSplit = startColorValue.split(",");
  let transValueSplit = colorValueSplit[colorValueSplit.length - 1].split(")");
  let transValue = Number(transValueSplit[0]);

  if (transValue < 1) {
    console.log(transValue);
    transValue += 0.1;
  }

  let updatedColor = "rgba(0,0,0," + transValue + ")";
  e.target.style.backgroundColor = updatedColor;

  console.log(updatedColor);
  //  e.target.style.background = color;
}

function createCustomBoard() {
  let num = Number(prompt("What Size board would you like?"));

  if (num <= 100 && num > 0) {
    createBoard(num, container);
  } else {
    alert("Please enter a correct value");
  }
}

header.appendChild(button);
createBoard(size, container);
