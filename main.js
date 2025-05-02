// const prompt = require("prompt-sync")({ sigint: true });
const Field = require("./Field");

const fieldGrid = Field.createFieldGrid(7, 5, 30);
const field = new Field(fieldGrid);

field.print();

console.log(field.fieldGrid);

playerCoordinates = field.getElementCoordinates("*");

let direction;
// direction = prompt("\nWhich way? \n⬆️ = w \n➡️ = d \n⬇️ = s \n⬅️ = a \nType your move: ");
