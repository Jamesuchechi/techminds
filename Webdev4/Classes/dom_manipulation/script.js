

console.log(document);

console.log("-------------------------");


// Selecting by ID
const title = document.getElementById("main-title");

console.log("Selected with getElementById()");
console.log(title);

console.log("-------------------------");

// Selecting by ID using querySelector
const title2 = document.querySelector("#main-title");

console.log("Selected with querySelector('#main-title')");
console.log(title2);

console.log("-------------------------");

// Selecting by Class
const subtitle = document.querySelector(".subtitle");

console.log("Selected by class");
console.log(subtitle);

console.log("-------------------------");

// Selecting by Tag Name
const firstHeadingTwo = document.querySelector("h2");

console.log("Selected first h2");
console.log(firstHeadingTwo);

console.log("-------------------------");

// Selecting a Nested Element
const aboutParagraph = document.querySelector(".card p");

console.log("Nested selector");
console.log(aboutParagraph);

console.log("-------------------------");

// Selecting a Button
const button = document.getElementById("btn-start");

console.log("Button");
console.log(button);

console.log("-------------------------");

// Selecting the Footer Paragraph
const footer = document.querySelector("footer p");

console.log("Footer");
console.log(footer);

console.log("-------------------------");

