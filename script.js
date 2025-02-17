document.getElementById("start-game").addEventListener("click", openRulesModal);
document.getElementById("rules-ok").addEventListener("click", closeRulesAndOpenSetup);
document.getElementById("confirm-setup").addEventListener("click", setupGame);
document.getElementById("quit-game").addEventListener("click", quitGame);

document.querySelectorAll(".cell").forEach(cell => {
    cell.addEventListener("click", handleCellClick);
});

let firstTime = true;
let currentPlayer = null;
let player1Score = 0;
let player2Score = 0;

function openRulesModal() {
    if (firstTime) {
        document.getElementById("rules-modal").style.display = "flex";
        document.getElementById("start-game").style.display = "none";
    } else {
        openPlayerSetup();
    }
}

function closeRulesAndOpenSetup() {
    document.getElementById("rules-modal").style.display = "none";
    firstTime = false;
    openPlayerSetup();
}

function openPlayerSetup() {
    document.getElementById("player-setup-modal").style.display = "flex";
}

function setupGame() {

    const player1Name = document.getElementById("player1-name").value.trim();
    const player2Name = document.getElementById("player2-name").value.trim();

    if (!player1Name || !player2Name) {
        alert("Both players must enter a name!");
        return;
    }

    const player1Symbol = document.getElementById("player1-symbol");
    const player2Symbol = player1Symbol === "X" ? "O" : "X";

    const firstTurn = document.getElementById("first-turn").value;

    currentPlayer = firstTurn === "player1" ? player1Name : player2Name;

    window.players = {
        player1: { name: player1Name, symbol: player1Symbol },
        player2: { name: player2Name, symbol: player2Symbol }
    };

    document.getElementById("player-setup-modal").style.display = "none";

    gameOver = false;
    document.querySelectorAll(".cell").forEach(cell => cell.textContent = "");

    alert(`${currentPlayer} goes first!`)

}

function quitGame() {
    if (confirm("Are you sure you want to quit the game?")) {
        document.querySelectorAll(".cell").forEach(cell => cell.textContent = "");

        gameOver = true;
        currentPlayer = null;
        window.players = null;
        player1Score = 0;
        player2Score = 0;

        document.getElementById("player-setup-modal").style.display = "flex";

        alert("You have quit the game. Start a new game by entering the players' details.");
    }
}

function switchTurn() {
    currentPlayer = currentPlayer === windows.players.player1.name 
    ? windows.players.player1.name
    : windows.players.player2.name;

    document.getElementById("turn-indicator").textContent = `It's ${currentPlayer}'s turn!`;
}
   
        
function handleCellClick(event) {
    if (gameOver) return;

    const clickedCell = event.target;

    if (clickedCell.textContent !== "") {
        alert("Cell is already taken! Choose another.");
        return;
    }

    const currentSymbol = currentPlayer === windows.players.player1.name 
    ? windows.players.player1.symbol
    : windows.players.player2.symbol;

    clickedCell.textContent = currentSymbol;

    if (checkWinner()) {
        return;
    }

    switchTurn();
}

// let board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
// let playerOneChosenSymbol;
// let playerTwoChosenSymbol;
// let playerOneName;
// let playerTwoName;
// let playerOneChosenTurn;
// let currentPlayer;
// let gameOver = false;
// let quitGame = false;
// let playerOneScore = 0;
// let playerTwoScore = 0;
// let targetScore = 0;


// function displayBoard() {
//     console.clear();
//     console.log(` ${board[0]} | ${board[1]} | ${board[2]} `);
//     console.log("---+---+---");
//     console.log(` ${board[3]} | ${board[4]} | ${board[5]} `);
//     console.log("---+---+---");
//     console.log(` ${board[6]} | ${board[7]} | ${board[8]} `);
// }

// function displayRules() {
//     console.log("Welcome to Tic Tac Toe!")
//     console.log("The goal is to get 3 Xs or Os in a row or diagonally and beat your opponent!")
//     console.log("Enter 'quit' at any point to quit the game. Good luck!")
// }

// function checkQuit(input) {
//     if (input && input.toLowerCase() === "quit") {
//         gameOver = true;
//         quitGame = true;
//         return true;
//     }
//     return false;
// }

// function getTargetScore() {
//         while (true) {
//             targetScore = prompt("Enter a target score (0 for unlimited games):");
//             if (checkQuit(targetScore)) return;
    
//             targetScore = parseInt(targetScore);
    
//             if (!isNaN(targetScore) && targetScore >= 0) {
//                 console.log(`Target score set to ${targetScore === 0 ? "No limit" : targetScore}.`);
//                 return;
//             }
    
//             alert("Invalid input! Enter a number 0 or higher.")
//         }
    
//     }

// function getPlayerDetails() {
//     playerOneName = prompt("Player one, please enter your name.");
//     if (checkQuit(playerOneName)) return;
//     playerTwoName = prompt("Player two, please enter your name.");
//     if (checkQuit(playerTwoName)) return;

//     while (true) {
//         playerOneChosenSymbol = prompt(`${playerOneName}, would you prefer to use X or O?`).toUpperCase();
//         if (checkQuit(playerOneChosenSymbol)) return;
        
//         if (playerOneChosenSymbol === "X" || playerOneChosenSymbol === "O") {
//             playerTwoChosenSymbol = playerOneChosenSymbol === "X" ? "O" : "X";
//             break;
//         }
    
