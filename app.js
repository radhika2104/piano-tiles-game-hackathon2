// later tasks:
// add music  - Akash's code for ASDF, figure out diffrent music for start and gameover
// transition faster as game progresses???
// how to play guide

//keyboard bindings with tiles - ASDF - same order for all rows
// screen-1: title piano tiles and score on left with main game boxes neeche
// screen-2: pop-out -game over screen with blackout in background with buttons - share ,restart, exit

let playingArea = document.querySelector(".playing-area");
let playing = true;
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


// function fillBoard(){
//     for (let outerIndex = 0; outerIndex < 4; outerIndex++){
//         let currentRow = document.createElement('div');
//         for (let innerIndex = 0; innerIndex < 4; innerIndex++){
//             let currentCell = document.createElement('span');
//             currentCell.style.height = '20px';
//             currentCell.style.width = '20px';
//             if (board[outerIndex][innerIndex] == 'white'){
//                 currentCell.style.backgroundColor = "white"
//             } else if (board[outerIndex][innerIndex] == 'black'){
//                 currentCell.style.backgroundColor = "black"
//             } else {
//                 currentCell.style.backgroundColor = "yellow"
//             }
//             currentRow.appendChild(currentCell);
//         }
//         playingArea.appendChild(currentRow);
//     }
// }


                        //testing purpose only. do not try this at home

// fillBoard();
// makeBoardDisplay();


function makeBoardDisplay() {
    BoardSetup();
    // let firstRow = document.querySelector(".first-row");
    // let secondRow = document.querySelector(".second-row");
    // let thirdRow = document.querySelector(".third-row");
    // let fourthRow = document.querySelector(".fourth-row");
    let rows = document.querySelectorAll(".rows")
    // let boardRows = [firstRow,secondRow,thirdRow,fourthRow]
    for (let i = 0; i < 4; i++){
        
            console.log("should be html element: ",rows[i]);
            let spans = rows[i].querySelectorAll('span');
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
}





// let thirdRow = document.querySelector(".third-row");
// thirdRow.addEventListener("keypress"), function(){

// }

// thirdRow.addEventListener("click"), function(){
    
// }


    // check if clicked block is white/black, 
    // continuegame = false if white, mark it as red?;
    // else if clicked block is black, generate a new row and add new score

function removeLastRowFromPlayingArea(){

    let divs = playingArea.querySelectorAll('div');
    divs[divs.length - 1].remove();
}

function insertNewRowInPlayingArea(newRow){
    let newRowDiv = document.createElement('div');
    newRowDiv.classList.add('rows');
    newRowDiv.innerHTML = '<span class="A">A</span><span class="S">S</span><span class="D">D</span><span class="F">F</span>';
    //appends element to the beginning of playingArea
    playingArea.prepend(newRowDiv);   
    let spans = newRowDiv.querySelectorAll('span');
    console.log("span hahaha:",spans)
    for(let i=0; i<4;i++){
        spans[i].style.backgroundColor = newRow[i];
        spans[i].style.color = 'white';
        // if(newRow[i] == 'black'){
        //     spans[i].style.color = 'white';
        // }
        // if(newRow[i] == 'white'){
        //     spans[i].style.color = 'white';
        // }
        // console.log("span[i]:", spans[i])
        // if(newRow[i] == 'black'){
        //     console.log("spans[i].style object:",spans[i].style)
            
        //     spans[i].style.backgroundColor = 'black';
        // } else {
        //     // spans[i].style.backgroundColor = 'white';
        // }
    }

    let rows = document.querySelectorAll(".rows")
    //removing event from last row
    let lastRow = rows[rows.length-1];
    lastRow.removeEventListener('click', currentRowEventListen);
    let secondLastRow = rows[rows.length-2]
    secondLastRow.addEventListener('click', currentRowEventListen);

}

//listening to current row
function currentRowEventListen(event){
    // LOGIC left for any row!
    let element = event.target;
    if (element.style.backgroundColor == 'black'){
        // board.push(); 
        var newRow = generateRow()
        console.log('added new row is:', newRow)
        // adding new row
        board.splice(0, 0, newRow)
        // deleting new row
        board.pop();

        //playing area - 1. remove last row 
        // 2. insert new Row

        removeLastRowFromPlayingArea();
        console.log("should remove last row")
        insertNewRowInPlayingArea(newRow);

        console.log('board after black click:',board)
    } else if (element.style.backgroundColor == 'white') {
        continueGame = false;
        console.log("game quit message inside generateNewBoard")
    }

}

function clickAndGenerateNewBoard(gameCounter){
        let rows = document.querySelectorAll(".rows")
        let secondLastRow = rows[rows.length-2]
        // let lastRow = rows[rows.length-1]
        // document.querySelector(".playing-area:lastchild")

        console.log("secondlastrow::",secondLastRow);
        // console.log("lastrow::",lastRow);
        // if (gameCounter == 1) {
        //     rowListener = secondLastRow;
        // } else {
        //     rowListener = lastRow;
        // }
        secondLastRow.addEventListener('click', currentRowEventListen );
}

// function changeBoardDisplay() {
//     let firstRow = document.querySelector(".first-row");
//     let secondRow = document.querySelector(".second-row");
//     let thirdRow = document.querySelector(".third-row");
//     let fourthRow = document.querySelector(".fourth-row");
//     let boardRows = [firstRow,secondRow,thirdRow,fourthRow]
//     for (let i = 0; i < 4; i++){
        
//             console.log("should be html element: ",boardRows[i]);
//             let spans = boardRows[i].querySelectorAll('span');
//             console.log("spans in a row: ",spans);
//             for (let j = 0; j<4;  j++){
//                 spans[j].style.backgroundColor = board[i][j]
//                 if(board[i][j] == 'black'){
//                     spans[j].style.color = 'white';
//                 }
//                 if(board[i][j] == 'white'){
//                     spans[j].style.color = 'white';
//                 }
//                 if(board[i][j] == 'yellow'){
//                     spans[j].style.color = 'yellow';
//                 }
//                 // console.log('current row and current span: ',boardRows[i],spans[j])
//                 // console.log('current span bg color: ',spans[j].style.backgroundColor)
//                 console.log('board[i][j] value ',board[i][j])
//             }
//             // [span.A, span.S, span.D, span.F]
//     }

// }

// main function
function playGame(){
    makeBoardDisplay()
    let gameCounter = 0;
    while (true){
        gameCounter++;
        clickAndGenerateNewBoard(gameCounter);
        if (gameCounter == 4) {
            break;
        }
    }
    
    // if (continueGame == false){
    //     console.log('quit game')
    // } else {
    //     changeBoardDisplay()
    // }
    
    // document.addEventListener('keypress', function(){
        
    // })

    // check if clicked block is white/black, 
    // continuegame = false if white, mark it as red?;
    // else if clicked block is black, generate a new row and add new score
} 

playGame()


function generateRow() {
    let row = Array(4).fill('white');
    // console.log("generated row: ",row);
    let blackPosition = Math.trunc(Math.random()*4);
    // console.log("random black position: ",blackPosition);
    row[blackPosition] = "black";
    // console.log("row with a random black: ",row);    
    return row;
}

// function fillBoard() {
//     //to fill board
//     for (let i=0; i<4;i++){
//         board.push(generateRow())
//     }
// }






