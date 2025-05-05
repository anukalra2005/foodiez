// // // // document.addEventListener("DOMContentLoaded", function () {
// // // //   const loginDropdown = document.getElementById("loginDropdown");
// // // //   const signupDropdown = document.getElementById("signupDropdown");

// // // //   // Login Form Submission
// // // //   if (loginDropdown) {
// // // //     loginDropdown.addEventListener("submit", async (e) => {
// // // //       e.preventDefault();
// // // //       const email = e.target.querySelector('input[type="email"]').value;
// // // //       const password = e.target.querySelector('input[type="password"]').value;

// // // //       const response = await fetch('http://localhost:3000/login', {
// // // //         method: 'POST',
// // // //         headers: { 'Content-Type': 'application/json' },
// // // //         body: JSON.stringify({ email, password })
// // // //       });

// // // //       const result = await response.json();
// // // //       alert(result.message);

// // // //       if (response.ok && result.userId) {
// // // //         localStorage.setItem("userId", result.userId); // Save userId for cart
// // // //       } else {
// // // //         alert('Login failed: ' + result.message);
// // // //       }
// // // //     });
// // // //   }

// // // //   // Signup Form Submission
// // // //   if (signupDropdown) {
// // // //     signupDropdown.addEventListener("submit", async (e) => {
// // // //       e.preventDefault();
// // // //       const username = e.target.querySelector('input[type="text"]').value;
// // // //       const email = e.target.querySelector('input[type="email"]').value;
// // // //       const password = e.target.querySelectorAll('input[type="password"]')[0].value;

// // // //       const response = await fetch('http://localhost:3000/signup', {
// // // //         method: 'POST',
// // // //         headers: { 'Content-Type': 'application/json' },
// // // //         body: JSON.stringify({ username, email, password })
// // // //       });

// // // //       const result = await response.json();
// // // //       alert(result.message);

// // // //       if (response.ok) {
// // // //         // Redirect or show success
// // // //         alert("Signup successful! Please login.");
// // // //         loginDropdown.style.display = "block"; // Optionally show login dropdown after signup
// // // //       } else {
// // // //         alert('Signup failed: ' + result.message);
// // // //       }
// // // //     });
// // // //   }

// // // //   // Toggle Dropdowns
// // // //   const loginBtn = document.getElementById("loginBtn");
// // // //   const signupBtn = document.getElementById("signupBtn");

// // // //   if (loginBtn) {
// // // //     loginBtn.addEventListener("click", () => {
// // // //       loginDropdown.style.display = loginDropdown.style.display === "block" ? "none" : "block";
// // // //       signupDropdown.style.display = "none"; // Close signup dropdown if login is clicked
// // // //     });
// // // //   }

// // // //   if (signupBtn) {
// // // //     signupBtn.addEventListener("click", () => {
// // // //       signupDropdown.style.display = signupDropdown.style.display === "block" ? "none" : "block";
// // // //       loginDropdown.style.display = "none"; // Close login dropdown if signup is clicked
// // // //     });
// // // //   }

// // // //   // Explore & Special Redirect
// // // //   const exploreid = document.getElementById("explore");
// // // //   const specialid = document.getElementById("special");

// // // //   if (exploreid) {
// // // //     exploreid.addEventListener("click", () => {
// // // //       window.location.href = "menu5.html";
// // // //     });
// // // //   }

// // // //   if (specialid) {
// // // //     specialid.addEventListener("click", () => {
// // // //       window.location.href = "special.html";
// // // //     });
// // // //   }

// // // //   // Close dropdowns on outside click
// // // //   const collapsibleNavbar = document.getElementById("collapsibleNavbar");
// // // //   document.addEventListener("click", (event) => {
// // // //     if (!event.target.closest("#loginDropdown") && !event.target.closest("#loginBtn")) {
// // // //       loginDropdown.style.display = "none";
// // // //     }

