// later tasks:
// add music  - Akash's code for ASDF, figure out diffrent music for start and gameover
// transition faster as game progresses???
// how to play guide

//keyboard bindings with tiles - ASDF - same order for all rows
// screen-1: title piano tiles and score on left with main game boxes neeche
// screen-2: pop-out -game over screen with blackout in background with buttons - share ,restart, exit


let continueGame = true;
let gameScore = 0;
let highScore = 0;
let board = []
// moving rows up and out of board using transform tanslate!

function BoardSetup(){
    // generate first 3 rows
    for (let i=0; i<3;i++){
        board.push(generateRow())
    }
    // last row is yellow in setup
    let yellowRow = Array(4).fill('yellow');
    board.push(yellowRow);
    console.log('board:',board)
}

for (let outerIndex = 0; outerIndex < 4; outerIndex++){
    for (let innerIndex = 0; innerIndex < 4; innerIndex++){
        
    }
}


//testing purpose only. do not try this at home
BoardSetup();

let thirdRow = document.querySelector(".third-row");
// thirdRow.addEventListener("keypress"), function(){

// }

// thirdRow.addEventListener("click"), function(){
    
// }

// main function
function playGame(){
    BoardSetup()
    // check if clicked block is white/black, 
    // continuegame = false if white, mark it as red?;
    // else if clicked block is black, generate a new row and add new score
} 


function generateRow() {
    let row = Array(4).fill('white');
    console.log("generated row: ",row);
    let blackPosition = Math.trunc(Math.random()*4);
    console.log("random black position: ",blackPosition);
    row[blackPosition] = "black";
    console.log("row with a random black: ",row);    
    return row;
}

function fillBoard() {
    //to fill board
    for (let i=0; i<4;i++){
        board.push(generateRow())
    }
}






