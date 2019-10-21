let sunday = 1;
let monday = 2;
let tuesday = 3;
let wednesday = 4;
let thursday = 5;
let friday = 6;
let saturday = 7;

// IF LOOP
const x = prompt("enter a number between 1 - 7");

if (x == 1){
    console.log("Today is Sunday");
}
else if (x == 2){
    console.log("Today is Monday");
}
else if (x == 3){
    console.log("Today is Tuesday");
}
else if (x == 4){
    console.log("Today is Wednesday");
}
else if (x == 5){
    console.log("Today is Thursday");
}
else if (x == 6){
    console.log("Today is Friday");
}
else if (x == 7){
    console.log("Today is Saturday");
}
else {
    console.log("Error: Number not between 1 - 7");
}


// USING SWITCH
const y = prompt("enter a number between 1 - 7");

switch(y){
    case 1:
        console.log("Today is Sunday");
        break;
    case 2:
        console.log("Today is Monday");
        break;
    case 3:
        console.log("Today is Tuesday");
        break;
    case 4:
        console.log("Today is Wednesday");
        break;
    case 5:
        console.log("Today is Thusrsday");
        break;
    case 6:
        console.log("Today is Friday");
        break;
    case 7:
        console.log("Today is Saturday");
        break;
    default:
        console.log("Error: Number not between 1 - 7");
        break;
}