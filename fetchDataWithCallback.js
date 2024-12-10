function fetchDataWithCallback(callback) {
  // Simulate an asynchronous operation (e.g., fetching data from a server)
  setTimeout(() => {
    // Introduce a potential error scenario (e.g., 50% chance of failure)
    if (Math.random() < 0.5) { 
      callback("Data fetched successfully", null); // Success case
    } else {
      callback(null, "Error fetching data"); // Error case
    }
  }, 1000); // Simulate network latency
}

// Example usage:
fetchDataWithCallback((data, error) => {
  if (error) {
    console.log(error); // Log the error message
  } else {
    console.log("Received data:", data);
  }
});
