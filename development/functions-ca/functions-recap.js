// function that logs a single string

const stringText = () => {
    console.log ("Arjun created this")
}

stringText()


// function that takes a parameeter (string and uses it to console.log)

const sayName = (name) => {
    console.log("hello my name is " + name)
    //console.log (`hello my name is ${name}`)
}

sayName("bob")

// function that takes multiple params (numbers) + adds them together and prints to consolelog

const addNumbers = (number1, number2, number3) => {
    console.log (number1 + number2 + number3)
}

addNumbers (2,3,5)

//create a function that takes 2 numbers and multiplies them + returns result

const timesNumbers = (no1, no2) => {
    return no1 * no2
    //const result= timesNumbers (5,10)
}

console.log (timesNumbers(8,5))
// console.log(result)

