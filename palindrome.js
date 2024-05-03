// User enters a word

let wordEntry = prompt("Please enter a word and we'll check if its a palindrome");
console.log("You have entered: " + wordEntry);

// Make into lower case
let lowerCaseWord = wordEntry.toLowerCase();

// Split the word
let wordEntryArray = lowerCaseWord.split("");

let i = 0; 
let isPalindrome = true;

// Start a while loop to check if the word is a palindrome
while (i <= Math.floor(wordEntryArray.length / 2)) {
    if (wordEntryArray[i] !== wordEntryArray[wordEntryArray.length - 1 - i]) {
        // If they don't match, set isPalindrome to false and break out of the loop
        isPalindrome = false;
        break;
    }
    i++;
}

// Output the result

if (isPalindrome) {
    console.log("The word " + wordEntry + " is a palindrome");
} else {
    console.log("The word " + wordEntry + " is not a palindrome");
}