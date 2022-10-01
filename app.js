// later tasks:
// add music  - Akash's code for ASDF, figure out diffrent music for start and gameover
// transition faster as game progresses???
// how to play guide

//keyboard bindings with tiles - ASDF - same order for all rows
// screen-1: title piano tiles and score on left with main game boxes neeche
// screen-2: pop-out -game over screen with blackout in background with buttons - share ,restart, exit

let playingArea = document.querySelector(".playing-area");
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


function fillBoard(){
    for (let outerIndex = 0; outerIndex < 4; outerIndex++){
        let currentRow = document.createElement('div');
        for (let innerIndex = 0; innerIndex < 4; innerIndex++){
            let currentCell = document.createElement('span');
            currentCell.style.height = '20px';
            currentCell.style.width = '20px';
            if (board[outerIndex][innerIndex] == 'white'){
                currentCell.style.backgroundColor = "white"
            } else if (board[outerIndex][innerIndex] == 'black'){
                currentCell.style.backgroundColor = "black"
            } else {
                currentCell.style.backgroundColor = "yellow"
            }
            currentRow.appendChild(currentCell);
        }
        playingArea.appendChild(currentRow);
    }
}


                        //testing purpose only. do not try this at home

// fillBoard();
makeBoardDisplay();


function makeBoardDisplay() {
    BoardSetup();
    let firstRow = document.querySelector(".first-row");
    let secondRow = document.querySelector(".second-row");
    let thirdRow = document.querySelector(".third-row");
    let fourthRow = document.querySelector(".fourth-row");
    let boardRows = [firstRow,secondRow,thirdRow,fourthRow]
    for (let i = 0; i < 4; i++){
        
            console.log("should be html element: ",boardRows[i]);
            let spans = boardRows[i].querySelectorAll('span');
            console.log("spans in a row: ",spans);
            for (let j = 0; j<4;  j++){
                spans[j].style.backgroundColor = board[i][j]
                if(board[i][j] == 'black'){
                    spans[j].style.color = 'white';
                }
                if(board[i][j] == 'white'){
                    spans[j].style.color = 'white';
                }
                if(board[i][j] == 'yellow'){
                    spans[j].style.color = 'yellow';
                }
                // console.log('current row and current span: ',boardRows[i],spans[j])
                // console.log('current span bg color: ',spans[j].style.backgroundColor)
                // console.log('board[i][j] value ',board[i][j])
            }
            // [span.A, span.S, span.D, span.F]
 
    }
    
    // for (let i = 0; i < 4; outerIndex++){
    //     // rows[i].addEventListener("keydown",function(event){
            
            
    //     // })
    // }
    // for (let i = 0; i < 4; outerIndex++){
    //     // rows[i].addEventListener("click",function(){
            
    //     // })
    // }
}





// let thirdRow = document.querySelector(".third-row");
// thirdRow.addEventListener("keypress"), function(){

// }

// thirdRow.addEventListener("click"), function(){
    
// }

// main function
function playGame(){
    // BoardSetup()

    // check if clicked block is white/black, 
    // continuegame = false if white, mark it as red?;
    // else if clicked block is black, generate a new row and add new score
} 


function generateRow() {
    let row = Array(4).fill('white');
    // console.log("generated row: ",row);
    let blackPosition = Math.trunc(Math.random()*4);
    // console.log("random black position: ",blackPosition);
    row[blackPosition] = "black";
    // console.log("row with a random black: ",row);    
    return row;
}

function fillBoard() {
    //to fill board
    for (let i=0; i<4;i++){
        board.push(generateRow())
    }
}






