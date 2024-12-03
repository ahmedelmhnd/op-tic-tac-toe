const gameboard = (function () 
{
    let gameArray = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

const move = (id, row, col) => gameArray[row][col] = id;

const show = function () 
{
    for (let i = 0; i < gameArray.length; i++) 
    {
        for (let j = 0; j < gameArray[i].length; j++) 
        {
            console.log(gameArray[i][j] + " ");
        }
        console.log("");
    }
}
    
const check = function () 
{
    let winner;
    
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (gameArray[i][0] === gameArray[i][1] && gameArray[i][1] === gameArray[i][2] && gameArray[i][0] !== "") {
            winner = gameArray[i][0];
        }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
        if (gameArray[0][i] === gameArray[1][i] && gameArray[1][i] === gameArray[2][i] && gameArray[0][i] !== "") {
            winner = gameArray[0][i];
        }
    }

    // Check diagonals
    if (gameArray[0][0] === gameArray[1][1] && gameArray[1][1] === gameArray[2][2] && gameArray[0][0] !== "") {
        winner = gameArray[0][0]
    }

    if (gameArray[0][2] === gameArray[1][1] && gameArray[1][1] === gameArray[2][0] && gameArray[0][2] !== "") {
        winner = gameArray[0][2];
    }
    
    return winner;
}

    return {show, move, check};
})();

function createPlayer() 
{
    
}

const game = (function (player1, player2, gameboard) 
{
    gameboard.move("x", 0, 0)
    gameboard.move("x", 0, 1)
    gameboard.move("x", 0, 2)

    
    return {};
})("", "", gameboard);

gameboard.show();
console.log(gameboard.check());

