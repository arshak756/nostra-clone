const products = [
    {
        name: "Red Summer Dress",
        tags: ["red", "summer", "new"],
        image: "red-shirt.jpg"
    },
    {
        name: "Blue Party Shirt",
        tags: ["blue", "party", "new"],
        image: "blue-shirt.jpg"
    },
    {
        name: "Black Party Shirt",
        tags: ["black", "party", "old"],
        image: "black-shirt.jpg"
    },
    {
        name: "Black Sports shoe ",
        tags: ["black", "sports", "new"],
        image: "black-shoe.jpg"
    }
];


function renderProducts(filteredProducts) {
    const container = document.querySelector('.products');
    container.innerHTML = ''; // Clear existing

    if (filteredProducts.length === 0) {
        container.innerHTML = '<p>No products match the selected filters.</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" />
                <h4>${product.name}</h4>
            </div>
        `;
        container.innerHTML += productCard;
    });
}


function filterProducts() {
    const checked = Array.from(document.querySelectorAll('input[name="tags"]:checked'))
                         .map(input => input.value);

    if (checked.length === 0) {
        renderProducts(products);
        return;
    }

    const filtered = products.filter(product =>
        checked.every(tag => product.tags.includes(tag))
    );

    renderProducts(filtered);
}


document.querySelectorAll('input[name="tags"]').forEach(input => {
    input.addEventListener('change', filterProducts);
});

// Initial render
renderProducts(products);

