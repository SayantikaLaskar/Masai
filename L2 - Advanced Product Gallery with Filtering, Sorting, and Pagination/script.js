const products = [
  // ... (your product data here)
];

const productsPerPage = 3;
let currentPage = 1;

// Function to filter products based on category
function filterProducts(products, category) {
  if (category === 'all') {
    return products;
  }
  return products.filter(product => product.category === category);
}

// Function to sort products
function sortProducts(products, sortOption) {
  switch (sortOption) {
    case 'price-asc':
      return [...products].sort((a, b) => a.price - b.price);
    case 'price-desc':
      return [...products].sort((a, b) => b.price - a.price);
    case 'name-asc':
      return [...products].sort((a, b) => a.name.localeCompare(b.name));
    case 'name-desc':
      return [...products].sort((a, b) => b.name.localeCompare(a.name)).reverse();
    default:
      return products;
  }
}

// Function to paginate products
function paginateProducts(products) {
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  return products.slice(startIndex, endIndex);
}

// Function to update the product list in the DOM
function updateProductList(products) {
  const productListContainer = document.getElementById('product-list');
  productListContainer.innerHTML = '';

  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.innerHTML = `<h3>${product.name}</h3><p>Price: $${product.price}</p>`;
    productListContainer.appendChild(productDiv);
  });
}

// Function to update pagination controls
function updatePagination() {
  const paginationContainer = document.getElementById('pagination');
  paginationContainer.innerHTML = '';

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  if (currentPage > 1) {
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.addEventListener('click', () => {
      currentPage--;
      updateProductList(paginateProducts(filteredProducts));
      updatePagination();
    });
    paginationContainer.appendChild(prevButton);
  }

  if (currentPage < totalPages) {
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', () => {
      currentPage++;
      updateProductList(paginateProducts(filteredProducts));
      updatePagination();
    });
    paginationContainer.appendChild(nextButton);
  }
}

// Event listeners
const categorySelect = document.getElementById('category');
const sortSelect = document.getElementById('sort');

categorySelect.addEventListener('change', () => {
  filter();
});

sortSelect.addEventListener('change', () => {
  sort();
});

// Initial filtering and sorting
let filteredProducts = filterProducts(products, categorySelect.value);
filteredProducts = sortProducts(filteredProducts, sortSelect.value);

// Initial pagination and update
updateProductList(paginateProducts(filteredProducts));
updatePagination();

// Helper functions for filtering and sorting
function filter() {
  filteredProducts = filterProducts(products, categorySelect.value);
  sort();
}

function sort() {
  filteredProducts = sortProducts(filteredProducts, sortSelect.value);
  currentPage = 1; // Reset to the first page after sorting
  updateProductList(paginateProducts(filteredProducts));
  updatePagination();
}
