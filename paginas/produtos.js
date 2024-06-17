const products = [
    { id: 1, name: 'Banco', price: 25.00 },
    { id: 2, name: 'Copo de madeira', price: 15.00 },
    { id: 3, name: 'Mesa', price: 35.00 },
    { id: 4, name: 'Cadeira de madeira', price: 10.00 }
];

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    const clearCartButton = document.getElementById('clear-cart');
    clearCartButton.addEventListener('click', clearCart);
});

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <span>${product.name} - R$ ${product.price.toFixed(2)}</span>
            <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        `;
        productList.appendChild(productElement);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItems.appendChild(cartItem);
    });
    updateTotal();
}

function updateTotal() {
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

function clearCart() {
    cart = [];
    displayCart();
}