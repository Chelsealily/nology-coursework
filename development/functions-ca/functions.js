// ** challenges

// make a function to calculate the perimeter of a rectangle 

const calculatePerimeter = (width, height) => {
    return width + width + height + height;
}

console.log (calculatePerimeter (1,1));

// create a function to calculate the area of a circle and print to console.

const calculateArea = (radius) => {
   
    const area = Math.PI * radius * radius;

    return area;

}

console.log (calculateArea(2));


// create a function to return the circumfrnece of a circle 

const calculateCircumference = (radius) => {

    const circumference = 2 * Math.PI * radius;
    return circumference
}

console.log (calculateCircumference(3));


// write a function named getDescription that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your statement to the console like so: "I am currently a X living in Y, and married to Z with N kids."
// call that function 3 times with 3 different values for the arguments.

const getDescription = (amountOfChildren, partnerName, location, jobTitle) => {

    const message = "I am currently a " + jobTitle + " living in " + location + ", and married to " + partnerName + " with " + amountOfChildren + " kids. ";

    console.log(message);

}

    getDescription (3, "Mary", "London", "Engineer");

    // calculate lifetime supply of snickers
    // write function name calculateSupply
    // takes 2 arguments age, amount per day
    // calculates teh amount consumed for the rest of life (based on a const max age)
    // outputs the results to the screen as " you will need X to last you until the ripe old age of Y"
    //call function 3 times with different values each time
    // accept floating point values for amount per day and round the result to a round number. 

    const calculateSupply = (currentAge, amountPerDay) => {

        const maxAge = 90;
        const lifetimeAmount = (amountPerDay * 365) * (maxAge - currentAge);
        const message = " you will need " + lifetimeAmount + " to last you until the ripe old age of " + maxAge;
        console.log (message);
    }

    calculateSupply (30, 5);
    calculateSupply (40,5);
    calculateSupply (75, 5);


// temperature converter - celsius to fahrenheit converter 

const calculateFahrenheit = (celsius) => {

    const convertedFahrenheit = (celsius * 9/5) + 32
    const message = celsius + " degrees C = " + convertedFahrenheit + " degrees F";
    console.log(message);

}

calculateFahrenheit (21);

// dog age calculator 

const ageInHumanYears = (humanAge) => {
    
    const ageInDogYears = humanAge * 7;

    const passage = "Your dog is " + ageInDogYears + "years old in dog years.";

    console.log (passage);

}

ageInHumanYears(5);
ageInHumanYears(17);


// create a coaches array

const coaches = ["Andy", "Sam", "Bex"];

console.log(coaches);
console.log (coaches[2]);


// create a pet array

const pets= ["Dog", "Cat", "Mouse", 2, true];
console.log(pets);
console.log(pets[0]);
console.log(pets[4]);

// create loop sample

for (let index = 0; index <5; index++) {
    console.log("The number is " + index);
}

// combine loops and arrays

let names = ["Andy", "Sam", "Bex", "Jonathan"];

for (let index=0; index < names.length; index++) {
    console.log(names[index]);
}