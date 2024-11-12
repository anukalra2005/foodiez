document.addEventListener('DOMContentLoaded', () => {
    // Get all Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  
    // Add event listeners for each button
    addToCartButtons.forEach(button => {
      button.addEventListener('click', async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
  
        // Get dish details from the button's parent
        const item = button.closest('.item');
        const dishName = item.querySelector('p').textContent.split('\n')[0].trim(); // Get dish name
        const price = item.querySelector('p').textContent.split('Rs.')[1].trim(); // Get price (after Rs.)
        const userId = 1; // Set a sample user ID, replace this with actual user info
  
        try {
          // Make a POST request to the server to add the dish to the cart
          const response = await fetch('http://localhost:3000/add-to-cart', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, dishName, price })
          });
  
          // Handle server response
          const data = await response.json();
          if (response.ok) {
            alert('Item added to cart successfully!');
          } else {
            alert('Failed to add item to cart: ' + data.message);
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred while adding to cart.');
        }
      });
    });
  });