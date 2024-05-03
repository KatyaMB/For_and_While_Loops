// Ask for a number

let number = prompt(`Please enter a number`);
console.log(`You have entered ` + number);

// Convert the number to an array of digits
let array = number.split("");

// Check if the number has at least two digits
if (array.length >= 2) {
    // Swap the second and last digits using a for loop
    let newNumber = "";
    for (let i = 0; i < array.length; i++) {
        if (i === 1) {
            newNumber += array[array.length - 1];
        } else if (i === array.length - 1) {
            newNumber += array[1];
        } else {
            newNumber += array[i];
        }
    }
    console.log(`Your new number is: ` + newNumber);
} else {
    console.log(`The number must have at least two digits.`);
}