// Nested conditional statements

let age = 12;
let hasVC = false;

if(age <= 18){
    if(hasVC){
        console.log("Go ahead and cast your vote");
    }
    else{
        console.log('Not eligible');
    }
}


let username = prompt("What is your username");
let password = "1234ms";
let isActive = true;

let correctusername = "victor";
let correctpassword = "1234ms";

if (correctusername === username) {
    if (correctpassword === password) {
        if (isActive === true) {
    
    console.log("username is correct");
    console.log("password is correct") ;
    console.log("true");
}   else {
    console.log("default username");
    console.log("default password");
    console.log ("account has never been active");

} 
    } 
}