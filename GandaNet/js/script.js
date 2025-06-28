// This file contains the JavaScript code for the GandaNet website.
// It handles dynamic interactions, such as fetching product prices and updating the HTML content in the table.

document.addEventListener('DOMContentLoaded', function() {
    const priceTableBody = document.getElementById('price-table-body');

    // Sample data for product prices
    const productPrices = [
        { product: 'Product A', averagePrice: '$10.00' },
        { product: 'Product B', averagePrice: '$15.50' },
        { product: 'Product C', averagePrice: '$8.75' },
        { product: 'Product D', averagePrice: '$12.30' }
    ];

    // Function to populate the table with product prices
    function populatePriceTable() {
        productPrices.forEach(item => {
            const row = document.createElement('tr');
            const productCell = document.createElement('td');
            const priceCell = document.createElement('td');

            productCell.textContent = item.product;
            priceCell.textContent = item.averagePrice;

            row.appendChild(productCell);
            row.appendChild(priceCell);
            priceTableBody.appendChild(row);
        });
    }

    // Call the function to populate the table on page load
    populatePriceTable();
});