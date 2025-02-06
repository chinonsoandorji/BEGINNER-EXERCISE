// This Programme gets the even numbers from 0 to 12
/*
for (let number = 0; number <= 12; number + 2){
    console.log(number)
};
*/


/*
// This Programme solves 2 to the power of 10 (2^10)
let result = 1;
for (counter = 0; counter < 10; counter = counter + 1){
    result = result * 2
}
console.log(result);
*/

// Break Statement
// This programme finds a number that is both greater than 20 and divisible by 7

for (current = 20; ; current = current + 1){
    if (current % 7 == 0){
        console.log(current);
        break;
    }
}