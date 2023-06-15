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

//click and hold (mouseover) from a single cell (start) to a different cell (end) such that all 
//affected/hovered-over cells from start to end change to the currently selected color

function dragAndFill() {
    var isDrag = false;

    tbl.addEventListener("mousedown", function(event) {
        let cell = event.target;
        if(cell.tagName === "TD") {
            isDrag = true;
            cell.style.backgroundColor = "red"; 
        }
        //selectColorFunction goes here
    });

    tbl.addEventListener("mouseover", function(event) {
        let cell = event.target;
        if(isDrag) {
            if(cell.tagName === "TD") {
                cell.style.backgroundColor = "red"; 
            }
        }
    });

    tbl.addEventListener("mouseup", function(event) {
        isDrag = false;
    });
}