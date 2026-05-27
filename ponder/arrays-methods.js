let names = ['Nark', 'Mathen', 'Nathank', 'Markthaniel'];
console.log(names)

console.log(names[2])

let grades = [80, 20, 55, 100];
console.log(grades);

let numbers = ["five", 9, 6, "three"];
console.log(numbers);

let studentName = "Brother Warner";
let classes = ['WDD131', 'CSE110']
let studentGrades = [67, 88]

// Here is an object
let student = {
    name: "Brother Warner",
    classes: ["WDD131", "CSE110"],
    grades: [67, 88]
}
console.log(student.name);
names.forEach((name) => {
    //runs this function one for every element in the array
    // one at a time
    console.log(name);
});

// Map Function!
let newNames = names.map((name) => {
    return name + " Hatchley";
});
console.log(newNames);

// Filter Function!
let filteredName = names.filter((name) => { 
    // if this is true, then it would return this
    return name[0] === 'M';
})
console.log(filteredName);

let indexNumber = names.indexOf("Nark");
let selectedIndexName = names[indexNumber];
console.log(indexNumber + " " + selectedIndexName);

const total = grades.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log("Total: " + total);
function addTen(grade) {
    if (grade > 100) {
        return grade + 10;
    }
    else {
        return grade
    }
        
}
console.log("Edited grades: " + grades)