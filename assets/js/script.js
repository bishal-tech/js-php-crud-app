let srNum = 1;
addNote = () => {
  const form = document.querySelector("#myform");
  const title = document.querySelector("#title").value;
  const desp = document.querySelector("#description").value;
  const tbody = document.querySelector("#tableBody");
  const newRow = document.createElement("tr");
  newRow.innerHTML = `<tr>
                <td>${srNum}</td>
                <td class="titleInput">${title}</td>
                <td class="decInput">${desp}</td>
                <td>
                  <button class="btn btn-sm btn-success" data-bs-toggle="modal" data-bs-target="#moadlFormDetails">All Details</button>
                </td>
                <td>
                  <button class="btn btn-sm btn-success" onclick="editRow(this)">Edit</button>
                   <button class="btn btn-sm btn-primary" onclick="deleteRow(this)">Delete</button>
                </td>        
            </tr>
            `;

  tbody.appendChild(newRow);
  srNum++;
  form.reset();

  // Close the Bootstrap modal
  const modal = document.querySelector("#moadlForm");
  const bootstrapModal = bootstrap.Modal.getInstance(modal);
  console.log(bootstrapModal);
  bootstrapModal.hide();

  return false; // Prevent form submission
};

// Function to delete a row
function deleteRow(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

// Function to clear the table
function clearTable() {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";
}

