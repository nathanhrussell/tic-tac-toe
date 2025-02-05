// START GAME COMMAND
// DISPLAY RULES (INFORM PLAYER THEY CAN ENTER "QUIT" AT ANY TIME)
// PROMPT: CHOOSE X OR O (WITH INVALID INPUT CHECK)
// PROMPT: WOULD YOU LIKE TO GO FIRST? (Y/N WITH INVALID INPUT CHECK)
// INITIALISE EMPTY GAME BOARD

// WHILE GAME IS NOT OVER:
//     DISPLAY GAME BOARD
//     IF IT’S PLAYER’S TURN:
//         PROMPT PLAYER FOR MOVE (VALIDATE INPUT: ENSURE SPACE IS FREE)
//     ELSE:
//         COMPUTER MAKES MOVE
//     CHECK IF THERE IS A WINNER OR A DRAW
//     SWITCH TURNS

// DISPLAY FINAL GAME BOARD
// DISPLAY RESULT (WIN/LOSS/DRAW)
// DISPLAY RUNNING SCORE
// PROMPT: PLAY AGAIN? (IF YES, RESET BOARD AND START OVER)

let board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let playerOneChosenSymbol;
let playerTwoChosenSymbol;
let playerOneName;
let playerTwoName;
let playerOneChosenTurn;

function displayBoard() {
    console.clear();
    console.log(` ${board[0]} | ${board[1]} | ${board[2]} `);
    console.log("---+---+---");
    console.log(` ${board[3]} | ${board[4]} | ${board[5]} `);
    console.log("---+---+---");
    console.log(` ${board[6]} | ${board[7]} | ${board[8]} `);
}

function displayRules() {
    console.log("Welcome to Tic Tac Toe!")
    console.log("The goal is to get 3 Xs or Os in a row or diagonally and beat your opponent!")
    console.log("Enter 'quit' at any point to quit the game. Good luck!")
}

function getPlayerDetails() {
    playerOneName = prompt("Player one, please enter your name.");
    playerTwoName = prompt("Player two, please enter your name.");

    while (true) {
        playerOneChosenSymbol = prompt(`${playerOneName}, would you prefer to use X or O?`).toUpperCase();
    
        if (playerOneChosenSymbol === "X" || playerOneChosenSymbol === "O") {
            playerTwoChosenSymbol = playerOneChosenSymbol === "X" ? "O" : "X";
            break;
        }
    
        alert("Invalid choice! Please enter X or O.");
    }

    console.log(`${playerOneName}, you have chosen ${playerOneChosenSymbol}.`);
    console.log(`${playerTwoName}, you will use ${playerTwoChosenSymbol}.`);

    while (true) {
        playerOneChosenTurn = prompt(`${playerOneName}, would you like to go first? (y/n)`).toLowerCase();
    
        if (playerOneChosenTurn === "y" || playerOneChosenTurn === "n") {
            break;
        }
    
        alert("Invalid choice! Please enter 'y' or 'n'.");
}

    if (playerOneChosenTurn === "y") {
        console.log(`${playerOneName}, you have chosen to go first!`);
    } else {
        console.log(`${playerOneName}, you have chosen to go second!`);
    }
}


function playGame() {

    displayRules();
    getPlayerDetails();






}