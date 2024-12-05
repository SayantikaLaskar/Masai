function createCounter() {
  let count = 0; 

  return {
    increment: () => {
      count++;
      console.log("Current count:", count);
    },
    decrement: () => {
      if (count > 0) {
        count--;
      }
      console.log("Current count:", count);
    },
    getCount: () => {
      return count;
    }
  };
}

// Example Usage:
const counter1 = createCounter();
counter1.increment(); // Output: Current count: 1
counter1.increment(); // Output: Current count: 2
counter1.decrement(); // Output: Current count: 1

const counter2 = createCounter();
counter2.increment(); // Output: Current count: 1
console.log(counter1.getCount()); // Output: 1 
console.log(counter2.getCount()); // Output: 1
