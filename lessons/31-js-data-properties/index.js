//let movieNames = prompt("Enter 3 movies with comma");
//let arrayMovieNames = movieNames.split(', ');
//console.log(arrayMovieNames);


let sentence = prompt("Enter a sentence to be reversed");
// let arraySentence = sentence.split(', ');
// console.log(arraySentence);
// let reverseSentence = arraySentence.reverse();
// console.log(reverseSentence);

function reverseString(inputString){
    let str = inputString;
    let arrayStr = inputString.split('');
    console.log(arrayStr);
    let reverseString = arrayStr.reverse();
    //console.log(reverseString);
    return reverseString;
}

console.log(reverseString(sentence));

let string = prompt("enter a string");

console.log(reverseString(string));


