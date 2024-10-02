

// slice 
var nam = "jualrana";
console.log(nam.slice(2, 5));



// split 
var line = "hello everyone what are you doing now";
console.log(line.split(''));

var line = "hello everyone what are you doing now";
console.log(line.split(' '));

var line = "hello everyone what are you doing now";
console.log(line.split('a'));

var friends = "rohim, korim, panko";
console.log(friends.split(','));




// join 
var mobile = ['nokia', 'vivo', 'iphone', 'pocco'];
console.log(mobile.join(''));
console.log(mobile.join(','));
console.log(mobile.join('-'));
console.log(mobile.join('|'));





// concat

var firstName = "Jual";
var lastName = "Rana";

var fullName = firstName + lastName;
console.log(fullName);

var fullName = firstName + ' ' + lastName;
console.log(fullName);

var fullName2 = firstName.concat(lastName);
console.log(fullName2);

var fullName2 = firstName.concat(" ").concat(lastName);
console.log(fullName2);





// includes

console.log(fullName.includes('j'));
console.log(fullName.includes('J'));