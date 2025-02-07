/* This programme creates a loop that makes
    seven calls to console.log to output 
    the following triangle.calls

    #
    ##
    ###
    ####
    #####
    ######
    #######
*/
/*
// Using a while loop
let result = ("");
let count = 0;
while (count < 7){
    result = result + ("#");
    count = count + 1;
    console.log(result);
}
*/


// Using a for loop
let result = ("");
count = 0;
for (result = (""); count < 7; count = count + 1){
    result = result + ("#")
    console.log(result);
    //console.log(result.length); //if you want to know the lenght of the value.
}


// Using if statements
