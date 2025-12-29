/* =========================
   CART STORAGE HELPERS
========================= */
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

/* =========================
   ADD TO CART
========================= */
function addToCart(name, price) {
  let cart = getCart();
  cart.push({
    name: name,
    price: Number(price),
    qty: 1
  });
  saveCart(cart);
  alert("Added to cart");
}

/* =========================
   REMOVE FROM CART
========================= */
function removeFromCart(index) {
  let cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  location.reload();
}

/* =========================
   CART TOTAL
========================= */
function getCartTotal() {
  let cart = getCart();
  return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}

/* =========================
   CLEAR CART
========================= */
function clearCart() {
  localStorage.removeItem("cart");
}

/* =========================
   CART COUNT (HEADER)
========================= */
function updateCartCount() {
  const count = getCart().length;
  const el = document.getElementById("cartCount");
  if (el) el.innerText = count;
}

/* =========================
   PAGE LOAD
========================= */
document.addEventListener("DOMContentLoaded", updateCartCount);
