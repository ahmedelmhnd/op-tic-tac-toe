const gameboard = (function () 
{
    let gameArray = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

const full = function () 
{
    let isFull = true;
    
    for (let i = 0; i < gameArray.length; i++) 
    {
        for (let j = 0; j < gameArray[i].length; j++) 
        {
            if (gameArray[i][j] === "") 
            {
                isFull = false;    
            }
        }
        
    }
    return isFull;
}



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

    return {show, move, check, full};
})();

function createPlayer(name, id) 
{


    return {name, id}
}

const player1 = createPlayer(prompt("player 1, choose a name: "), "x")
const player2 = createPlayer(prompt("player 2, choose a name: "), "o")


const game = (function (player1, player2, gameboard) 
{
    let turn = player1;
    const cells = document.querySelectorAll(".cell");
    const status = document.querySelector(".status");
    let over = false;
    status.textContent = `${player1.name}s turn.`

    cells.forEach(cell => 
    {
        const id = cell.id;
        const parts = id.split("");
        cell.addEventListener("click", (e) =>
        {
            if (!over) 
            {
                if (cell.textContent === "") 
                {
                    gameboard.move(turn.id, parts[0], parts[1])

                    gameboard.show();
                    
                    if (gameboard.check() != null) 
                    {
                        status.textContent = `${gameboard.check()} Won!!!`;
                        over = true;
                    }else if (gameboard.full() === true) 
                    {
                        status.textContent = "DRAW!!!!"
                        over = true;
                    }else if (turn === player1) 
                    {
                        turn = player2;  
                        status.textContent = `${player2.name}s turn.`  
                    } else 
                    {
                        turn = player1;
                        status.textContent = `${player1.name}s turn.`
                    }
                }
                    
            }
        });
    });

    
    

    

    
    return {};
})(player1, player2, gameboard);






