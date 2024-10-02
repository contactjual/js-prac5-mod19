const mobile = {
    price: "15k",
    brand: "smsung",
    color: "black",
    isNew: true,
}

for (const prop in mobile) { // object er jonno in, array er jonni of use kora hoy.
    console.log(prop);
    console.log(mobile[prop]); // show the property's value as loop
}
const keys = Object.keys(mobile);
console.log(keys);



for (const key of keys){
    console.log(key, mobile[key]);
}