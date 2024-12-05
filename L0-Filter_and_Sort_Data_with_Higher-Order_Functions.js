function processStudents() {
  const students = [];

  while (true) {
    const name = prompt("Enter student name (or 'exit' to stop):");
    if (name.toLowerCase() === 'exit') {
      break;
    }
    const marks = parseInt(prompt("Enter student marks:"));
    students.push({ name: name, marks: marks });
  }

  const filteredStudents = students.filter(student => student.marks > 60);
  const sortedStudents = filteredStudents.sort((a, b) => b.marks - a.marks);
  const sortedNames = sortedStudents.map(student => student.name);

  return sortedNames;
}

const topStudents = processStudents();
console.log(topStudents);
