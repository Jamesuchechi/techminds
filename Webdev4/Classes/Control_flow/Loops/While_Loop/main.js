let x = 1;

while (x <= 10) {
    console.log(x);
    x++;
}


let password = prompt("Enter password:");
while (password !== "secret") {
    password = prompt("Enter password:");
}