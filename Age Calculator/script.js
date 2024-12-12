let userInput = document.getElementById("date")
let age_box = document.getElementsByClassName('age-calc')

userInput.max = new Date().toISOString().split("T")[0]


// Let's Write the function to calculate the age

function calculateAge() {
    // Clear previous age results
    let oldAge = document.getElementsByClassName('final-age')
    for (let i = 0; i < oldAge.length; i++) {
        oldAge[i].innerHTML = "";
    }



    // Get the user's birth date from the input
    let birthDate = new Date(userInput.value);

    let ud = birthDate.getDate();
    let um = birthDate.getMonth() + 1;
    let uy = birthDate.getFullYear();

    // Get the current date
    let currentDate = new Date();

    let cd = currentDate.getDate();
    let cm = currentDate.getMonth() + 1;
    let cy = currentDate.getFullYear();

    // Calculate years
    let years = cy - uy;

    // Adjust for incomplete years
    if (cm < um || (cm === um && cd < ud)) {
        years--;
    }

    // Calculate months
    let months = cm - um;
    if (cd < ud) {
        months--;
    }
    if (months < 0) {
        months += 12;
    }

    // Calculate days
    let days = cd - ud;
    if (days < 0) {
        // Get the number of days in the previous month
        let prevMonth = cm === 1 ? 12 : cm - 1;
        let daysInPrevMonth = new Date(cy, prevMonth, 0).getDate();
        days += daysInPrevMonth;
    }

    // Display the result
    let final = document.createElement("p")
    final.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
    final.classList.add("final-age");
    age_box[0].appendChild(final);
    // document.getElementById("age").innerHTML = `You are ${years} years, ${months} months, and ${days} days old.`;
}
