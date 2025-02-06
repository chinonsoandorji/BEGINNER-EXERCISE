// 1. INTRODUCTION

// Strings
console.log("This is a string")
// Result = This is a string

// Numbers
console.log(12 + 2 * 4)
// Result = 20

// Special numbers 
console.log(0 / 0)
// Result = NaN (Not a Number)

// String Concatenation
console.log("Hello Everyone! " + "My name is Emma, Have a lovely day")

// Using templete Literals ${}
console.log(`Half of 100 is ${100 / 2}`)
console.log(`The modulo of 10  divided by 3 is ${10 / 3}`)

// Unary Operator
// typeof
console.log(typeof "Guess what Am made of")
console.log(typeof 20)

// The minus operator can be used as both unary and binary operator
console.log(-(6 - 10))

// Boolean Values True or False
console.log(5 > 4)
console.log(5 < 4)

// Manipulating Strings with Boolean
console.log("Aardvark" < "Zoroaster")
console.log("Aardvark" > "Zoroaster")
console.log("Itchy" != "Scrachy")
console.log("Apple" == "Orange")

// The NaN is not equal to itself
console.log(NaN == NaN)
console.log("NaN is supposed to denote the result of a nonsensical computation, and as such, it isn’t equal to the result of any other nonsensical computations.")

// Logical Operators and, or, not
// and → &&
console.log(true && false)
console.log(true && true)

// or → ||
console.log(true || false)
console.log(false || false)

// Not → !
console.log("Not is a Unary Operator ")
console.log(1 + 1 == 2 && 10 * 10 < 50)

// Tenary Operator / Conditional Operator
console.log(true ? 1 : 2)
//  → Will give you 1; when the condition is true it picks the value at the middle (1)

console.log(false ? 1 : 2)
//  → Will give you 2; when the condition is false it picks the value at the right (2)


// AUTOMATIC TYPE CONVERSION
console.log("console.log(8 * null), will give you 0")
console.log(8 * null)
//  → 0

console.log("console.log('5' - 1), will give you 4")
console.log("5" - 1)
//  → 4

console.log("console.log('5' + 1), will give you 51; funny right!!")
console.log("5" + 1)
//  → 51

console.log("console.log('five' * 2), will give you NaN, This is better LOL")
console.log("five" * 2)
//  → NaN

console.log(false == 0)
// → true

//Accidental Type conversion
console.log(null == undefined)
// → true

console.log(null == 0)
// → false

// Testing for real values
console.log(null == 10)
// → false

// Precisely equal to 
console.log(false === 0)
// → false
console.log(10 !== 2)
//→ true

// Short Circuiting Logical Operators
console.log(null || "User")
// → true (this is true cos the || returns true if the value on the left can be converted to Boolean and if false it returns the value on the right. )

console.log("Agnes" || "Orji")
// → Agnes (this is Agnes cos it is not a boolean value thus false → value on the right. )

//This is Useful when the result is supposed to be empty, you can use || to return a replacement value instead
console.log("" || "Replace Me!")


/*let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " + theNumber * theNumber);
*/

let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
    console.log("Your number " + theNumber + " is the square root of " + theNumber * theNumber);
}else {
    console.log("Hey!, Why didn't you give me a number");
}
