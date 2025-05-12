document.addEventListener('DOMContentLoaded', () => {
  renderCart();
});
function saveCartToLocalStorage() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  localStorage.setItem('cartData', JSON.stringify(cart));
}
function renderCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartEl = document.getElementById('cart');
  cartEl.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>
        <div class="d-flex justify-content-center align-items-center">
          <button class="btn btn-sm btn-outline-secondary me-1" onclick="updateQuantity(${index}, -1)">-</button>
          <span>${item.quantity}</span>
          <button class="btn btn-sm btn-outline-secondary ms-1" onclick="updateQuantity(${index}, 1)">+</button>
        </div>
      </td>
      <td>₹${item.price}</td>
      <td>₹${itemTotal}</td>
      <td><button class="btn btn-danger btn-sm" onclick="removeItem(${index})">Remove</button></td>
    `;
    cartEl.appendChild(row);
  });

  document.getElementById("cartTotal").innerText = `Total: ₹${total}`;
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1); // Remove the item at given index
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

function updateQuantity(index, delta) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

function choosePaymentMethod() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  let totalAmount = 0;
  cart.forEach(item => {
    totalAmount += item.price * item.quantity;
  });

  localStorage.setItem("cartTotal", totalAmount);
  localStorage.setItem("cartData", JSON.stringify(cart));

  window.location.href = "payment.html"; // Redirect to payment page
}

