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

  /**
   * Find the first occurrence of an element in the grid.
   * @param {String} element - The element you want to locate in the grid. 
   */
  getElementCoordinates(element) {
    try {
      const rowIndex = this.fieldGrid.findIndex((row) => row.includes(element));
      if (rowIndex === -1) {
        throw new Error("Element not found in any row.");
      }
  
      const colIndex = this.fieldGrid[rowIndex].findIndex((col) => col === element);
      if (colIndex === -1) {
        throw new Error("Element not found in the specified row.");
      }
  
      console.log(`Element '${element}' is located at row ${rowIndex + 1} and column ${colIndex + 1}`);
      return { rowIndex, colIndex };
    } catch (error) {
      console.log(`Error: ${error.message}`);
      return null;
    }
  }
  
  movePlayer(direction, playerPosition) {
    let latestPlayerRow, latestPlayerCol;
    if (direction === "w") {
      // move up: row index is decreased by 1
      try {
        latestPlayerRow = playerPosition.rowIndex - 1;
        latestPlayerCol = playerPosition.colIndex;
        this.fieldGrid[latestPlayerRow][latestPlayerCol] = "*";
      } catch (error) {
        throw new Error("Player is out of bound. Try another movement.")
      }
    } else if (direction === "d") {
      // move right: column index is increased by 1
      try {
        latestPlayerRow = playerPosition.rowIndex;
        latestPlayerCol = playerPosition.colIndex + 1;
        this.fieldGrid[latestPlayerRow][latestPlayerCol] = "*";
      } catch (error) {
        throw new Error("Player is out of bound. Try another movement.")
      }
    } else if (direction === "s") {
      // move down: row index is increased by 1
      try {
        latestPlayerRow = playerPosition.rowIndex + 1;
        latestPlayerCol = playerPosition.colIndex;
        this.fieldGrid[latestPlayerRow][latestPlayerCol] = "*";
      } catch (error) {
        throw new Error("Player is out of bound. Try another movement.")
      }
    } else if (direction === "a") {
      // move left: column index is decreased by 1
      try {
        latestPlayerRow = playerPosition.rowIndex;
        latestPlayerCol = playerPosition.colIndex - 1;
        this.fieldGrid[latestPlayerRow][latestPlayerCol] = "*";
      } catch (error) {
        throw new Error("Player is out of bound. Try another movement.")
      }
    } else {

    }
  }
  /**
   * Generates a field grid with specified dimensions and populates it with field characters, holes, a player, and a hat.
   * 
   * The grid is initially filled with field characters. A specified percentage of the grid is then replaced with holes.
   * Additionally, a single player character and a single hat character are placed at random positions on the grid.
   * 
   * @param {Number} rows - The number of rows in the field grid.
   * @param {Number} columns - The number of columns in the field grid.
   * @param {Number} percentage - The percentage of the grid to be filled with holes.
   * @returns {Array<Array<String>>} A 2D array representing the field grid.
   */
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
