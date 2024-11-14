const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

addToCartButtons.forEach(button => {
  button.addEventListener('click', async (e) => {
    e.preventDefault();

    const item = button.closest('.item');
    const dishName = item.querySelector('.dish-name').textContent.trim();
    const priceText = item.querySelector('.dish-price').textContent.trim();
    const price = parseFloat(priceText.replace('Rs.', '').trim());
    const userId = 1; // Assume this is set dynamically based on the logged-in user

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
      } else {
        alert('Failed to add item to cart: ' + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  });
});
