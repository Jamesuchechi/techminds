// A callback is a function passed as an argument to another function so it can be executed later.

function greet(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

function goodbye() {
    console.log("see you soon!");
}

greet("James", goodbye);