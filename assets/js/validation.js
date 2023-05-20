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
  });
});
