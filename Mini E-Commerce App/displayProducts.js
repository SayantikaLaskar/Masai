export function displayProducts(products, containerId, addToCartCallback, addToWishlistCallback) {
  const container = document.getElementById(containerId);
  container.innerHTML = ''; // Clear previous content

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: $${product.price}</p>
      <p>Rating: ${product.rating}</p>
    `;

    const addToCartBtn = document.createElement('button');
    addToCartBtn.textContent = 'Add to Cart';
    addToCartBtn.addEventListener('click', () => {
      if (confirm(`Are you sure you want to add ${product.name} to the cart?`)) {
        addToCartCallback(product);
        alert(`${product.name} added to cart!`);
      }
    });

    const addToWishlistBtn = document.createElement('button');
    addToWishlistBtn.textContent = 'Add to Wishlist';
    addToWishlistBtn.addEventListener('click', () => {
      if (confirm(`Are you sure you want to add ${product.name} to the wishlist?`)) {
        addToWishlistCallback(product);
        alert(`${product.name} added to wishlist!`);
      }
    });

    productCard.appendChild(addToCartBtn);
    productCard.appendChild(addToWishlistBtn);

    container.appendChild(productCard);
  });
}
