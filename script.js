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