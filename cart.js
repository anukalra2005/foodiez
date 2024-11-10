// cart.js - Add to Cart and Update Cart Functionality

// Event listener for Add to Cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const dishName = event.target.getAttribute('data-name');
        const dishPrice = parseInt(event.target.getAttribute('data-price'));

        // Save item to localStorage
        saveToLocalStorage(dishName, dishPrice);
    });
});

// Function to save the item to localStorage
function saveToLocalStorage(dishName, dishPrice) {
    // Get the current cart from localStorage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item is already in the cart
    const existingItemIndex = cart.findIndex(item => item.name === dishName);

    if (existingItemIndex !== -1) {
        // If the item already exists, increase its quantity
        cart[existingItemIndex].quantity += 1;
    } else {
        // If the item doesn't exist, add it to the cart with quantity 1
        cart.push({ name: dishName, price: dishPrice, quantity: 1 });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to update the cart display on the Cart Page
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    
    // Get cart items from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Clear current cart items in the UI
    cartItemsContainer.innerHTML = '';

    // Initialize total price
    let total = 0;

    // Display each item in the cart
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between');
        listItem.innerHTML = `${item.name} - Rs. ${item.price} x ${item.quantity}`;
        cartItemsContainer.appendChild(listItem);
        
        // Update the total price
        total += item.price * item.quantity;
    });

    // Update the total price display
    totalElement.textContent = `Total: Rs. ${total}`;
}

// Call updateCart on page load to display the current cart
updateCart();
