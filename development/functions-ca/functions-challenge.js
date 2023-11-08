/*
// create function that shows true if pos and false if neg

function isNumberPositive(num) {
    if (Math.sign(num) === 1) {
        console.log (true);
    } else if (Math.sign(num) === -1) {
        console.log (false);
    }    
} 



isNumberPositive(-1);
isNumberPositive(10); 


// write function that takes a number of days and converts into age

const convertDaysToAge = (days) => {
    const daysInYears = (days / 365);
    return daysInYears
}

console.log (convertDaysToAge(3650));
console.log (convertDaysToAge(6570));


// write a function that takes 3 numbers and returns the largest of the 3

const getLargestNumber = (num1, num2, num3) => {
    console.log (Math.max(num1,num2,num3));
}

getLargestNumber(2,1,4);
getLargestNumber(6,2,3);

// write a function that takes an array of names and returns the last name from the arrays
// getLastName([”Charlie”, “Rob”, “Andy”]); // returns “Andy”
// getLastName(["Ash","Stu"]); // returns "Stu"

let getLastName = ["Charlie", "Rob", "Andy"];
   let lastItem = getLastName[getLastName.length - 1];
console.log (lastItem);


// different approach? 

var test = [];
var i;

 function getLastName (input1) {
    
    for (i = 0; i < input1.length;){
        var test = [];
        test.push(input1[i]);
        i++
    }

    console.log(test);
 }

 getLastName(["Ash","Stu"])
 getLastName(["Charlie", "Rob", "Andy"])
 ;
*/
 // another way? 


function getLastName (input1) {
    for (i = 0; i < input1.length; ){
        if (i = (input1.length - 1)) {
            console.log(input1[i]);
        } else {
                console.log("") }
        i++
        }
    }

getLastName(["Ash","Stu"])
getLastName(["Charlie", "Rob", "Andy"])

/*
// write a function that takes an array of numbers and returns true if all numbers are pos but false if one of more numbers are negative in the array.
// allNumbersPositive([2,4,5]); // returns true
// allNumbersPositive([-5,4,6]); // returns false

function allNumbersPositive (v1,v2,v3) {

if (Math.sign(v1,v2,v3) === 1) {
    console.log (true);
} else if (Math.sign(v1,v2,v3) === -1) {
    console.log (false);
}    
} 
 }
allNumbersPositive(2,4,5);
allNumbersPositive(-5,4,6); */