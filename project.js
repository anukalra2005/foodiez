// JavaScript to handle the dropdown toggle
const loginBtn = document.getElementById('loginBtn');
const loginDropdown = document.getElementById('loginDropdown');
const loginForm = document.querySelector('#loginDropdown form');

// Toggle the dropdown on button click
loginBtn.addEventListener('click', () => {
    if (loginDropdown.style.display === 'block') {
        loginDropdown.style.display = 'none';
    } else {
        loginDropdown.style.display = 'block';
    }
});
// Close the dropdown if the user clicks outside of it
window.addEventListener('click', (e) => {
    if (!loginDropdown.contains(e.target) && e.target !== loginBtn) {
        loginDropdown.style.display = 'none';
    }
    
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent actual form submission
    loginDropdown.style.display = 'none'; // Hide the login form after submission
    alert('Logged in successfully!'); // Display success message
});

// JavaScript to handle the login and signup dropdown toggles
const signupBtn = document.getElementById('signup');
const signupDropdown = document.getElementById('signupDropdown');

// Toggle the signup dropdown on button click
signupBtn.addEventListener('click', () => {
    if (signupDropdown.style.display === 'block') {
        signupDropdown.style.display = 'none';
    } else {
        signupDropdown.style.display = 'block';
    }
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', (e) => {
    if (!signupDropdown.contains(e.target) && e.target !== signupBtn) {
        signupDropdown.style.display = 'none';
    }
});
document.querySelectorAll("button")[1].addEventListener("click",clicks);
function clicks(){
    alert("hey foodiez");
}
