document.addEventListener("DOMContentLoaded", () => {
  const loadingIndicator = document.querySelector(".lds-dual-ring");
  const mainContent = document.getElementById("main-content");

  setTimeout(function() {
    loadingIndicator.style.display = "none";
    mainContent.style.display = "block";
  }, 3000);

  // Get the modal
  let modal = document.getElementById("id01");

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  const loginForm = document.getElementById("login_form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Replace with your validation logic (e.g., sending data to server)
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
      // Example validation
      window.location.href = "main.html"; // Redirect to main page
    } else {
      alert("Invalid login credentials!");
    }
  });
});
