
// EVEN NUMBER FUNCTION
function evenNumbers(start, end){
    for (let i = start; i <= end; i++){
        if (i % 2 == 0){
            console.log(i);
        }
    }  
}

evenNumbers(0, 100);

// SHOW USER FUNCTION
function showUser(){
    let Name = "Rajini";
    console.log(Name);
    const Age = 30;
    console.log(Age);
    const phoneNumber = 762768732;
    console.log(phoneNumber);
    const street = "Molland Lane";
    console.log(street);
    const postalCode = "s7m1l2";
    console.log(postalCode);
    let areYouMarried = true;
    console.log(areYouMarried);

}
showUser();

//EVEN NUMBER FUNCTION CALLED 5 TIMES
let repeat = function(start, end) {
    for (let i = start; i <= end; i++){
        if (i % 2 == 0){
            console.log(i);
        }
    }  
}
repeat(0,10);
console.log("CALLING FUNCTION 5 TIMES");
for (let count = 0; count < 5; count++){
    repeat(0,10);
}


//FIBONACCI SERIES

let fibonacci = function(startValue1, startValue2, count){
    let a = startValue1;
    console.log(a);
    let b = startValue2;
    console.log(b);
    
    for (let x = 0; x < count; x++){
        sum = a + b;
        console.log(sum);
        a = b;
        b = sum;
    }
}

fibonacci(0, 1, 10);


//SHOW NAME
let showName = function(){
    let name = "rajini"
    console.log(`==============`);
    console.log(`=   ${name}   =`);
    console.log(`==============`);
}

showName();
showName();

