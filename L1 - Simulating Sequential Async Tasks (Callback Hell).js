function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 complete");
    callback();
  }, 1000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 complete");
    callback();
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 complete");
    callback();
  }, 1000);
}

function task4() { 
  setTimeout(() => {
    console.log("Task 4 complete");
    console.log("All tasks completed"); 
  }, 1000);
}

task1(() => {
  task2(() => {
    task3(() => {
      task4();
    });
  });
});
