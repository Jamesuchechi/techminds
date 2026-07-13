let day = "Monday";

switch(day){

    case "Monday":
        console.log("Monday");

    case "Tuesday":
        console.log("Tuesday");

    case "Wednesday":
        console.log("Wednesday");

    default:
        console.log("Dont ask me")

}

let marketday = 'Friday';

switch(marketday){
    case 'Tuesday':
    case 'Thursday':
        console.log("Things are always cheaper during these days")
        break;

    default:
        console.log("Things are expensive today")
}