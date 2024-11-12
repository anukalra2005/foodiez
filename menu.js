document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  document.querySelectorAll(".item").forEach((item) => {
    const button = item.querySelector("button");
    button.addEventListener("click", (e) => {
      e.preventDefault();

      const product = {
        name: item.querySelector("p").textContent.split('\n')[0], // Item name
        price: item.querySelector("p").textContent.match(/Rs\. \d+/)[0], // Item price
        image: item.querySelector("img").src // Image URL
      };

      // Add product to cart
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));

      // Optional: Display a message
      alert(`${product.name} added to cart`);

      // Send updated cart to backend
      fetch('http://localhost:3000/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cart }),
      })
      .then(response => response.json())
      .then(data => console.log('Cart saved to server:', data))
      .catch(error => console.error('Error:', error));
    });
  });
});
