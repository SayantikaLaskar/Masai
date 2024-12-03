function squareAndCube() {
  const num = parseInt(prompt("Enter a number:"));
  const result = { square: num * num, cube: num * num * num };
  console.log(result);
}

squareAndCube();
