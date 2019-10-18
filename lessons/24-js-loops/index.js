let sum = 0;

for(let a = 0; a < 1000; a++){
    sum = sum + a;
    if (sum > 400){
        break;
    }
    console.log(sum);
}

// Show numbers from 0 - 10
// FOR LOOP
console.log("For loop to show numbers from 0 to 10");
for (let a = 0; a<= 10; a++){
    console.log("a = ", a);
}

// DO LOOP
console.log("Do loop to show numbers from 0 to 10");

let a = 0;
do{
    console.log("a = ", a);
    a++;
} while(a <= 10);

//WHILE LOOP
console.log("While loop to show numbers from 0 to 10");

let b = 0;
while(b <= 10){
    console.log("b = ", b);
    b++;
}


// Show numbers from 100 - 0
// FOR LOOP
console.log("For loop to show numbers from 100 to 0");
for(let a = 100; a >= 0; a--){
    console.log("a = ", a);
}

//DO LOOP
console.log("Do loop to show numbers from 100 to 0");
let c = 100;
do(c >= 0){
    console.log("c = ", c);
    c-- ;
}

