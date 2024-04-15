document.addEventListener("DOMContentLoaded", () => {
  // Get the modal
  let modal = document.getElementById("id01");

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  const loginForm = document.getElementById("login_form");
  const loadingIndicator = document.getElementById("loading");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    loadingIndicator.style.display = "block";

    // Replace with your validation logic (e.g., sending data to server)
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
      // Example validation
      window.location.href = "main.html"; // Redirect to success page
    } else {
      alert("Invalid login credentials!");
    }
    loadingIndicator.style.display = "none";
  });
});
