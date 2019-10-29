let movieNames = prompt("Enter 3 movies with comma");
let arrayMovieNames = movieNames.split(', ');
console.log(arrayMovieNames);

//REVERSE STRING
function reverseString(inputString){
    let str = inputString;
    let arrayStr = inputString.split('');
    //console.log(arrayStr);
    let reverseString = arrayStr.reverse();
    //console.log(reverseString);
    return reverseString.join('');
}
let sentence = prompt("Enter a sentence to be reversed");
console.log(reverseString(sentence));

let string = prompt("enter a string");
console.log(reverseString(string));


