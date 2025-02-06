// This program uses a do loop to ask the user 
// for name; it repeats until the user enters a non empty
// string.

let yourName;
do {
    yourName = prompt("Who are you?");
}
while (!yourName);
console.log(yourName);