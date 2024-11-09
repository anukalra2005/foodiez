const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginDropdown = document.getElementById('loginDropdown');
const signupDropdown = document.getElementById('signupDropdown');
const collapsibleNavbar = document.getElementById('collapsibleNavbar');
const exploreButton = document.getElementById('explore');
const iconButton = document.getElementById('icon');

// Toggle Login Dropdown
loginBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  signupDropdown.style.display = 'none'; // Hide sign-up dropdown if open
  loginDropdown.style.display = loginDropdown.style.display === 'block' ? 'none' : 'block';
});

// Toggle Sign-up Dropdown
signupBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  loginDropdown.style.display = 'none'; // Hide login dropdown if open
  signupDropdown.style.display = signupDropdown.style.display === 'block' ? 'none' : 'block';
});

// Close dropdowns and navbar when clicking outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('#loginDropdown') && !event.target.closest('#loginBtn')) {
    loginDropdown.style.display = 'none';
  }
  if (!event.target.closest('#signupDropdown') && !event.target.closest('#signupBtn')) {
    signupDropdown.style.display = 'none';
  }
  if (!event.target.closest('.navbar-collapse') && !event.target.closest('.navbar-toggler')) {
    collapsibleNavbar.classList.remove('show');
  }
});

// Explore Button Navigation
exploreButton.addEventListener('click', function() {
  window.location.href = "menu5.html";
});

// Icon Button Navigation
iconButton.addEventListener('click', function() {
  window.location.href = "about.html";
});

// Handle Login
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert(data.message);
        loginDropdown.style.display = 'none';
      } else {
        alert(data.message);
      }
    });
});

// Handle Signup
document.getElementById('signupForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('signupUsername').value;
  const password = document.getElementById('signupPassword').value;

  fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert(data.message);
        signupDropdown.style.display = 'none';
      } else {
        alert(data.message);
      }
    });
});
