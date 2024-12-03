function multiply(a = 1, b = 1) {
  return a * b;
}

function takeInputAndMultiply() {
  const num1 = parseInt(prompt("Enter the first number:"));
  const num2 = parseInt(prompt("Enter the second number (optional):"));

  const result = multiply(num1, num2);
  console.log("The product is:", result);
}

takeInputAndMultiply();
