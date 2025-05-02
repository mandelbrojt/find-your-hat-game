const randomCoordinates = require("./randomCoordinates");
const addGridElement = require("./addGridElement");

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const playerCharacter = "*";

class Field {
    constructor(fieldGrid) {
        this.fieldGrid = fieldGrid;
    }

  print() {
    // Join field rows and add line breaks per row
    console.log(this.fieldGrid.map((row) => row.join(" ")).join("\n"));
  }

  findPlayer() {
    const rowIndex = this.fieldGrid.findIndex((row) => row.includes("*"));
    const colIndex = this.fieldGrid[rowIndex].findIndex((col) => col === "*");
    console.log(
      `Player is located at row ${rowIndex + 1} and column ${colIndex + 1}`
    );
  }

  static createFieldGrid(rows, columns, percentage) {
    // Easier to start from a grid full of field characters
    const playingField = Array.from({ length: rows }, () =>
      Array(columns).fill(fieldCharacter)
    );

    const numHoles = Math.round((rows * columns * percentage) / 100);

    // Element coordinates for easier positioning
    const holeCoordinates = randomCoordinates(numHoles, rows, columns);
    const playerCoordinates = randomCoordinates(1, rows, columns);
    const hatCoordinates = randomCoordinates(1, rows, columns);

    addGridElement(playingField, holeCoordinates, hole);
    addGridElement(playingField, playerCoordinates, playerCharacter);
    addGridElement(playingField, hatCoordinates, hat);

    return playingField;
  }
}

module.exports = Field;
