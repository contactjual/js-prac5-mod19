

let myVersity = {
    isNational: true,
    avilable: ["physics", "chemistry", "zoology", "botany", "others"],
    isCampus: true,
    greatTeacher: "unknown",
    isCantain: false,
    exams: {
        nam: "incourse",
        date: "next month",
        isAttends: true,
    }
}

console.log(myVersity);


// dot notation or dot use kore value acces kora

let edu = myVersity.greatTeacher;
console.log(edu);

console.log(myVersity.greatTeacher);



// third bracket diye value access kora 

console.log(myVersity["greatTeacher"]); // mostly use when nam er modde space/-/_/: ettadi thakle





// to update value 

// myVersity.greatTeacher = remembers;
// myVersity[greatTeacher] = remembers;

// console.log(myVersity.greatTeacher);


let udt1 = {
    primary: "HTML",
    secondery: "CSS",
}
console.log(udt1.primary);

udt1.primary = "Hyper Text Markup Language"
udt1["secondery"] = "Cascading Style Shit"

console.log(udt1.primary);
console.log(udt1.secondery);
