// // document.addEventListener("DOMContentLoaded", function () {
// //   const loginDropdown = document.getElementById("loginDropdown");
// //   const signupDropdown = document.getElementById("signupDropdown");

// //   // Login Form Submission
// //   if (loginDropdown) {
// //     loginDropdown.addEventListener("submit", async (e) => {
// //       e.preventDefault();
// //       const email = e.target.querySelector('input[type="email"]').value;
// //       const password = e.target.querySelector('input[type="password"]').value;

// //       const response = await fetch('http://localhost:3000/login', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ email, password })
// //       });

// //       const result = await response.json();
// //       alert(result.message);

// //       if (response.ok && result.userId) {
// //         localStorage.setItem("userId", result.userId); // Save userId for cart
// //       } else {
// //         alert('Login failed: ' + result.message);
// //       }
// //     });
// //   }

// //   // Signup Form Submission
// //   if (signupDropdown) {
// //     signupDropdown.addEventListener("submit", async (e) => {
// //       e.preventDefault();
// //       const username = e.target.querySelector('input[type="text"]').value;
// //       const email = e.target.querySelector('input[type="email"]').value;
// //       const password = e.target.querySelectorAll('input[type="password"]')[0].value;

// //       const response = await fetch('http://localhost:3000/signup', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ username, email, password })
// //       });

// //       const result = await response.json();
// //       alert(result.message);

// //       if (response.ok) {
// //         // Redirect or show success
// //         alert("Signup successful! Please login.");
// //         loginDropdown.style.display = "block"; // Optionally show login dropdown after signup
// //       } else {
// //         alert('Signup failed: ' + result.message);
// //       }
// //     });
// //   }

// //   // Toggle Dropdowns
// //   const loginBtn = document.getElementById("loginBtn");
// //   const signupBtn = document.getElementById("signupBtn");

// //   if (loginBtn) {
// //     loginBtn.addEventListener("click", () => {
// //       loginDropdown.style.display = loginDropdown.style.display === "block" ? "none" : "block";
// //       signupDropdown.style.display = "none"; // Close signup dropdown if login is clicked
// //     });
// //   }

// //   if (signupBtn) {
// //     signupBtn.addEventListener("click", () => {
// //       signupDropdown.style.display = signupDropdown.style.display === "block" ? "none" : "block";
// //       loginDropdown.style.display = "none"; // Close login dropdown if signup is clicked
// //     });
// //   }

// //   // Explore & Special Redirect
// //   const exploreid = document.getElementById("explore");
// //   const specialid = document.getElementById("special");

// //   if (exploreid) {
// //     exploreid.addEventListener("click", () => {
// //       window.location.href = "menu5.html";
// //     });
// //   }

// //   if (specialid) {
// //     specialid.addEventListener("click", () => {
// //       window.location.href = "special.html";
// //     });
// //   }

// //   // Close dropdowns on outside click
// //   const collapsibleNavbar = document.getElementById("collapsibleNavbar");
// //   document.addEventListener("click", (event) => {
// //     if (!event.target.closest("#loginDropdown") && !event.target.closest("#loginBtn")) {
// //       loginDropdown.style.display = "none";
// //     }

// //     if (!event.target.closest("#signupDropdown") && !event.target.closest("#signupBtn")) {
// //       signupDropdown.style.display = "none";
// //     }

// //     if (!event.target.closest(".navbar-collapse") && !event.target.closest(".navbar-toggler")) {
// //       collapsibleNavbar?.classList.remove("show");
// //     }
// //   });
// // });

// // // Add to Cart Function
// // async function addToCart(dishName, price) {
// //   const userId = parseInt(localStorage.getItem("userId"), 10);
// //   if (!userId) {
// //     alert("⚠️ Please login to add items to cart.");
// //     return;
// //   }

// //   const response = await fetch("http://localhost:3000/add-to-cart", {
// //     method: "POST",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify({ userId, dishName, price })
// //   });

// //   const result = await response.json();

// //   if (response.ok) {
// //     alert("✅ Item added to cart!");
// //   } else {
// //     alert("Error: " + result.message);
// //   }
// // }
// document.addEventListener("DOMContentLoaded", function () {
//   const loginForm = document.getElementById("loginForm");
//   const signupForm = document.getElementById("signupForm");
//   const blurBackground = document.getElementById("blurBackground");
//   const logoutBtn = document.getElementById("logoutBtn");
//   const loginBtn = document.getElementById("loginBtn");
//   const signupBtn = document.getElementById("signupBtn");
//   const closeLogin = document.getElementById("closeLogin");
//   const closeSignup = document.getElementById("closeSignup");

