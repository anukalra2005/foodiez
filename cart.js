const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

addToCartButtons.forEach(button => {
  button.addEventListener('click', async (e) => {
    e.preventDefault();

    const item = button.closest('.item');
    const dishName = item.querySelector('.dish-name').textContent.trim();
    const priceText = item.querySelector('.dish-price').textContent.trim();
    const price = parseFloat(priceText.replace('Rs.', '').trim());
    const userId = 1; // This should be dynamically set based on the logged-in user

    console.log('Sending request with:', { userId, dishName, price });

    try {
      const response = await fetch('http://localhost:3000/add-to-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,
          dishName: dishName,
          price: price
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Item added to cart!');
        updateCart();
      } else {
        alert('Failed to add item to cart: ' + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  });
});

// Function to update the cart display
async function updateCart() {
  const response = await fetch('http://localhost:3000/get-cart');
  const cartItems = await response.json();

  const cartContainer = document.getElementById('cart-container');
  cartContainer.innerHTML = '';

  let totalPrice = 0;

  cartItems.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('list-group-item');
    cartItem.innerHTML = `
      <strong>${item.dish_name}</strong> - Rs. ${item.price} x ${item.quantity}
    `;
    cartContainer.appendChild(cartItem);
    totalPrice += item.price * item.quantity;
  });

  document.getElementById('total-price').textContent = totalPrice;
}

// Initial call to load cart on page load
updateCart();
