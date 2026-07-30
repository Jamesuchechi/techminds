fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users => {
    const list = document.getElementById("users");
    users.forEach(user=>{
        list.innerHTML+= '<li>${user.name}</li>';
    });
}); 