$(function () {
    $("#tabs").tabs();
    $('#mult-form').validate({
        rules: { // rules that specify the range and type of input from the user.
            "min_x": {
                required: true,
                number: true,
                range: [-50, 50]
            },
            "max_x": {
                required: true,
                number: true,
                range: [-50, 50]
            },
            "min_y": {
                required: true,
                number: true,
                range: [-50, 50]
            },
            "max_y": {
                required: true,
                number: true,
                range: [-50, 50]
            }
        },
        messages: { // messages that tell user what part of their input is incorrect.
          "min_x": {
            required: "Please enter a value for min_x",
            number: "Please enter a valid number",
            range: "Value must be between -50 and 50",
          },
          "max_x": {
            required: "Please enter a value for max_x",
            number: "Please enter a valid number",
            range: "Value must be between -50 and 50"
          },
          "min_y": {
            required: "Please enter a value for min_y",
            number: "Please enter a valid number",
            range: "Value must be between -50 and 50"
          },
          "max_y": {
            required: "Please enter a value for max_y",
            number: "Please enter a valid number",
            range: "Value must be between -50 and 50"
          }
        }
    })
  })

    function Submit() {
      if (!$('#mult-form').valid()) {
          return; // Exit if form is invalid
      }
    let min_x = document.querySelector(".min-x input").value; // gets value entered in in min-x input box
    
    let min_y = document.querySelector(".min-y input").value; // gets value entered in in max-x input box

    let max_x = document.querySelector(".max-x input").value; // gets value entered in in min-y input box

    let max_y = document.querySelector(".max-y input").value; // gets value entered in in max-y input box
    
    multiplicationTable(min_x, max_x, min_y, max_y); // calls the function that creates the table and handles the multiplication

}

function multiplicationTable(min_x, max_x, min_y, max_y) { // start of the multiplication table which takes the values collected in input boxes
    const tableContainer = document.getElementById('tableContainer'); // gets the element id from the document, in this case tableContainer in order to add to it
    tableContainer.innerHTML = '';
    const table = document.createElement('table'); // creates a table element
    // turns these four numbers into integers
    min_x = parseInt(min_x);
    max_x = parseInt(max_x);
    min_y = parseInt(min_y);
    max_y = parseInt(max_y);
    
    let headerRow = document.createElement('tr'); // creates the table row which 
    // Create an empty cell to align the top left corner of the table
    let emptyCell = document.createElement('th'); 
    headerRow.appendChild(emptyCell); // Append the empty cell to the header row

    // Loop through values from min_x to max_x to create column headers
    for (let x = min_x; x <= max_x; x++) {
        let row = document.createElement("th"); // Create a header cell for each x value
        row.textContent = x; // Set the cell's text to the current x value
        headerRow.appendChild(row); // Append the cell to the header row
    }
    table.appendChild(headerRow); // Add the completed header row to the table

// Loop through values from min_y to max_y to create rows for each y value
    for (let y = min_y; y <= max_y; y++) {
        let row = document.createElement("tr"); // Create a new table row for the current y value
        let newLine = document.createElement("th"); // Create a header cell for the row
        newLine.textContent = y; // Set the row header cell's text to the current y value
        row.appendChild(newLine); // Add the row header cell to the row

        // Loop through values from min_x to max_x to create data cells for each x * y
        for (let x = min_x; x <= max_x; x++) {
            let content = document.createElement("td"); // Create a new table data cell
            content.textContent = x * y; // Set the cell's text to the product of x and y
            row.appendChild(content); // Append the cell to the current row
        }
        table.appendChild(row); // Append the completed row to the table
    }
    tableContainer.appendChild(table); // Add the fully populated table to the table container
}