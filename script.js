const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if (close){
   close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}

// Додано логіку для додавання товару до кошика при натисканні кнопки

document.addEventListener('DOMContentLoaded', function () {
    // Отримати елементи DOM
    const addToCartBtn = document.getElementById('add-to-cart-btn');

    // Додати обробник подій для кнопки "Додати в кошик"
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', addToCart);
    }

    // Логіка для додавання товару в кошик
    function addToCart() {
        const productData = {
            image: "img/products/f1.jpg",
            name: "Куртка The north face",
            price: 120.00,
            quantity: 1
        };

        // Додати товар до кошика
        cart.push(productData);

        // Оновити відображення кошика
        updateCartView();
    }

    // Логіка для оновлення відображення кошика
    function updateCartView() {
        const cartContainer = document.getElementById('cart').querySelector('tbody');
        cartContainer.innerHTML = ''; // Очистити вміст кошика

        // Пройтися по всім товарам у кошику і відобразити їх
        cart.forEach(product => {
            const row = document.createElement('tr');

            // Створити HTML-код для відображення інформації про товар
            const rowHTML = `
                <td><a href="#" onclick="removeFromCart('${product.name}')"><i class="far fa-times-circle"></i></a></td>
                <td><img src="${product.image}" alt=""></td>
                <td>${product.name}</td>
                <td>$${product.price.toFixed(2)}</td>
                <td><input type="number" value="${product.quantity}" onchange="updateQuantity('${product.name}', this.value)"></td>
                <td>$${(product.price * product.quantity).toFixed(2)}</td>
            `;

            row.innerHTML = rowHTML;
            cartContainer.appendChild(row);
        });
    }

    // Логіка для видалення товару з кошика
    window.removeFromCart = function (productName) {
        const index = cart.findIndex(product => product.name === productName);
        if (index !== -1) {
            cart.splice(index, 1);
            updateCartView();
        }
    };

    // Логіка для оновлення кількості товару в кошику
    window.updateQuantity = function (productName, newQuantity) {
        const index = cart.findIndex(product => product.name === productName);
        if (index !== -1) {
            cart[index].quantity = parseInt(newQuantity, 10);
            updateCartView();
        }
    };
});
