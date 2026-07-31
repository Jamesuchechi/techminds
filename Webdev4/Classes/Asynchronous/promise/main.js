const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Payment successful");
    } else {
        reject("Payment failed");
    }

});

