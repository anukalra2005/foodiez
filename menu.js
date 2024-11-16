// // // document.addEventListener('DOMContentLoaded', () => {
// // //   const addToCartButtons = document.querySelectorAll('.add-to-cart');

// // //   addToCartButtons.forEach(button => {
// // //     button.addEventListener('click', async (e) => {
// // //       e.preventDefault(); // Prevent default form behavior if any

// // //       const dishName = button.getAttribute('data-dish');
// // //       const price = parseFloat(button.getAttribute('data-price'));
// // //       const userId = localStorage.getItem('userId') || 1; // Placeholder for user ID

// // //       if (!userId) {
// // //         alert('User not logged in!');
// // //         return;
// // //       }

// // //       try {
// // //         const response = await fetch('http://localhost:3000/add-to-cart', {
// // //           method: 'POST',
// // //           headers: {
// // //             'Content-Type': 'application/json',
// // //           },
// // //           body: JSON.stringify({ userId, dishName, price }),
// // //         });

// // //         const data = await response.json();

// // //         if (response.ok) {
// // //           alert('Item added to cart successfully!');
// // //           window.location.href = 'cart.html'; // Redirect to cart
// // //         } else {
// // //           console.error('Failed to add item:', data);
// // //           alert('Failed to add item to cart: ' + (data.message || 'Unknown error'));
// // //         }
// // //       } catch (error) {
// // //         console.error('Error:', error);
// // //         alert('An error occurred while adding to cart.');
// // //       }
// // //     });
// // //   });
// // // });
// // document.addEventListener('DOMContentLoaded', () => {
// //   const addToCartButtons = document.querySelectorAll('.add-to-cart');

// //   addToCartButtons.forEach(button => {
// //     button.addEventListener('click', async (e) => {
// //       e.preventDefault(); // Prevent default form behavior if any

// //       const dishName = button.getAttribute('data-dish');
// //       const price = parseFloat(button.getAttribute('data-price'));
// //       const userId = localStorage.getItem('userId') || 1; // Placeholder for user ID

// //       if (!userId) {
// //         alert('User not logged in!');
// //         return;
// //       }

// //       try {
// //         const response = await fetch('http://localhost:3000/add-to-cart', {
// //           method: 'POST',
// //           headers: {
// //             'Content-Type': 'application/json',
// //           },
// //           body: JSON.stringify({ userId, dishName, price }),
// //         });

// //         const data = await response.json();

// //         if (response.ok) {
// //           alert('Item added to cart successfully!');
// //           window.location.href = 'cart.html'; // Redirect to cart
// //         } else {
// //           console.error('Failed to add item:', data);
// //           alert('Failed to add item to cart: ' + (data.message || 'Unknown error'));
// //         }
// //       } catch (error) {
// //         console.error('Error:', error);
// //         alert('An error occurred while adding to cart.');
// //       }
// //     });
// //   });
// // });
// document.addEventListener('DOMContentLoaded', () => {
//   const addToCartButtons = document.querySelectorAll('.add-to-cart');

//   addToCartButtons.forEach(button => {
//     button.addEventListener('click', async (e) => {
//       e.preventDefault(); // Prevent default form behavior if any

//       const dishName = button.getAttribute('data-dish');
//       const price = parseFloat(button.getAttribute('data-price'));
//       const userId = localStorage.getItem('userId') || 1; // Placeholder for user ID

//       if (!userId) {
//         alert('User not logged in!');
//         return;
//       }

//       try {
//         const response = await fetch('http://localhost:3000/add-to-cart', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ userId, dishName, price }),
//         });

//         const data = await response.json();

//         if (response.ok) {
//           alert('Item added to cart successfully!');
//           window.location.href = 'cart.html'; // Redirect to cart page
//         } else {
//           console.error('Failed to add item:', data);
//           alert('Failed to add item to cart: ' + (data.message || 'Unknown error'));
//         }
//       } catch (error) {
//         console.error('Error:', error);
//         alert('An error occurred while adding to cart.');
//       }
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', async (e) => {
      e.preventDefault(); // Prevent default form behavior

      const dishName = button.getAttribute('data-dish');
      const price = parseFloat(button.getAttribute('data-price'));
      const userId = localStorage.getItem('userId') || 1; // Placeholder for user ID

      if (!userId) {
        alert('User not logged in!');
        return;
      }

      try {
        const response = await fetch('http://localhost:3000/add-to-cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId, dishName, price }),
        });

        // Check if the response is JSON
        const data = await response.json();

        if (response.ok) {
          alert('Item added to cart successfully!');
          window.location.href = 'cart.html'; // Redirect to cart page
        } else {
          console.error('Failed to add item:', data);
          alert('Failed to add item to cart: ' + (data.message || 'Unknown error'));
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while adding to cart.');
      }
    });
  });
});