// // // //     if (!event.target.closest("#signupDropdown") && !event.target.closest("#signupBtn")) {
// // // //       signupDropdown.style.display = "none";
// // // //     }

// // // //     if (!event.target.closest(".navbar-collapse") && !event.target.closest(".navbar-toggler")) {
// // // //       collapsibleNavbar?.classList.remove("show");
// // // //     }
// // // //   });
// // // // });

// // // // // Add to Cart Function
// // // // async function addToCart(dishName, price) {
// // // //   const userId = parseInt(localStorage.getItem("userId"), 10);
// // // //   if (!userId) {
// // // //     alert("⚠️ Please login to add items to cart.");
// // // //     return;
// // // //   }

// // // //   const response = await fetch("http://localhost:3000/add-to-cart", {
// // // //     method: "POST",
// // // //     headers: { "Content-Type": "application/json" },
// // // //     body: JSON.stringify({ userId, dishName, price })
// // // //   });

// // // //   const result = await response.json();

// // // //   if (response.ok) {
// // // //     alert("✅ Item added to cart!");
// // // //   } else {
// // // //     alert("Error: " + result.message);
// // // //   }
// // // // }
// // // document.addEventListener("DOMContentLoaded", function () {
// // //   const loginForm = document.getElementById("loginForm");
// // //   const signupForm = document.getElementById("signupForm");
// // //   const blurBackground = document.getElementById("blurBackground");
// // //   const logoutBtn = document.getElementById("logoutBtn");
// // //   const loginBtn = document.getElementById("loginBtn");
// // //   const signupBtn = document.getElementById("signupBtn");
// // //   const closeLogin = document.getElementById("closeLogin");
// // //   const closeSignup = document.getElementById("closeSignup");

// // //   // Show login form on page load if not logged in
// // //   if (!localStorage.getItem("userId")) {
// // //     setTimeout(() => {
// // //       loginForm.style.display = "block";
// // //       blurBackground.style.display = "block";
// // //     }, 1000); // Show form after 1 second
// // //   }

// // //   // Close login form
// // //   closeLogin.addEventListener("click", () => {
// // //     loginForm.style.display = "none";
// // //     blurBackground.style.display = "none";
// // //   });

// // //   // Close signup form
// // //   closeSignup.addEventListener("click", () => {
// // //     signupForm.style.display = "none";
// // //     blurBackground.style.display = "none";
// // //   });

// // //   // Login button
// // //   loginBtn.addEventListener("click", () => {
// // //     loginForm.style.display = "block";
// // //     blurBackground.style.display = "block";
// // //     signupForm.style.display = "none";
// // //   });

// // //   // Sign-up button
// // //   signupBtn.addEventListener("click", () => {
// // //     signupForm.style.display = "block";
// // //     blurBackground.style.display = "block";
// // //     loginForm.style.display = "none";
// // //   });

// // //   // Handle login form submission
// // //   document.getElementById("loginFormContent").addEventListener("submit", async (e) => {
// // //     e.preventDefault();
// // //     const email = e.target.querySelector('input[type="email"]').value;
// // //     const password = e.target.querySelector('input[type="password"]').value;

// // //     // Dummy login check
// // //     if (email === "user@example.com" && password === "password") {
// // //       localStorage.setItem("userId", "12345");
// // //       loginForm.style.display = "none";
// // //       blurBackground.style.display = "none";
// // //       logoutBtn.style.display = "block";
// // //       alert("Logged in successfully!");
// // //     } else {
// // //       alert("Invalid credentials!");
// // //     }
// // //   });

// // //   // Handle signup form submission
// // //   document.getElementById("signupFormContent").addEventListener("submit", async (e) => {
// // //     e.preventDefault();
// // //     const username = e.target.querySelector('input[type="text"]').value;
// // //     const email = e.target.querySelector('input[type="email"]').value;
// // //     const password = e.target.querySelector('input[type="password"]').value;

