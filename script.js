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
// PROMPT: PLAY AGAIN? (IF YES, RESET BOARD AND START OVER)

let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

function displayBoard() {
    console.clear();
    console.log(" " + board[0] + " | " + board[1] + " | " + board[2] + " ");
    console.log("---+---+---");
    console.log(" " + board[3] + " | " + board[4] + " | " + board[5] + " ");
    console.log("---+---+---");
    console.log(" " + board[6] + " | " + board[7] + " | " + board[8] + " ");
}