document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginDropdown = document.getElementById('loginDropdown');
    const signupDropdown = document.getElementById('signupDropdown');
  
    loginBtn.addEventListener('click', function() {
      if (loginDropdown.style.display === 'none' || loginDropdown.style.display === '') {
        loginDropdown.style.display = 'block';
        signupDropdown.style.display = 'none'; // Hide signup form
      } else {
        loginDropdown.style.display = 'none';
      }
    });
  
    // signupBtn.addEventListener('click', function() {
    //   if (signupDropdown.style.display === 'none' || signupDropdown.style.display === '') {
    //     signupDropdown.style.display = 'block';
    //     loginDropdown.style.display = 'none'; // Hide login form
    //   } else {
    //     signupDropdown.style.display = 'none';
    //   }
    // });
  });
  