
// Count how many times a string has the letter a or A

let myString = "Hello, I'm a A coderloft a"

count = 0;

for (i =0; i < myString.length; i++){
    if(myString[i].toLowerCase() === "a"){
        count++;
    }
}

console.log(`the letter a or A has ${count} times.`)