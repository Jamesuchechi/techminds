// Sometimes we need functions to return values. In JavaScript, we can use the return statement to send a value back to the caller of the function. Here's an example:

function add(a, b) {
    return a + b; // This function returns the sum of a and b
}

let result = add(5, 3); // Calling the function and storing the returned value in result
console.log(result); // Output: 8

// We can also return other types of values, such as strings or objects.

function greet(name) {
    return "Hello, " + name + "!"; // This function returns a greeting message
}

let greeting = greet("Alice"); // Calling the function and storing the returned value in greeting
console.log(greeting); // Output: Hello, Alice!

// If a function does not have a return statement, it will return undefined by default.

function noReturn() {
    console.log("This function does not return anything.");
}

let noValue = noReturn(); // Calling the function
console.log(noValue); // Output: undefined

// Returning objects
function createUser(name, age) {
    return { username: name, userAge: age };
}

let user = createUser("Alice", 25);
console.log(user); // Output: { username: 'Alice', userAge: 25 }

// Accessing properties of the returned object
console.log(user.username); // Output: Alice
console.log(user.userAge); // Output: 25