// // //     // Dummy signup
// // //     if (email && password) {
// // //       localStorage.setItem("userId", "12345");
// // //       signupForm.style.display = "none";
// // //       blurBackground.style.display = "none";
// // //       logoutBtn.style.display = "block";
// // //       alert("Signup successful! You are now logged in.");
// // //     } else {
// // //       alert("Please fill in all fields.");
// // //     }
// // //   });

// // //   // Handle logout
// // //   logoutBtn.addEventListener("click", () => {
// // //     localStorage.removeItem("userId");
// // //     logoutBtn.style.display = "none";
// // //     loginForm.style.display = "block";
// // //     blurBackground.style.display = "block";
// // //     alert("Logged out successfully!");
// // //   });
// // // });
// // document.addEventListener("DOMContentLoaded", () => {
// //   const loginForm = document.getElementById("loginForm");
// //   const signupForm = document.getElementById("signupForm");
// //   const blurBackground = document.getElementById("blurBackground");
// //   const logoutBtn = document.getElementById("logoutBtn");

// //   // Show login form on load if not logged in
// //   if (!localStorage.getItem("userId")) {
// //     blurBackground.style.display = "block";
// //     loginForm.style.display = "block";
// //   }

// //   // Close buttons
// //   document.getElementById("closeLogin").addEventListener("click", () => {
// //     loginForm.style.display = "none";
// //     blurBackground.style.display = "none";
// //   });

// //   document.getElementById("closeSignup").addEventListener("click", () => {
// //     signupForm.style.display = "none";
// //     blurBackground.style.display = "none";
// //   });

// //   // Switch forms
// //   document.getElementById("toSignup").addEventListener("click", (e) => {
// //     e.preventDefault();
// //     loginForm.style.display = "none";
// //     signupForm.style.display = "block";
// //   });

// //   document.getElementById("toLogin").addEventListener("click", (e) => {
// //     e.preventDefault();
// //     signupForm.style.display = "none";
// //     loginForm.style.display = "block";
// //   });

// //   // Dummy login
// //   document.getElementById("loginFormContent").addEventListener("submit", (e) => {
// //     e.preventDefault();
// //     localStorage.setItem("userId", "12345");
// //     loginForm.style.display = "none";
// //     blurBackground.style.display = "none";
// //     logoutBtn.style.display = "block";
// //     alert("Logged in!");
// //   });

// //   // Dummy signup
// //   document.getElementById("signupFormContent").addEventListener("submit", (e) => {
// //     e.preventDefault();
// //     localStorage.setItem("userId", "12345");
// //     signupForm.style.display = "none";
// //     blurBackground.style.display = "none";
// //     logoutBtn.style.display = "block";
// //     alert("Signed up & logged in!");
// //   });

// //   // Logout logic
// //   if (localStorage.getItem("userId")) {
// //     logoutBtn.style.display = "block";
// //   }

// //   logoutBtn.addEventListener("click", () => {
// //     localStorage.removeItem("userId");
// //     logoutBtn.style.display = "none";
// //     blurBackground.style.display = "block";
// //     loginForm.style.display = "block";
// //   });
// // });

// document.addEventListener("DOMContentLoaded", function () {
//   const loginForm = document.getElementById("loginForm");
//   const signupForm = document.getElementById("signupForm");
//   const blurBackground = document.getElementById("blurBackground");
//   const logoutBtn = document.getElementById("logoutBtn");

//   // Show login form on load if not logged in
//   if (!localStorage.getItem("userId")) {
//     blurBackground.style.display = "block";
//     loginForm.style.display = "block";
//   }

//   // Close buttons
//   document.getElementById("closeLogin").addEventListener("click", () => {
//     loginForm.style.display = "none";
//     blurBackground.style.display = "none";
//   });

//   document.getElementById("closeSignup").addEventListener("click", () => {
//     signupForm.style.display = "none";
//     blurBackground.style.display = "none";
//   });

//   // Switch forms
//   document.getElementById("toSignup").addEventListener("click", (e) => {
//     e.preventDefault();
//     loginForm.style.display = "none";
//     signupForm.style.display = "block";
//   });

