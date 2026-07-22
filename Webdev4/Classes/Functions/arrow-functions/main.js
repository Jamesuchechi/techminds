// Arrow function //

const add = (a, b) => {
  return a + b;
};

let result = add(5, 4);

console.log(result);


//implicit return //
const square = (x) => x * x;
console.log(square(5));


//single parameter without parentheses
const double = x => x * 2;
console.log(double(5));

//scope
let school = "techminds academy";
function showSchool() {
  console.log(school);
}
showSchool();
console.log(school);



let score = 50;
function addbonus() {
  score += 10;
}
function applypenalty() {
  score -= 5;
}
addbonus();
applypenalty();
console.log(score);


//function scope
function calculategrades() {
  let total = 450;
  console.log(total);
}
calculategrades();
console.log(total); // This will throw an error because 'total' is not defined in this scope


