
// Capitalize Every first Letter of each word in a String



let mySelf = "hi this is a codeloft";

// console.log(mySelf.charAt(0).toUpperCase() + mySelf.slice(1));
// console.log(mySelf[0].toUpperCase() + mySelf.slice(1));


let capitalizedString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();  // don't clear "(str) =>" and "slice(1)".
let words = mySelf.split(' ').map(capitalizedString);
let capitalizedSentence = words.join(' ');
console.log(capitalizedSentence);