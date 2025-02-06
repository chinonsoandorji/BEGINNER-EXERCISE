/*
let theNumber = Number(prompt("Pick a NUmber"));
if (!Number.isNaN(theNumber)){
    console.log("Your number is the square root of " + theNumber * theNumber);
}
*/

/*
if (1 + 1 == 2)
console.log("It's true");
// Output  → It's true
*/

/*
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)){
    console.log("The square root of the number is " + theNumber * theNumber);
}else{
    console.log("Hey. Why didn't you give me a number ? ");
}
*/

/*
let num = Number(prompt("Pick a number")) ;
if (num < 10){
    console.log("Small");
}else if (num < 100){
    console.log("Medium");
}else {
    console.log("Large");
}
*/

/*
console.log(0);
console.log(2);
console.log(4)
console.log(6);
console.log(8);
console.log(10);
console.log(12);
console.log("This is the output of all the even numbers between 0 and  12");
*/

/*
let number = 0;
while (number <= 12){
    console.log(number);
    number = number + 2;
}
*/

/*
let result = 1;
let counter = 0;
while (counter < 10){
    result = result * 2;
    counter = counter + 1;
}
console.log(result);
*/

/*
let yourName;
do {
  yourName = prompt("Enter your name");
}
while (!yourName)
console.log(yourName);
*/

/*
if (false != true){
    console.log("that makes sense");
    if (1 < 2){
        console.log("No surprise here !")
    }
}
*/

/*
for (let number = 0; number <= 12; number = number + 2){
    console.log(number);
}
*/

// this programme solves 2 to the power of 10 (2^10)
let result = 1;
for (counter = 0; counter < 10; counter = counter + 1){
    result = result * 2;
}
console.log(result);