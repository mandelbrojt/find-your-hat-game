/**
 * Adds an element to a playing gried based on its coordinates.
 * @param {Array.<Array.<String>} field - The 2D array of the playing field.
 * @param {Array.<Array.<number>>} coordinates - The coordinates to place the element.
 * @param {String} character - The string representatin of the element.
 */
function addGridElement(field, coordinates, character) {
    coordinates.forEach(([row, col]) => {
        field[row][col] = character;
    });
}  

module.exports = addGridElement;
