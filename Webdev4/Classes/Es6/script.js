// spread operators

const numbers = [1, 2 ,3];
const newNumbers = [...numbers];
console.log(newNumbers);

// merge arrays

const a = [1,2];
const b = [3, 4];
const c = [...a,...b];

console.log(c);

// object merging

const person = {
    name:"James"
};

const details = {
    ...person,
    age:25
};

console.log(details);

