let guess;

const secret = 7;

do{

    guess = Number(prompt("Guess the number"));

}while(guess !== secret);

console.log("Correct!");