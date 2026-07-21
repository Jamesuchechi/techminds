function greet(name){
    console.log(" Good Morning, " + name + "Welcome to Techminds Academy");
}

greet("Emmanuel");
greet("Alice");
greet("Bob");
greet("Charlie");
greet("David");
greet("Eve");
greet("Frank");
greet("Grace");
greet("Hank");
greet("Ivy");
greet("Jack");
greet("Kathy");
greet("Laura");
greet("Mike");
greet("Nina");

// multiple parameters
function introduce(name, age){
    console.log("Hello, my name is " + name + " and I am " + age + " years old.");
}

introduce("Emmanuel", 25);
introduce("Alice", 22);
introduce("Bob", 30);

// Default Parameters
function slap(name="Mshelia") {
    console.log("Slap " + name + " on the face");
}

slap();
slap("Emmanuel");
slap("Alice");
slap("Bob");