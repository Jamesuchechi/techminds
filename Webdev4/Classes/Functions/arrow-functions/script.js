//block scope
if (true) {
  let message = "Hello, World!";
  console.log(message); // This will work because 'message' is defined in this block
}
console.log(message); // This will throw an error because 'message' is not defined in this scope