//   // Show login form on page load if not logged in
//   if (!localStorage.getItem("userId")) {
//     setTimeout(() => {
//       loginForm.style.display = "block";
//       blurBackground.style.display = "block";
//     }, 1000); // Show form after 1 second
//   }

//   // Close login form
//   closeLogin.addEventListener("click", () => {
//     loginForm.style.display = "none";
//     blurBackground.style.display = "none";
//   });

//   // Close signup form
//   closeSignup.addEventListener("click", () => {
//     signupForm.style.display = "none";
//     blurBackground.style.display = "none";
//   });

//   // Login button
//   loginBtn.addEventListener("click", () => {
//     loginForm.style.display = "block";
//     blurBackground.style.display = "block";
//     signupForm.style.display = "none";
//   });

//   // Sign-up button
//   signupBtn.addEventListener("click", () => {
//     signupForm.style.display = "block";
//     blurBackground.style.display = "block";
//     loginForm.style.display = "none";
//   });

//   // Handle login form submission
//   document.getElementById("loginFormContent").addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const email = e.target.querySelector('input[type="email"]').value;
//     const password = e.target.querySelector('input[type="password"]').value;

//     // Dummy login check
//     if (email === "user@example.com" && password === "password") {
//       localStorage.setItem("userId", "12345");
//       loginForm.style.display = "none";
//       blurBackground.style.display = "none";
//       logoutBtn.style.display = "block";
//       alert("Logged in successfully!");
//     } else {
//       alert("Invalid credentials!");
//     }
//   });

//   // Handle signup form submission
//   document.getElementById("signupFormContent").addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const username = e.target.querySelector('input[type="text"]').value;
//     const email = e.target.querySelector('input[type="email"]').value;
//     const password = e.target.querySelector('input[type="password"]').value;

//     // Dummy signup
//     if (email && password) {
//       localStorage.setItem("userId", "12345");
//       signupForm.style.display = "none";
//       blurBackground.style.display = "none";
//       logoutBtn.style.display = "block";
//       alert("Signup successful! You are now logged in.");
//     } else {
//       alert("Please fill in all fields.");
//     }
//   });

//   // Handle logout
//   logoutBtn.addEventListener("click", () => {
//     localStorage.removeItem("userId");
//     logoutBtn.style.display = "none";
//     loginForm.style.display = "block";
//     blurBackground.style.display = "block";
//     alert("Logged out successfully!");
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  const blurBackground = document.getElementById("blurBackground");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const welcomeMessage = document.getElementById("welcomeMessage");

  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  const closeLogin = document.getElementById("closeLogin");
  const closeSignup = document.getElementById("closeSignup");

  const toLogin = document.getElementById("toLogin");
  const toSignup = document.getElementById("toSignup");

  const explore=document.getElementById("explore")
  const special=document.getElementById("special")



  // Show signup form with blur on load
  blurBackground.style.display = "block";
  signupForm.style.display = "block";

  // Helper to hide all modals and blur
  function hideAll() {
    blurBackground.style.display = "none";
    loginForm.style.display = "none";
    signupForm.style.display = "none";
  }

  function showWelcome() {
    welcomeMessage.style.display = "block";
    hideAll();
  }

  loginBtn.addEventListener("click", () => {
    blurBackground.style.display = "block";
    loginForm.style.display = "block";
    signupForm.style.display = "none";
  });

  signupBtn.addEventListener("click", () => {
    blurBackground.style.display = "block";
    signupForm.style.display = "block";
    loginForm.style.display = "none";
  });

  closeLogin.addEventListener("click", showWelcome);
  closeSignup.addEventListener("click", showWelcome);

  toLogin.addEventListener("click", function (e) {
    e.preventDefault();
    signupForm.style.display = "none";
    loginForm.style.display = "block";
  });

  toSignup.addEventListener("click", function (e) {
    e.preventDefault();
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  });

  // Handle Signup
  // document.getElementById("signupFormContent").addEventListener("submit", function (e) {
  //   e.preventDefault();
  //   const passwords = signupForm.querySelectorAll('input[type="password"]');
  //   if (passwords[0].value !== passwords[1].value) {
  //     alert("Passwords do not match.");
  //     return;
      
  //   }
    
  //   showWelcome();
  //   logoutBtn.style.display = "inline-block";
  // });
  // Handle Signup Form Submission
