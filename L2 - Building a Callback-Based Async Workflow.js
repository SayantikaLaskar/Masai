function registerUser(callback) {
  setTimeout(() => {
    console.log("Registration successful.");
    callback(null, "Registration successful"); // Pass null for error, success message as data
  }, 1000); // Simulate 1-second delay
}

function sendVerification(callback) {
  setTimeout(() => {
    console.log("Verification email sent.");
    callback(null, "Verification sent"); 
  }, 1000);
}

function loginUser(callback) {
  setTimeout(() => {
    console.log("User logged in.");
    callback(null, "Login successful"); 
  }, 1000);
}

function displayWelcomeMessage() {
  console.log("Welcome to the application!");
}

function handleError(error) {
  console.error("Error:", error);
}

// Start the registration process
registerUser((error, data) => {
  if (error) {
    handleError(error); 
  } else {
    sendVerification((error, data) => {
      if (error) {
        handleError(error);
      } else {
        loginUser((error, data) => {
          if (error) {
            handleError(error);
          } else {
            displayWelcomeMessage();
          }
        });
      }
    });
  }
});