//         alert("Invalid choice! Please enter X or O.");
//     }

//     console.log(`${playerOneName}, you have chosen ${playerOneChosenSymbol}.`);
//     console.log(`${playerTwoName}, you will use ${playerTwoChosenSymbol}.`);

//     while (true) {
//         playerOneChosenTurn = prompt(`${playerOneName}, would you like to go first? (y/n)`).toLowerCase();
//         if (checkQuit(playerOneChosenTurn)) return;
        
//         if (playerOneChosenTurn === "y" || playerOneChosenTurn === "n") {
//             break;
//         }
    
//         alert("Invalid choice! Please enter 'y' or 'n'.");
//     }

//     if (playerOneChosenTurn === "y") {
//         currentPlayer = playerOneName;
//     } else {
//         currentPlayer = playerTwoName;
//     }

//     return
// }

// function executeMove() {
//     if (gameOver) {
//         console.log("The game is over! Start a new game to play again.");
//         return;
//     }

//     let currentSymbol = currentPlayer === playerOneName ? playerOneChosenSymbol : playerTwoChosenSymbol;

//     while (true) {
//         let move = prompt(`${currentPlayer}, enter the number (1-9) of the space you want to mark:`);

//         if (checkQuit(move)) return;

//         move = parseInt(move) - 1;

//         if (isNaN(move) || move < 0 || move > 8 || board[move] === "X" || board[move] === "O") {
//             alert("Invalid move! Choose an empty space (1-9).");
//         } else {
//             board[move] = currentSymbol;
//             break;
//         }
//     }

//     displayBoard();

//     let winner = checkWinner();
//     if (winner) {
//         return;
//     }

//         console.log(`New round starting... ${currentPlayer} will go first.`);
//         gameOver = false;
//         displayBoard();
    
//     if (board.every(space => space === "X" || space === "O")) {
//         console.log("It's a draw! No more moves left.");
//         gameOver = true;
//         return;
//     }

//     switchTurn();
// }


// function switchTurn() {
//     currentPlayer = currentPlayer === playerOneName ? playerTwoName : playerOneName;
// }

// function checkWinner() {
//     const winningCombinations = [
//         [0, 1, 2], [3, 4, 5], [6, 7, 8], 
//         [0, 3, 6], [1, 4, 7], [2, 5, 8], 
//         [0, 4, 8], [2, 4, 6]
//     ];

//     for (let combo of winningCombinations) {
//         const [a, b, c] = combo;

//         if (board[a] === board[b] && board[a] === board[c]) {
//             let winnerSymbol = board[a];
//             let winnerName = (winnerSymbol === playerOneChosenSymbol) ? playerOneName : playerTwoName;

//             if (winnerName === playerOneName) {
//                 playerOneScore++;
//             } else {
//                 playerTwoScore++;
//             }

//             console.log(`🎉 Congratulations, ${winnerName}! You won this round!`);
//             console.log(`Current score = ${playerOneName}: ${playerOneScore} - ${playerTwoName}: ${playerTwoScore}`);

//             if (targetScore > 0 && (playerOneScore >= targetScore || playerTwoScore >= targetScore)) {
//                 console.log(`🏆 ${winnerName} has reached the target score of ${targetScore}!`);
//                 console.log("Game over. Thanks for playing!");
//                 gameOver = true;
//                 quitGame = true;
//                 return winnerName;
//             }

//             let playNext = prompt("Press 'Enter' to start the next round.");
//             if (checkQuit(playNext)) return;

//             resetBoard();
//             return winnerName;
//         }
//     }

//     return null;
// }

// function resetBoard() {
//     board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
//     gameOver = false;
//     currentPlayer = currentPlayer === playerOneName ? playerTwoName : playerOneName;
//     displayBoard();
//     console.log(`New round starting... ${currentPlayer} will go first.`);
// }


// function playGame() {
//     while (true) {
//         if (targetScore > 0 && (playerOneScore >= targetScore || playerTwoScore >= targetScore)) {
//             console.log("🏁 Target score reached! Game over.");
//             return;
//         }
    
//         gameOver = false;
//         board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    
//         displayRules();

//         if (!playerOneName || !playerTwoName) { 
//             getPlayerDetails();
//             if (gameOver || quitGame) return;
//         } else { 
//             playerOneChosenTurn = playerOneChosenTurn === "y" ? "n" : "y";
//         }

//         if (targetScore === 0) {
//             getTargetScore();
//             if (gameOver || quitGame) return;
//         }
        
//         console.log(`\nCurrent score - ${playerOneName}: ${playerOneScore} - ${playerTwoName}: ${playerTwoScore}`);

//         currentPlayer = (playerOneChosenTurn === "y") ? playerOneName : playerTwoName;

//         displayBoard();

//         while (!gameOver) {
//             executeMove();
//         }

//         if (quitGame) {
//             console.log("Game exited.");
//             return;
//         }

//         if (targetScore === 0) { 
//             let playAgain = prompt("Please enter 'y' to play again, or anything else to quit.").toLowerCase();
//             if (playAgain !== "y") {
//                 console.log("Thanks for playing! Goodbye.");
//                 return;
//             }
//         }

//         displayBoard();
//         console.log(`New game! This time, ${currentPlayer} will go first.`);
//     }
// }