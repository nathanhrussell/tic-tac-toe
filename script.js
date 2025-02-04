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

function displayBoard() {
    console.clear();
    console.log(` ${board[0]} | ${board[1]} | ${board[2]} `);
    console.log("---+---+---");
    console.log(` ${board[3]} | ${board[4]} | ${board[5]} `);
    console.log("---+---+---");
    console.log(` ${board[6]} | ${board[7]} | ${board[8]} `);
}

function playGame() {
    // GAME CODE GOES HERE
}

function displayRules() {
    console.log("Welcome to Tic Tac Toe!")
    console.log("The goal is to get 3 Xs or Os in a row or diagonally and beat your opponent!")
    console.log("Enter 'quit' at any point to quit the game. Good luck!")
}