function startCountdown() {
  const seconds = parseInt(prompt("Enter the number of seconds to count down:"));

  let remainingTime = seconds;
  let isRunning = true;

  const intervalId = setInterval(() => {
    if (isRunning) {
      console.log(`Time remaining: ${remainingTime} seconds`);
      remainingTime--;

      if (remainingTime === 0) {
        clearInterval(intervalId);
        console.log("Countdown Complete!");
      }
    }
  }, 1000);

  // Check for user input every 100ms
  const checkForStop = setInterval(() => {
    if (isRunning && window.event.key === 's') { // Check for 's' key press
      clearInterval(intervalId);
      clearInterval(checkForStop);
      console.log("Countdown stopped by user.");
    }
  }, 100);
}

startCountdown();
