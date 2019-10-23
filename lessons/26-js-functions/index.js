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