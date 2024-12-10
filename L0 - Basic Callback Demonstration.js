function displayMessage(name) {
  console.log("Hello, " + name + "!");
}

function getUserInput(callback) {
  setTimeout(() => {
    const username = "Alice"; // Simulate retrieving username after 1 second
    callback(username); 
  }, 1000);
}

// Using the functions
getUserInput(displayMessage);
