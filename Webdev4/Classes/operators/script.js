let result = 5 + 6;
console.log(result);

// Arithemetic Operators
// +, -, *, /, %, **

let a = 11;
let b = 5;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus
console.log(a ** b); // Exponentiation

// string concatenation

let firstName = "James";
let lastName = "Okpara";
let middleName = "Uchechi";

console.log(lastName + " " + firstName + " " + middleName);

// Assignment Operators
// =, +=, -=, *=, /=, %=

let x = 10;
x += 5; // x = x + 5
console.log(x);

x -= 3; // x = x - 3
console.log(x);

x *= 2; // x = x * 2
console.log(x);

x /= 4; // x = x / 4
console.log(x);

x %= 3; // x = x % 3
console.log(x);



// Comparison Operators
// ==, ===, !=, !==, >, <, >=, <=

let num1 = 10;
let num2 = "10";

console.log(num1 == num2); // true (loose equality)
console.log(num1 === num2); // false (strict equality)

console.log(num1 != num2); // false (loose inequality)
console.log(num1 !== num2); // true (strict inequality)

console.log(num1 > 5); // true
console.log(num1 < 20); // true
console.log(num1 >= 10); // true
console.log(num1 <= 10); // true

// Logical Operators
// Logical AND (&&), Logical OR (||), Logical NOT (!)

let age = 20;
let hasID = true;

console.log(age >= 18 && hasID); // true (both conditions are true)
console.log(age >= 18 || hasID); // true (at least one condition is true)
console.log(!hasID); // false (negation of hasID)

// Unary Operators
// typeof, delete, void, +, -, ++, --

let num = "5";
console.log(typeof num); // "string"

let person = { name: "Alice", age: 25 };
delete person.age; // Deletes the age property from the object
console.log(person); // { name: "Alice" }

let value = 10;
console.log(+value); // 10 (unary plus)
console.log(-value); // -10 (unary minus)

let pos = +"10"; // Converts string to number
console.log(pos); // 10

let nega = -"65"; // Converts string to number and negates it
console.log(nega); // -65

let count = 10;
count++; // Increment
console.log(count); // 1

count--; // Decrement
console.log(count); // 0



