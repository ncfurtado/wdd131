// THis retrieves 
const form = document.querySelector("#fsyForm");
const travelRange = document.querySelector("#travelRange");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");
const campusBoxes = document.querySelectorAll('input[name="campus"]');  // console.log(form)

// If the user selects "one campus",
// but doesn't select ANY campuses
// Display the message "select one campus"

// Helper Function
function getCheckedCampuses(campuses) {
  return Array.from(campuses)
              .filter(campus => campus.checked)
              .map(campus => campus.value);
}

function isDateValid() {
  const date = new Date(document.getElementById("availableDate").value);
  const todaysDate = new Date();
  return date > todaysDate; // Any return that has a logic statement in it returns a boolean and executes it 
}

form.addEventListener('submit', event => {
    event.preventDefault();
    const campusSelection = form.travelRange.value;
    const campuses = campusBoxes;
  // console.log(campuses);
if (campusSelection === "one" && getCheckedCampuses(campuses).length === 0) {
  output.textContent = "Please select one campus, user!";
  return;
}
if (campusSelection === "many" && getCheckedCampuses(campuses).length <= 1) {
  output.textContent = "Please select at least two campuses, friendo.";
  return;
}
if (!isDateValid()) {
  output.textContent = "Please choose a future date, ya rascal";
  return;
}
  
    // console.log(event);
    // console.log(form.firstName.value);
    // console.log(form.lastName.value);
    // console.log(form.email.value);
})