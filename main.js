// const prompt = require("prompt-sync")({ sigint: true });
const Field = require("./Field");

let direction;

const playingField = Field.generateField(7, 5, 30);
const field = new Field(playingField);
field.print();

//console.log(field.fieldGrid);

field.findPlayer();

// direction = prompt("\nWhich way? \n⬆️ = w \n➡️ = d \n⬇️ = s \n⬅️ = a \nType your move: ");
