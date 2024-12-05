function processEmployees() {
  const employees = [];

  while (true) {
    const name = prompt("Enter employee name (or 'exit' to stop):");
    if (name.toLowerCase() === 'exit') {
      break;
    }

    const tasksCompleted = parseInt(prompt("Enter number of tasks completed:"));
    const rating = parseFloat(prompt("Enter employee rating:"));

    employees.push({ name: name, tasksCompleted: tasksCompleted, rating: rating });
  }

  // 1. Filter employees with more than 5 tasks completed
  const filteredEmployees = employees.filter(employee => employee.tasksCompleted > 5);

  // 2. Map to employee names and performance levels
  const mappedEmployees = filteredEmployees.map(employee => ({
    name: employee.name,
    performanceLevel: employee.rating > 4.5 ? "Excellent" : (employee.rating >= 3 ? "Good" : "Needs Improvement")
  }));

  // 3. Sort employees by performance level
  const sortedEmployees = mappedEmployees.sort((a, b) => {
    const order = { "Excellent": 1, "Good": 2, "Needs Improvement": 3 };
    return order[a.performanceLevel] - order[b.performanceLevel];
  });

  // 4. Return the sorted array
  return sortedEmployees;
}

const topPerformers = processEmployees();
console.log(topPerformers);
