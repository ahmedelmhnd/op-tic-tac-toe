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
            const cell = document.getElementById(`${i}${j}`);
            cell.textContent = gameArray[i][j];
        }
        console.log("");
    }
}
    
const check = function () 
{
    let winner = null;
    
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

function createPlayer(name, id) 
{


    return {name, id}
}

const player1 = createPlayer("p1", "x")
const player2 = createPlayer("p2", "o")


const game = (function (player1, player2, gameboard) 
{
    let turn = player1;

   /* while (gameboard.check() === null) 
    {
        let row = prompt("rows:");
        let col = prompt("cols:");
        gameboard.move(turn.id, row, col);
        gameboard.show();
        
        if (turn === player1) 
        {
            turn = player2;    
        } else 
        {
            turn = player1;    
        }
    }*/

    

    
    return {};
})(player1, player2, gameboard);


const cells = document.querySelectorAll(".cell")

cells.forEach(cell => 
{
    const id = cell.id;
    const parts = id.split("");
    cell.addEventListener("click", (e) =>
    {
        gameboard.move("x", parts[0], parts[1])
        gameboard.show();
    });
});

