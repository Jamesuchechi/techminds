// stopping an interval

let count = 0;

const interval = setInterval(() => {

    count++;

    console.log(count);

    if (count === 15) {
        clearInterval(interval);
    }

},1000);