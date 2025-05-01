# Project Notes

## Field Generation
What should be the logic for creating a field grid?

A field grid contains:
- Multiple holes (O)
- A single hat (^)
- The player's position and path (*)
- The field itself (░)

Parameters for generating a field grid:
- The number of rows of the grid
- The number of columns of the grid
- The percentage of the fields that are covered by holes.

Instructions for generating a field:
[X] Use the number of rows and columns to create the grid space.
[X] Populate all the grid space with field characters.
[X] Compute de number of holes using the percentage.
[X] Randomly place holes, hat and player.

Questions for playing mechanism:
- How can I know the location of the player?
- How can I know the player is near the edge of the field?
- How can I know if the player gets into a hole?