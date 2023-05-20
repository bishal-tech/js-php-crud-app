let srNum = 1;
addNote = () => {
  const form = document.querySelector("#myform");
  const title = document.querySelector("#title").value;
  const desp = document.querySelector("#description").value;
  const tbody = document.querySelector("#tableBody");
  const newRow = document.createElement("tr");
  newRow.innerHTML = `<tr>
                <td>${srNum}</td>
                <td>${title}</td>
                <td>${desp}</td>
                <td>
                    <button class="btn btn-sm btn-success" onclick="editRow(this)">Edite</button>
                    <button class="btn btn-sm btn-primary" onclick="deleteRow(this)">Delete</button>
                </td>
            </tr>
            `;

  tbody.appendChild(newRow);

  // Clear the form after adding the note
  form.reset();
  return false; // Prevent form submission
};

// Function to edit a row
function editRow(button) {
  const row = button.parentNode.parentNode;
  const cells = row.getElementsByTagName("td");

  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");
  console.log(titleInput);

  titleInput.value = cells[1].textContent;
  descriptionInput.value = cells[2].textContent;

  deleteRow(button);
}

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

// Event listener for "Add to list" button
// document.getElementById("add").addEventListener("click", addItem);

// Event listener for "Clear list" button
// document.getElementById("clear").addEventListener("click", clearTable);
