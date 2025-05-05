document.addEventListener('DOMContentLoaded', () => {
  // Event listener for each add-to-cart button
  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function () {
      // Get the dish details from the button attributes
      const dishName = this.getAttribute('data-dish');
      const price = parseFloat(this.getAttribute('data-price'));
      const img = this.getAttribute('data-img');

      // Get the cart from localStorage, or initialize an empty array
      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Check if the item is already in the cart
      const existingItem = cart.find(item => item.name === dishName);

      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if item already in the cart
      } else {
        // Add new item to the cart
        cart.push({ name: dishName, price, img, quantity: 1 });
      }

      // Save updated cart to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));

      // Show success message and redirect to cart page
      alert("✅ Item added to cart!");
      window.location.href = 'cart.html'; // Redirect to the cart page
    });
  });
});
