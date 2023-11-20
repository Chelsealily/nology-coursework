/* const coaches = ["Ollie", "Charlie", "Rob", "Sam"]

console.log(coaches[2]);
console.log(coaches[0]);

// console.log(coaches.pop());

coaches.pop()

console.log(coaches);

// push
coaches.push("Nilum")
console.log(coaches);

coaches.shift()
console.log(coaches)

coaches.unshift("Hei")
console.log(coaches)

 for (let index=0; index<6; index++) {
    console.log("the index is " + index)
 } 

const coaches = ["Dan", "Jake", "Josie"];

for (let index=0; index <coaches.length; index++) {
    const coach = coaches [index];
    console.log("Hey there " + coach + " wave")
}

*/

// - Create a script that will use a loop to 
// iterate through an array of scores (numbers) 
//and log to the console "12 is a big score!" 
//or "50 is a big score!" for each score 
//that is greater than **10**.

 

 const numbers = [8, 9, 12, 50, 67, 433];

 /*for (let i=0; i < myScores.length; i++) {
    if (myScores[i] > 10) {
        console.log (`${myScores[i]} is a big score`)
    }
 }*/

 const printBigScore = (myScores, threshold) => {
    for(let index=0; index < myScores.length; index++) {
        if (myScores[index] > threshold) {
            console.log(`${myScores[index]} is a big number`)
        }
    }
 }

 printBigScore (numbers,50)