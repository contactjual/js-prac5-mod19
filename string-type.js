
var nam= "janina";
var bari= 'mone nai';
var thana= `bolbo na`;
var union= new String('None');

console.log(typeof nam);
console.log(typeof bari);
console.log(typeof thana);


console.log(typeof union);
console.log(union);






// array is mutable- means changeable
var array = ["ami", "toi", "sobai"];
console.log(array.length) // koto ghor jayga nise.
array[1]="sorry";  // this is different (output will be changed) betowen array and sting.
console.log(array);


// string is immutable- means not changeable
var string = "fine";
console.log(string.length);
string[1]="w"; // this is different (output will not be changed)
console.log(string);

var string = "fi ne";
console.log(string.length);
console.log(string[3]);