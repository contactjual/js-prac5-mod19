
const college = {
    nam: "RMC",
    class: ["11",'12','13'],
    events: "biggan mela",
    unique: {
        color: "blue",
        length: "100m",
    }
}

console.log(college);

console.log(college.events);

console.log(college.unique.color);

// college.unique[0]= red;

console.log(college.events[0]);

delete college.class;

console.log(college);
