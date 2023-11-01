function calculateYearsUntilRetirement(event) {
    const currentAge = event.target.value;

    const yearsLeft = 65 - currentAge;
    alert(yearsLeft)
}

function getGreetingInFrench(event) {
    const greeting = event.target.value;

if (greeting == "Hello") {
    alert ("Bonjour")
} else if (greeting == "Goodbye") {
    alert ('Au Revoir')
} else {
    alert ('not recognised')
}

}

function convertMinutesToSeconds(event) {
    const minutesInput = event.target.value;

    const secondsValue = 60 * minutesInput;
    alert(secondsValue)
}