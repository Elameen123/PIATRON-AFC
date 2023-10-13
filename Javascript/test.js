// You can use JavaScript to dynamically update the availability and appearance of items.

// Example:
const isItemAvailable = false; // Set to true if the item is available, false if it's out of stock

const items = document.querySelectorAll('.item');
items.forEach(item => {
    if (!isItemAvailable) {
        item.classList.add('out-of-stock');
        const buyButton = item.querySelector('button');
        buyButton.disabled = true;
    }
});
