function greet() {
    console.log("Hello, World!");
}
function run(task) {
    task();
}
run(greet);

// call back function

function airtime(callback) {
    console.log("Buying Airtime");
    callback();
}
function success() {
    console.log("Airtime purchased successfully");
}
airtime(success);


// anonymous function
airtime(function () {
    console.log("Airtime purchased successfully");
});


// array for numbers //
const numbers = [1, 2, 3,4];
const doubled = numbers.map(number => number * 2);
console.log(doubled);