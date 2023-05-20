$(document).ready(function () {
  $("#myform").validate({
    rules: {
      title: {
        required: true,
      },
      description: {
        required: true,
      },
      files: {
        required: true,
      },
    },
    messages: {
      name: {
        required: "Please enter your name",
      },
      description: {
        required: "Please enter your email",
      },
    },

    submitHandler: function (form) {
      // Perform actions after validation and before form submission

      // Update the table using JavaScript/jQuery
      //   var name = $("#name").val();
      //   var email = $("#email").val();

      const srNum = 1;
      const title = document.querySelector("#title").value;
      const desp = document.querySelector("#description").value;
      const file = document.querySelector("#files").value;

      // Example: Create a new row and append it to the table
      var newRow = `<tr>
                <td>${srNum}</td>
                <td>${title}</td>
                <td>${desp}</td>
                <td>${file}</td>
                <td>
                    <button class="btn btn-sm btn-success" onclick="editRow(this)">Edite</button>
                    <button class="btn btn-sm btn-primary" onclick="deleteRow(this)">Delete</button>
                </td>
            </tr>`;

      $("#tableBody").append(newRow);
      srNum++;

      // Send form data to the PHP script using AJAX
      $.ajax({
        url: $(form).attr("action"),
        type: $(form).attr("method"),
        data: $(form).serialize(),
        success: function (response) {
          // Handle the response from the PHP script
          console.log(response);
        },
      });
    },
  });
});
