/*
    This program prints all numbers 1 to 100;
    print "Fizz" for numbers divisible by 3;
    print "Buzz" for numbers divisible by 5;
    print "FizzBuzz" for numbers divisible by 3 and 5;
    print "Fizz" or "Buzz" for numbers divisible by only one of those.
*/

for (let number = 1; number <= 100; number = number +1 ){
    
    if (number % 3 == 0){
        console.log("Fizz");
    }else if (number % 5 == 0){
        console.log("Buzz");
    }else if(number % 3 == 0 && number % 5 == 0){
        console.log("FizzBuzz");
    }/*else if (number % 3 == 0){
        console.log("Fizz");
    }else if (number % 5 == 0){
        console.log("Buzz");
    }*/else{
        console.log(number);
    }
    
}