//   document.getElementById("toLogin").addEventListener("click", (e) => {
//     e.preventDefault();
//     signupForm.style.display = "none";
//     loginForm.style.display = "block";
//   });

//   // Handle login form submission with database check
//   document.getElementById("loginFormContent").addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const email = e.target.querySelector('input[type="email"]').value;
//     const password = e.target.querySelector('input[type="password"]').value;

//     const response = await fetch('http://localhost:3000/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password })
//     });

//     const result = await response.json();
//     if (response.ok && result.success) {
//       localStorage.setItem("userId", result.userId); // Save userId for session
//       loginForm.style.display = "none";
//       blurBackground.style.display = "none";
//       logoutBtn.style.display = "block";
//       alert("Logged in successfully!");
//     } else {
//       alert(result.message || "Login failed!");
//     }
//   });

//   // Handle signup form submission with password confirmation and database check
//   document.getElementById("signupFormContent").addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const username = e.target.querySelector('input[type="text"]').value;
//     const email = e.target.querySelector('input[type="email"]').value;
//     const password = e.target.querySelector('input[type="password"]').value;
//     const confirmPassword = e.target.querySelector('input[name="confirmPassword"]').value;

//     // Check if password and confirm password match
//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     const response = await fetch('http://localhost:3000/signup', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ username, email, password })
//     });

//     const result = await response.json();
//     if (response.ok && result.success) {
//       alert("Signup successful! Please login.");
//       signupForm.style.display = "none";
//       blurBackground.style.display = "none";
//     } else {
//       alert(result.message || "Signup failed!");
//     }
//   });

//   // Logout logic
//   if (localStorage.getItem("userId")) {
//     logoutBtn.style.display = "block";
//   }

//   logoutBtn.addEventListener("click", () => {
//     localStorage.removeItem("userId");
//     logoutBtn.style.display = "none";
//     blurBackground.style.display = "block";
//     loginForm.style.display = "block";
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const blurBackground = document.getElementById("blurBackground");
  const logoutBtn = document.getElementById("logoutBtn");

  // Show login form if not logged in
  if (!localStorage.getItem("userId")) {
    blurBackground.style.display = "block";
    loginForm.style.display = "block";
  }

  // Close buttons
  document.getElementById("closeLogin").addEventListener("click", () => {
    loginForm.style.display = "none";
    blurBackground.style.display = "none";
  });

  document.getElementById("closeSignup").addEventListener("click", () => {
    signupForm.style.display = "none";
    blurBackground.style.display = "none";
  });

  // Switch forms
  document.getElementById("toSignup").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  });

  document.getElementById("toLogin").addEventListener("click", (e) => {
    e.preventDefault();
    signupForm.style.display = "none";
    loginForm.style.display = "block";
  });

  // Handle login form submission
  document.getElementById("loginFormContent").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelector('input[type="password"]').value;

    // Dummy login check
    if (email === "user@example.com" && password === "password") {
      localStorage.setItem("userId", "12345");
      loginForm.style.display = "none";
      blurBackground.style.display = "none";
      logoutBtn.style.display = "block";
      alert("Logged in successfully!");
    } else {
      alert("Invalid credentials!");
    }
  });

  // Handle signup form submission
  document.getElementById("signupFormContent").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelector('input[type="password"]').value;

    // Dummy signup
    if (username && email && password) {
      localStorage.setItem("userId", "12345");
      signupForm.style.display = "none";
      blurBackground.style.display = "none";
      logoutBtn.style.display = "block";
      alert("Signup successful! You are now logged in.");
    } else {
      alert("Please fill in all fields.");
    }
  });

  // Logout logic
  if (localStorage.getItem("userId")) {
    logoutBtn.style.display = "block";
  }

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("userId");
    logoutBtn.style.display = "none";
    blurBackground.style.display = "block";
    loginForm.style.display = "block";
    alert("Logged out successfully!");
  });
});
