const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
const size = canvas.width;
const cell_ratio = size / 100; 
const row_length = 100; // Row grid length

function initialise() {
    canvas.width = size; // Creating a square, width and height will both equal to canvas.width
    canvas.height = size; 
    ctx.scale(cell_ratio, cell_ratio);

    // Import configuration settings
    let speed = document.getElementById("speed").value;

    // Creating 2d array
    let grid_array = new Array(row_length); // Creating rows
    for (let row_index = 0; row_index < row_length; row_index++) { // Row length = grid_array.length = column length since it is a square
        let columns = new Array(row_length); // Creating columns within the 2d array
        for (let column_index = 0; column_index < row_length; column_index++) { // Iterate throughout the cells in each column
            columns[row_index] = false; // Default setting, populate each cell of the grid as false, meaning no cell is within it
        }
        grid_array[row_index] = columns; // Insert columns into the rows, constructing the 2d array
    }
    
    // Populate starting cells, default grid
    populateCells()

    function populateCells() {
        for (let row_index = 0; row_index < row_length; row_index++) { // Iterate through the predefined indexes of the 2d array (row_length) and fill in as black on canvas grid.
            for (let column_index = 0; column_index < row_length; column_index++) {
                if (Boolean(Math.round(Math.random()))) { // Populates the grid_array with a 50% chance randomly, via choosing a random number either 0 or 1 and then converting it to boolean.
                    grid_array[column_index][row_index] = true; // Define cell as true for populated
                    ctx.fillRect(column_index, row_index, 1, 1); // Fill cell colour as black
                }
            }
        }
    }

    // Find neighbours

    function findNeighbours() {
        
    };
}

