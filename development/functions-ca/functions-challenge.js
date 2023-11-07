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