// grade percentage checker 

function handleCalculateGrade(event) {

    let grade = event.target.value;

    if (!grade) {
        return;
    }

    // stops lower/upper case tricking the code
    grade = grade.toUpperCase()

    let percentage;
    switch (grade) {
    case "A":
        percentage = "90-100%";
        break;
    case "B":
        percentage = "70-90%";
        break;
    case "C":
        percentage = "50-75%";
        break;
    case "D":
        percentage = "25-50%";
        break;
    case "E":
        percentage = "0-25%";
        break;

    }

    alert ("The percentage was " + percentage);
}

// my pos and neg calc

function handleNegOrPos(event) {
    let TheNo = event.target.value;

    if (TheNo > 0) {
        alert ("It is positve");
    } else if (TheNo < 0) {
        alert ("It is negative");
    } else {
        alert ("It is undefined");
    }
}

// andy's pos and neg if statement from the video 
    const myNumber =3;
    if (myNumber >=0) {
        console.log("its positive")
    } else{
        console.log("its negative")
    }


// days until weekend switch case 

function handleDaysUntilWeekend(event) {

    let day = event.target.value;

    // stops lower/upper case tricking the code
    day = day.toLowerCase()

    let inputDay;
    switch (day) {
    case "monday":
        inputDay = "6 days until w.e";
        break;
    case "tuesday":
        inputDay = "5 days until w.e ";
        break;
    case "wednesday":
        inputDay = "4 days until w.e";
        break;
    case "thursday":
        inputDay = "3 days until w.e";
        break;
    case "friday":
        inputDay = "2 days until w.e";
        break;
    case "saturday":
        inputDay = "0 days until w.e";
        break;   
    case "sunday":
        inputDay = "0 days until w.e";
        break; 
    default: 
        inputDay= "SORRY ! Not specified day"
        break;
    }

    alert ("there are " + inputDay);
}


// swtich case for prices of veggies at supermarket potatoes and carrots same price per kg but broccoli cabbage and asparagus diff 

function handleVegPricePerKg(event) {

    let veggies = event.target.value;

    let veggiePrice;
    switch (veggies) {
    case "Potatoes":
    case "Carrots":
        veggiePrice = "£2/KG";
        break;
    case "Broccoli":
        veggiePrice = "£1.90/KG";
        break;
    case "Cabbage":
        veggiePrice = "£1.75/KG";
        break;
    case "Asparagus":
        veggiePrice = "£1.95/KG";
        break;
    }

    alert ("Price = " + veggiePrice);
}

