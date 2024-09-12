alert("Enter 2 numbers to see if the first is greater than the second");

let firstNumber = prompt("Enter first number :");
console.log("First number :", firstNumber);
let secondNumber = prompt("Enter second number :");
console.log("Second number :", secondNumber);

result = confirm(firstNumber > secondNumber );
console.log("Is first number greater than second ? ", result);