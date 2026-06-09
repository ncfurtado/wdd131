// Javascript objects
// With objects, the const keyword means const cannot point to another
// thing in memory, but its attributes can be edited! It's a little 
// nebulous 
const course = {
    code: "WDD 131",
    name: "Dynamic Web Fundamentals",
    sections: [
        {
            sectionNum: "1",
            roomNum: "STC 247",
            enrolled: 24,
            days: "TTh",
            instructor: 'Brother Keeres'
        },
        {
            sectionNum: "2",
            roomNum: "STC 112",
            enrolled: 3,
            days: "TTh",
            instructor: 'Brother Alvey'
        }
    ],
    enrollStudent: function (sectionNum) {
        // finds the section from the array
        // enroll one more student into that section
        
        // this line makes sure we select just the "sectionNum" using the filter function
        const sectionIndex = this.sections.findIndex(section =>  section.sectionNum == sectionNum);
        this.sections[sectionIndex].enrolled++;
        // section.forEach((section) => section.enrolled++)
        renderSections(this.sections);
    }
}

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(course.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    course.enrollStudent(sectionNum);
});