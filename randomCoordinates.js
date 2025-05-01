/**
 * Creates a 2D array of random coordinates based on the rows and columns of a target array.
 * @param {Number} numCoordinates - The number of coordinates to generate.
 * @param {Number} rows - The number of rows in the target array.
 * @param {Number} column - The number of columns in the target array.
 */
function randomCoordinates(numCoordinates, rows, columns) {
    return Array.from({ length: numCoordinates }, () => [
      Math.floor(Math.random() * rows), // Random row
      Math.floor(Math.random() * columns), // Random column
    ]);
}

module.exports = randomCoordinates;
