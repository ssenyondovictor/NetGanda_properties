// This file contains the JavaScript code for the website. It handles dynamic interactions, such as fetching product price data, updating the DOM, and managing user input.

document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
    const fetchPricesButton = document.getElementById('fetch-prices');

    fetchPricesButton.addEventListener('click', fetchProductPrices);

    function fetchProductPrices() {
        // Simulated API call to fetch product prices
        const productPrices = [
            { name: 'Product A', price: 29.99 },
            { name: 'Product B', price: 19.99 },
            { name: 'Product C', price: 39.99 },
        ];

        displayProductPrices(productPrices);
    }

    function displayProductPrices(prices) {
        productList.innerHTML = ''; // Clear existing list
        prices.forEach(product => {
            const listItem = document.createElement('li');
            listItem.textContent = `${product.name}: $${product.price.toFixed(2)}`;
            productList.appendChild(listItem);
        });
    }
});