document.getElementById("signupFormContent").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = e.target.querySelector('input[type="text"]').value;
  const email = e.target.querySelector('input[type="email"]').value;
  const password = e.target.querySelector('input[type="password"]').value;
  const confirmPassword = e.target.querySelectorAll('input[type="password"]')[1].value;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  try {
    const response = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    });

    const result = await response.json();

    if (response.ok) {
      alert("Signup successful!");
      
      showWelcome();
      clearSignupForm();
      welcomeMessage.style.display = "block";
      blurBackground.style.display = "none";
      loginForm.style.display = "none";
      signupForm.style.display = "none";
      document.getElementById("signupFormContent").reset();


      // logoutBtn.style.display = "block";
      logoutBtn.style.display = "block";


      // Handle success, e.g., redirect or show welcome message
    } else {
      alert(result.message); // Show error from backend
    }
  } catch (error) {
    alert("Signup error: " + error.message);
  }
});

  
  // Replace dummy login check with real fetch call
// document.getElementById("loginFormContent").addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const email = e.target.querySelector('input[type="email"]').value;
//   const password = e.target.querySelector('input[type="password"]').value;

//   try {
//     const response = await fetch('http://localhost:3000/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password })
//     });

//     const result = await response.json();

//     if (response.ok && result.userId) {
//       localStorage.setItem("userId", result.userId);
//       welcomeMessage.style.display = "block";
//       blurBackground.style.display = "none";
//       loginForm.style.display = "none";
//       logoutBtn.style.display = "block";
//       alert("Logged in successfully!");
//       // document.getElementById('signup-form').reset();

//       document.getElementById("loginFormContent").reset();
//     } else {
//       alert("Login failed: " + result.message);
//     }
//   } catch (error) {
//     alert("Login error: " + error.message);
//   }
// });

document.getElementById("loginFormContent").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  const password = e.target.querySelector('input[type="password"]').value;

  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const result = await response.json();

    if (response.ok && result.userId) {
      localStorage.setItem("userId", result.userId);
      loginForm.style.display = "none";
      blurBackground.style.display = "none";
      logoutBtn.style.display = "block";
      alert("Logged in successfully!");
    } else {
      alert("Login failed: " + result.message);
    }
  } catch (error) {
    console.error("Error during login:", error);
    alert("Something went wrong. Try again later.");
  }
});


  // Handle Login
  document.getElementById("loginFormContent").addEventListener("submit", function (e) {
    e.preventDefault();
    showWelcome();
    
    logoutBtn.style.display = "inline-block";
  });

  // Logout resets everything
  logoutBtn.addEventListener("click", () => {
    localStorage.clear();
    welcomeMessage.style.display = "none";
    blurBackground.style.display = "block";
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    logoutBtn.style.display = "none";
    document.getElementById('signup-form').reset();
    document.getElementById('loginup-form').reset();


    
  });
});
function clearLoginForm() {
  document.querySelector('#loginForm').reset();
}

function clearSignupForm() {
  document.querySelector('#signupForm').reset();
}


// Function to show the welcome message after successful sign-up for 1 second
function showWelcome() {
  // Check if there is no error message
  const errorMessage = document.getElementById("signupMessage");
  if (errorMessage.textContent === '') {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.classList.add('alert', 'alert-success');
    welcomeMessage.textContent = "Welcome to Foodiez! You have successfully signed up.";
    // document.getElementById('signup-form').reset();

    document.body.appendChild(welcomeMessage);
    // document.getElementById('logout-btn').style.display = 'block';
    logoutBtn.style.display = "inline-block";



    // Hide the welcome message after 1 second
    setTimeout(() => {
      welcomeMessage.style.display = 'none'; // Hide the welcome message
    }, 1000); // 1000 milliseconds = 1 second
  }
}
explore.addEventListener("click",()=>{
  // window.location
  window.location.href = "menu5.html";
})
special.addEventListener("click",()=>{
  // window.location
  window.location.href = "special.html";
})
