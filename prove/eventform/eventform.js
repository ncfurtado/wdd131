const form = document.getElementById("ticketForm")
const ticketType = document.querySelector("#ticketType");
const studentIdContainer = document.querySelector("#studentIdContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");
const idInsert = ` 
           <div id="studentIdContainer" class="field full" hidden>
                <label for="studentId">Student ID #</label>
                <input id="studentId" name="studentId" type="text">
            </div>`
const accessCodeInsert =`
           <div id="guestAccessCodeContainer" class="field full" hidden>
                <label for="accessCode">Access Code</label>
                <input id="accessCode" name="accessCode" type="text">
            </div>`


// window.addEventListener('load', () => {
//     form.reset();
// });

ticketType.addEventListener('change', e => {
    e.preventDefault();
    const ticketTypeSelection = form.ticketType.value;
    const existing = document.getElementById("studentIdContainer")
    const existingII = document.getElementById("guestAccessCodeContainer")
    if (ticketTypeSelection === "student" && !document.getElementById("studentIdContainer")) {
        if (existingII) existingII.remove();
        document.getElementById("additional-insert").innerHTML += idInsert;
    }
    else if (ticketTypeSelection === "guest" && !document.getElementById("guestAccessCodeContainer")) {
        if (existing) existing.remove();
        document.getElementById("additional-insert").innerHTML += accessCodeInsert;
    }
    else {
        if (existing) existing.remove();
        else if (existingII) existingII.remove();
    }
})


function isDateValid() {
  const date = new Date(document.getElementById("availableDate").value);
  const todaysDate = new Date();
  return date > todaysDate; // Any return that has a logic statement in it returns a boolean and executes it 
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const ticketTypeSelection = form.ticketType.value;
    const accessCode = form.accessCode.value;
    const studentId = form.studentID.value;

    if (ticketTypeSelection === "") {
        output.textContent = "Please select a type, user!";
        return;
    }

    if (ticketTypeSelection === "guest" && accessCode !== "EVENT131") {
        output.textContent = "Please input a valid Access Code, user!";
        return;
    }

    if (ticketTypeSelection === "student" && studentId.length < 9) {
        output.textContent = "Student ID must be 9 digits.";
        return;
    }
    else if (ticketTypeSelection === "student" && studentId.length == 0);{
        output.textContent = "Please insert a student I#.";
    }

    if (!isDateValid()) {
        output.textContent = "Please choose a future date, ya rascal";
        return;
    }
});