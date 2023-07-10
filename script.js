<script>
function submitForm() {
  // Get the form data
  var formData = new FormData(document.getElementById("contact-form"));

  // Create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // Set the request method and the request URL
  xhr.open("POST", "mailto:youremail@example.com");

  // Set the request headers
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // Send the request
  xhr.send(formData);

  // When the request is complete, show a success message
  xhr.onload = function() {
    if (xhr.status == 200) {
      alert("Your message has been sent!");
    } else {
      alert("There was an error sending your message.");
    }
  };
}
</script>
