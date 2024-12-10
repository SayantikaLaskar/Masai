console.log("Begin"); 

Promise.resolve()
  .then(() => {
    console.log("Promise Task"); 
  });

console.log("End");

setTimeout(() => {
  console.log("Timeout Task");
}, 0);
