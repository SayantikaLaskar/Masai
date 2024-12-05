// 1. Declare a global variable age and assign a value to it.
let age = parseInt(prompt("Enter your age: ")); 

// 2. Create a function displayAge that logs the value of age.
function displayAge() {
  console.log("Age:", age);
}

// 3. Call the displayAge function to show how the global execution context works.
displayAge(); 

// 4. Create another function changeAge, which changes the value of age.
function changeAge() {
  age = parseInt(prompt("Enter new age: ")); 
  console.log("Age after update:", age); 
}

// Call changeAge and display the updated value of age
changeAge();
