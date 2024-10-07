document.getElementById("loginBtn").addEventListener("click", function() {
  var loginDropdown = document.getElementById("loginDropdown");
  var signupDropdown = document.getElementById("signupDropdown");
  loginDropdown.style.display = (loginDropdown.style.display === "none" || loginDropdown.style.display === "") ? "block" : "none";
  signupDropdown.style.display = "none"; // Hide sign-up if open
});

document.getElementById("signupBtn").addEventListener("click", function() {
  var signupDropdown = document.getElementById("signupDropdown");
  var loginDropdown = document.getElementById("loginDropdown");
  signupDropdown.style.display = (signupDropdown.style.display === "none" || signupDropdown.style.display === "") ? "block" : "none";
  loginDropdown.style.display = "none"; // Hide login if open
});

// Optional: Add logic to close dropdowns when clicking outside of them
window.addEventListener("click", function(event) {
  var loginDropdown = document.getElementById("loginDropdown");
  var signupDropdown = document.getElementById("signupDropdown");
  if (!event.target.matches('#loginBtn') && !event.target.closest('.login-dropdown')) {
    loginDropdown.style.display = "none";
  }
  if (!event.target.matches('#signupBtn') && !event.target.closest('.signup-dropdown')) {
    signupDropdown.style.display = "none";
  }
});