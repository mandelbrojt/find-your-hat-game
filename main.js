// const prompt = require("prompt-sync")({ sigint: true });
const Field = require("./Field");

let direction;

const fieldGrid = Field.createFieldGrid(7, 5, 30);
const field = new Field(fieldGrid);
field.print();

//console.log(field.fieldGrid);

playerCoordinates = field.findElement("*");
console.log(playerCoordinates);

// direction = prompt("\nWhich way? \n⬆️ = w \n➡️ = d \n⬇️ = s \n⬅️ = a \nType your move: ");
