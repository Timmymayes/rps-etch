/*

functions:

createBoard(size) : 
- create a new board
- delete the current board, including event listeners
- create a new board and add event listeners hooked up to the "activate" function

activate(): 
-this function should just change the class of the calling div from 'inactive' to 'active'



*/

let size = 100;
let boardWidth = 960;
let container = document.getElementById("container");
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

  return cell;
}

function activateCell(e) {
  console.log(e.target);
  e.target.classList.add("active");
  e.target.classList.remove("inactive");
}

createBoard(size, container);
createBoard(size, container);
