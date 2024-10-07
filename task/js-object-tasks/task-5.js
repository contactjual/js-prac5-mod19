
// Loop through an object and print the key-value pairs with their types

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true,
}

for(const keys in myObject){
    console.log(keys);
    console.log(`key: ${keys} | type: ${typeof myObject[keys]}`);
}


/**
out put:

key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean
*/