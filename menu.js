// menu.js
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
      const dishName = event.target.getAttribute('data-name');
      const dishPrice = event.target.getAttribute('data-price');
      
      // Save item to localStorage
      saveToLocalStorage(dishName, dishPrice);
    });
  });
  
  function saveToLocalStorage(dishName, dishPrice) {
    let orderItems = JSON.parse(localStorage.getItem('orderItems')) || [];
    orderItems.push({ name: dishName, price: parseInt(dishPrice) });
    localStorage.setItem('orderItems', JSON.stringify(orderItems));
  }
  