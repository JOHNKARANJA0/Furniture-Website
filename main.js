document.addEventListener("DOMContentLoaded", function () {
  const loadingIndicator = document.querySelector(".lds-hourglass");
  const mainContent = document.getElementById("main-content");

  setTimeout(function () {
    loadingIndicator.style.display = "none";
    mainContent.style.display = "block";
  }, 3000);
});
