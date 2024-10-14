function openModal(title, description, price, image) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;
    document.getElementById("modalPrice").innerText = price;
    document.getElementById("modalImage").src = image;
    document.getElementById("productModal").style.display = "block";
}

function closeModal() {
    document.getElementById("productModal").style.display = "none";
}

function placeOrder() {
    const name = document.getElementById('name').value;
    const item = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;
    const payment = document.querySelector('input[name="payment"]:checked').value;

    const orderResult = `Thank you ${name}! You have ordered ${quantity} ${item}(s) and paid via ${payment}.`;
    document.getElementById('orderResult').innerText = orderResult;
}
let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = `(${cart.length})`;
}

function openCartModal() {
    const cartModal = document.getElementById('cartModal');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartItemsList.innerHTML = '';
    let total = 0;

    cart.forEach((product, index) => {
        const li = document.createElement('li');
        li.innerText = `${product.item} - $${product.price}`;
        total += product.price;
        cartItemsList.appendChild(li);
    });

    cartTotal.innerText = total.toFixed(2);
    cartModal.style.display = 'block';
}

function closeCartModal() {
    document.getElementById('cartModal').style.display = 'none';
}

function checkout() {
    alert('Proceeding to checkout...');
}

function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function openSignupModal() {
    document.getElementById('signupModal').style.display = 'block';
}

function closeSignupModal() {
    document.getElementById('signupModal').style.display = 'none';
}
