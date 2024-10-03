

// If a given string has either x, replace x by y. if the given string has X, replace it by Y.


const myString = 'luX soap';

// console.log(myString.includes('x'));

// myString[3]= "y";

// console.log(myString)


if(myString.includes('x')){
    console.log(myString.replace('x', 'y'));
}
else if (myString.includes('X')){
    console.log(myString.replace('X', 'Y'));
}