// API - Applicatrion programming interface

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users => {
    console.log(users);
});