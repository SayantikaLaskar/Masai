# Product Gallery

This is a simple product gallery with filtering, sorting, and pagination.

**How to Use:**

1.  Open `index.html` in a web browser.
2.  Use the "Category" and "Sort By" dropdowns to filter and sort the products.
3.  Use the "Previous" and "Next" buttons to navigate between pages.

**Features:**

*   Filtering by category
*   Sorting by price and name
*   Pagination with 3 products per page
*   Dynamic updates based on user interactions

**To run the project:**

1.  Make sure you have Node.js and npm installed.
2.  Open a terminal in the project directory.
3.  Open `index.html` in a web browser.

This provides a basic implementation of the product gallery. You can further enhance it by adding features like:

*   Image display for each product
*   Search functionality
*   Responsive design
*   More advanced styling and animations
*   
Explanation:

HTML

- Data: The products array holds the initial product data.
- Variables: productsPerPage and currentPage are initialized.
- Filtering: The filterProducts() function filters the products based on the selected category.
- Sorting: The sortProducts() function sorts the products based on the selected sorting option.
- Pagination: The paginateProducts() function divides the filtered and sorted products into pages.
- DOM Manipulation: The updateProductList() function updates the product list in the DOM based on the current page of products. The updatePagination() function creates and updates the pagination controls.
- Event Listeners: Event listeners are attached to the category and sort select elements to trigger the filtering and sorting functions when the user interacts with them.
- Initial State: The initial filtering, sorting, and pagination are performed and the product list and pagination controls are updated.

CSS

Basic Styling:

- Sets the font family for the page.
- Removes default browser margins.
- Heading Styling:
- Centers the main heading.
- Adds margin below the heading.
  
Filters Styling:

- Makes the filter section a horizontal row with elements spaced evenly.
- Adds margin to the right of each label.
  
Product List Styling:

- Creates a grid layout for the product list.
- Each grid item will have a minimum width of 200px and will grow to fill the available space.
- Adds spacing between grid items.
  
Product Styling:

- Styles individual product boxes with borders and padding.
  
Pagination Styling:

- Centers the pagination controls.
- Adds margin above the pagination.
