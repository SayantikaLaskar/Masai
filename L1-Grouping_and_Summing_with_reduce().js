function countCategories() {
  const categories = [];

  while (true) {
    const category = prompt("Enter category (or 'exit' to stop):");
    if (category.toLowerCase() === 'exit') {
      break;
    }
    categories.push(category);
  }

  return categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});
}

// Example Usage
const categoryCounts = countCategories();
console.log(categoryCounts); 

// Extra Challenge: Sort categories by count in descending order
function sortCategoriesByCount(categoryCounts) {
  return Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1]) 
    .map(([category, count]) => category);
}

const sortedCategories = sortCategoriesByCount(categoryCounts);
console.log(sortedCategories);
