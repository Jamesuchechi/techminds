let age = 15;
if (age >= 18) {
    console.log("You are an adult and can vote.");
} else {
    console.log("You are a minor and can not vote.");
}

let score = 50;

if (score >= 90) {
    console.log("You got an A!");
} else if (score >= 80) {
    console.log("You got a B!");
} else if (score >= 70) {
    console.log("You got a C!");
} else if (score >= 60) {
    console.log("You got a D!");
} else {
    console.log("You got an F!");
}


let Mathscore = 95;

if (Mathscore >= 50) {
    console.log("You passed the Math exam!");
}else if (Mathscore >=90) {
    console.log("You got an A in Math!");
}


// what javascripts considers true(truthy)
let name = "James";
if (name) {
    console.log("Hello, " + name + "! Your name exists.");  // truthy
}

// what javascripts considers false(falsy)
let emptyString = "";
if (!emptyString) {
    console.log("The string is empty.");  // falsy
}

