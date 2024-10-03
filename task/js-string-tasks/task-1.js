
// Count how many times a string has the letter a

let myString = "Hello, I'm a A coderloft"

// console.log(typeof myString);

count = 0;

for (i = 0; i < myString.length; i++) {
    if (myString[i] === "a") {
        count++
    }
}
console.log(`${count} times has the letter "a" in the srting.`);


