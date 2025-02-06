let board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let playerOneChosenSymbol;
let playerTwoChosenSymbol;
let playerOneName;
let playerTwoName;
let playerOneChosenTurn;
let currentPlayer;

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
        currentPlayer = playerOneName;
    } else {
        currentPlayer = playerTwoName;
    }
}

function executeMove() {
    let currentSymbol = currentPlayer === playerOneName ? playerOneChosenSymbol : playerTwoChosenSymbol;

    while (true) {
        let move = prompt(`${currentPlayer}, enter the number (1-9) of the space you want to mark:`);

        if (move.toLowerCase() === "quit") {
            console.log("Game exited.");
            return;
        }

        move = parseInt(move) - 1;

        if (isNaN(move) || move < 0 || move > 8 || board[move] === "X" || board[move] === "O") {
            alert("Invalid move! Choose an empty space (1-9).");
        } else {
            board[move] = currentSymbol;
            break;
        }
    }

    displayBoard();
    switchTurn();
}

function switchTurn() {
    currentPlayer = currentPlayer === playerOneName ? playerTwoName : playerOneName;
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combo of winningCombinations) {
        const [a, b, c] = combo;

        if (board[a] === board[b] && board[a] === board[c]) {
            let winnerSymbol = board[a];
            let winnerName = (winnerSymbol === playerOneChosenSymbol) ? playerOneName : playerTwoName;

            console.log(`We have a winner! ${winnerName} wins!`);
            return winnerName;
        }
    }

    return null;
}


function playGame() {

    displayRules();
    getPlayerDetails();
    displayBoard();

    while (true) {
        executeMove();
        checkWinner();

    }
}

// TODO: 
// DETECT A WIN/LOSS
// DETECT A DRAW WHEN ALL SPACES FILLED
// DISPLAY RUNNING SCORE
// DISPLAY PLAY AGAIN OPTION 