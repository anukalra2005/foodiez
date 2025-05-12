// // // document.addEventListener('DOMContentLoaded', () => {
// // //   // Event listener for each add-to-cart button
// // //   document.querySelectorAll('.add-to-cart-btn').forEach(button => {
// // //     button.addEventListener('click', function () {
// // //       // Get the dish details from the button attributes
// // //       const dishName = this.getAttribute('data-dish');
// // //       const price = parseFloat(this.getAttribute('data-price'));
// // //       const img = this.getAttribute('data-img');

// // //       // Get the cart from localStorage, or initialize an empty array
// // //       let cart = JSON.parse(localStorage.getItem('cart')) || [];

// // //       // Check if the item is already in the cart
// // //       const existingItem = cart.find(item => item.name === dishName);

// // //       if (existingItem) {
// // //         existingItem.quantity += 1; // Increase quantity if item already in the cart
// // //       } else {
// // //         // Add new item to the cart
// // //         cart.push({ name: dishName, price, img, quantity: 1 });
// // //       }

// // //       // Save updated cart to localStorage
// // //       localStorage.setItem('cart', JSON.stringify(cart));

// // //       // Show success message and redirect to cart page
// // //       alert("✅ Item added to cart!");
// // //       window.location.href = 'cart.html'; // Redirect to the cart page
// // //     });
// // //   });
// // // });
// // // document.addEventListener('DOMContentLoaded', () => {
// // //   // Attach event listener to all buttons with class .add-to-cart-btn
// // //   document.querySelectorAll('.add-to-cart-btn').forEach(button => {
// // //     button.addEventListener('click', function () {
// // //       // Get dish details from custom data attributes
// // //       const dishName = this.getAttribute('data-dish');
// // //       const price = parseFloat(this.getAttribute('data-price'));
// // //       const img = this.getAttribute('data-img'); // e.g., images/dish1.jpg

// // //       // Retrieve existing cart or initialize new array
// // //       let cart = JSON.parse(localStorage.getItem('cart')) || [];

// // //       // Check if the dish is already in the cart
// // //       const existingItem = cart.find(item => item.name === dishName);

// // //       if (existingItem) {
// // //         existingItem.quantity += 1; // Increment quantity
// // //       } else {
// // //         // Add new item with quantity 1
// // //         cart.push({ name: dishName, price, img, quantity: 1 });
// // //       }

// // //       // Save updated cart to localStorage
// // //       localStorage.setItem('cart', JSON.stringify(cart));

// // //       // Show confirmation and redirect to cart
// // //       alert("✅ Item added to cart!");
// // //       window.location.href = 'cart.html';
// // //     });
// // //   });
// // // });
// //   // const addtocart = document.querySelectorAll('#addtocart');
// //   const addtoCart = document.querySelectorAll('.add-to-cart-btn');


// // document.addEventListener('DOMContentLoaded', () => {
// //   const viewCartBtn = document.getElementById('viewCartBtn'); // Get the button

// //   // Attach event listener to all buttons with class .add-to-cart-btn
// //   document.querySelectorAll('.add-to-cart-btn').forEach(button => {
// //     button.addEventListener('click', function () {
// //       // Get dish details from custom data attributes
// //       const dishName = this.getAttribute('data-dish');
// //       const price = parseFloat(this.getAttribute('data-price'));
// //       const img = this.getAttribute('data-img');

// //       // Retrieve existing cart or initialize new array
// //       let cart = JSON.parse(localStorage.getItem('cart')) || [];

// //       // Check if the dish is already in the cart
// //       const existingItem = cart.find(item => item.name === dishName);

// //       if (existingItem) {
// //         existingItem.quantity += 1;
// //       } else {
// //         cart.push({ name: dishName, price, img, quantity: 1 });
// //       }

// //       // Save updated cart to localStorage
// //       localStorage.setItem('cart', JSON.stringify(cart));

// //       // Show alert confirmation (optional)
// //       alert("✅ Item added to cart!");

// //       // Show the "View Cart" button
// //       if (viewCartBtn) {
// //         viewCartBtn.style.display = 'block';
// //         addtoCart.remove();

        
// //       }
// //     });
// //   });

// //   // Add click event to viewCartBtn (redirect to cart page)
// //   // const addtocart = document.getElementById('addtocart');
// //   if (viewCartBtn) {
// //     viewCartBtn.addEventListener('click', function () {
// //       window.location.href = 'cart.html';
// //     });
// //   }
// // });
// document.addEventListener('DOMContentLoaded', () => {
//   // Attach event listener to all buttons with class .add-to-cart-btn
//   document.querySelectorAll('.add-to-cart-btn').forEach((button, index) => {
//     button.addEventListener('click', function () {
//       // Get dish details from custom data attributes
//       const dishName = this.getAttribute('data-dish');
//       const price = parseFloat(this.getAttribute('data-price'));
//       const img = this.getAttribute('data-img');

//       // Retrieve existing cart or initialize new array
//       let cart = JSON.parse(localStorage.getItem('cart')) || [];

//       // Check if the dish is already in the cart
//       const existingItem = cart.find(item => item.name === dishName);

//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         cart.push({ name: dishName, price, img, quantity: 1 });
//       }

//       // Save updated cart to localStorage
//       localStorage.setItem('cart', JSON.stringify(cart));

//       // Show alert confirmation (optional)
//       alert("✅ Item added to cart!");

//       // Show the "View Cart" button for this specific item (based on index)
//       const addtocart=document.querySelectorAll('.add-to-cart-btn')[index]
//       const viewCartBtn = document.querySelectorAll('.view-cart-btn')[index];
//       if (viewCartBtn) {
//         viewCartBtn.style.display = 'block';
//         addtocart.remove();
        
//       }
//     });
//   });

//   // Add click event to viewCartBtns (redirect to cart page)
//   document.querySelectorAll('.view-cart-btn').forEach(button => {
//     button.addEventListener('click', function () {
//       window.location.href = 'cart.html';
//     });
//   });
// });
document.addEventListener('DOMContentLoaded', () => {
  // Attach event listener to all buttons with class .add-to-cart-btn
  document.querySelectorAll('.add-to-cart-btn').forEach((button, index) => {
    button.addEventListener('click', function () {
      // Get dish details from custom data attributes
      const dishName = this.getAttribute('data-dish');
      const price = parseFloat(this.getAttribute('data-price'));
      const img = this.getAttribute('data-img');

      // Retrieve existing cart or initialize new array
      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Check if the dish is already in the cart
      const existingItem = cart.find(item => item.name === dishName);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ name: dishName, price, img, quantity: 1 });
      }

      // Save updated cart to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));

      // Show alert confirmation (optional)
      alert("✅ Item added to cart!");

      // Show the "View Cart" button for this specific item (based on index)
      const viewCartBtn = document.querySelectorAll('.view-cart-btn')[index];
      if (viewCartBtn) {
        viewCartBtn.style.display = 'block';
      }

      // Remove the "Add to Cart" button for this specific item
      this.style.display = 'none'; // Hide the "Add to Cart" button
    });
  });

  // Add click event to viewCartBtns (redirect to cart page)
  document.querySelectorAll('.view-cart-btn').forEach(button => {
    button.addEventListener('click', function () {
      window.location.href = 'cart.html';
    });
  });
});
