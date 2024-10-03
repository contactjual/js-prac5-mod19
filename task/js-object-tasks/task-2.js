
// For this object below add a property named passenger capacity with value 5

let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car["pessenger capcity"] = 5;
// or 
Object.assign(car, {"passenger capacity": 5});
// or 
let newCar = Object.assign(car, {"passenger capacity": 5});

// car.defineProperty(car, "passenger", {value: 5});

console.log(car);
console.log(newCar);