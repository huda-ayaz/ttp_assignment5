let tbl = document.getElementById("table");

// Add rows to the grid

function addRow() {
    let r = tbl.insertRow()
    for (let i = 0; i < table.rows[0].cells.length; i++) {
        r.insertCell();
}
}

// Add columns to the grid

function addCol() {
    for (i = 0; i < tbl.rows.length; i++) {
       tbl.rows[i].insertCell();
    }
}

// Delete row from the grid

function delRow() {
    tbl.deleteRow(tbl.rows.length-1);
}

// Delete column from the grid

function delCol() {
    if (tbl.rows.length > 0) {
      for (let i = 0; i < tbl.rows.length; i++) {
        tbl.rows[i].deleteCell(tbl.rows[0].cells.length - 1);
      }
    }
}

// Select a color from a dropdown menu of colors
function selectColor(){
    return document.getElementById("colors").value;
}

// Click on a single cell, changing its color to the currently selected color

tbl.addEventListener("click", (event) => {
    if (event.target.tagName === "TD") {
        event.target.style.background = selectColor();
    }
});

// Clear all cells/restore all cells to their original/initial color

function clearCells(){
    let cells = tbl.getElementsByTagName("TD");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "";
    }
}

// Fill all cells with the currently selected color

function fillAllCells(){
    let cells = tbl.getElementsByTagName("TD");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = selectColor();
    }
}

// Fill all uncolored cells with the currently selected color

function fillAllUncoloredCells(){
    let cells = tbl.getElementsByTagName("TD");
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].style.backgroundColor === "") {
            cells[i].style.backgroundColor = selectColor();
        }   
    }
}