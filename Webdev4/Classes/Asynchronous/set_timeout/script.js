// clear timeout 

const timer = setTimeout(() => {
    console.log("This won't run");
}, 3000);

clearTimeout(timer);