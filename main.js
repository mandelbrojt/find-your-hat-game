const prompt = require("prompt-sync")({ sigint: true });
const Field = require("./Field");

const fieldGrid = Field.createFieldGrid(7, 5, 30);
const field = new Field(fieldGrid);

let playerPosition = field.getElementCoordinates("*");

let currentPlayerRow = playerPosition.rowIndex;
let currentPlayerCol = playerPosition.colIndex;
let isAlive = true;
let hasWon = false;

while (isAlive && !hasWon) {
    field.print();
    let direction = prompt("Which way? \n⬆️ = w \n➡️ = d \n⬇️ = s \n⬅️ = a \nType your move: ");
    
    // Update the player's position
    ({currentPlayerRow, currentPlayerCol, isAlive, hasWon} = field.movePlayer(direction, { rowIndex: currentPlayerRow, colIndex: currentPlayerCol }));
    
    // Print the updated grid
    field.print();
}

// if (!isAlive) {
//     console.log("Game Over! You fell into a hole or went out of bounds.");
// } else if (hasWon) {
//     console.log("Congratulations! You found the hat.");
// }
