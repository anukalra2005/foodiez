document.getElementById('loginDropdown').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  const password = e.target.querySelector('input[type="password"]').value;

  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const result = await response.json();
  alert(result.message);
});

document.getElementById('signupDropdown').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = e.target.querySelector('input[type="text"]').value;
  const email = e.target.querySelector('input[type="email"]').value;
  const password = e.target.querySelectorAll('input[type="password"]')[0].value;

  const response = await fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password })
  });

  const result = await response.json();
  alert(result.message);
});

const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const loginDropdown = document.getElementById("loginDropdown");
const signupDropdown = document.getElementById("signupDropdown");
const collapsibleNavbar = document.getElementById("collapsibleNavbar");
const exploreButton = document.getElementById("explore");

// Toggle Login Dropdown
loginBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  signupDropdown.style.display = "none"; // Hide sign-up dropdown if open
  loginDropdown.style.display =
    loginDropdown.style.display === "block" ? "none" : "block";
});

// Toggle Sign-up Dropdown
signupBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  loginDropdown.style.display = "none"; // Hide login dropdown if open
  signupDropdown.style.display =
    signupDropdown.style.display === "block" ? "none" : "block";
});

// Close dropdowns and navbar when clicking outside
document.addEventListener("click", (event) => {
  if (
    !event.target.closest("#loginDropdown") &&
    !event.target.closest("#loginBtn")
  ) {
    loginDropdown.style.display = "none";
  }
  if (
    !event.target.closest("#signupDropdown") &&
    !event.target.closest("#signupBtn")
  ) {
    signupDropdown.style.display = "none";
  }
  if (
    !event.target.closest(".navbar-collapse") &&
    !event.target.closest(".navbar-toggler")
  ) {
    collapsibleNavbar.classList.remove("show");
  }
});

// Explore Button Navigation
exploreButton.addEventListener("click", function () {
  window.location.href = "menu5.html";
});