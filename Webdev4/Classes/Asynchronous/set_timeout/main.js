/* setTimeout(function () {

}, 4000);


setTimeout(() => {

}, 4000); */

console.log("Preparing food...");

setTimeout(() => {
    console.log("Food is ready!");
}, 5000);

console.log("You can set the table.");

// passing arguments

function greet(name) {
    console.log(`Hello ${name}`);
}

setTimeout(greet, 10000, "James");

greet("John");