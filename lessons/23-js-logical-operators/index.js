const currentHour = prompt("Enter the current hour (out of 0-23)");

if (currentHour < 0 || currentHour > 23) {
    alert("incorrect input");
} else if (currentHour < 8 || currentHour >= 18) {
    alert("Outside of office hours");
} else if (currentHour >= 8 && currentHour <= 18) {
    alert("we are open");
}