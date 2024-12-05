function processProducts() {
  const products = [];

  // Get input from the user
  while (true) {
    const name = prompt("Enter product name (or 'exit' to stop):");
    if (name.toLowerCase() === 'exit') {
      break;
    }
    const price = parseFloat(prompt("Enter product price:"));
    products.push({ name: name, price: price });
  }

  const productNames = products.map(product => product.name);

  productNames.forEach(name => {
    const product = products.find(p => p.name === name);
    if (product.price > 50) {
      console.log(`${name} is above $50`);
    } else {
      console.log(`${name} is below $50`);
    }
  });
}

processProducts();
