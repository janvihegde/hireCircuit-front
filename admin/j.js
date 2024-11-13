document.getElementById("Status1").onclick = function() {
    this.classList.toggle("clicked"); 
};
document.getElementById("Status2").onclick = function() {
    this.classList.toggle("clicked"); 
};

// Function to get the start and end of the current week
function getCurrentWeek() {
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay()); // Sunday as start
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // Saturday as end
    return { startOfWeek, endOfWeek };
}

// Function to check if a date is within this week
function isDateInCurrentWeek(date) {
    const { startOfWeek, endOfWeek } = getCurrentWeek();
    return date >= startOfWeek && date <= endOfWeek;
}

// Function to check if a date is in the future
function isFutureDate(date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to start of the day
    return date > today;
}

// Show the form when "Add New Activity" button is clicked
function showForm() {
    document.getElementById("entryForm").style.display = "block";
}

// Hide the form
function hideForm() {
    document.getElementById("entryForm").style.display = "none";
}

// Function to increment card values
function updateCard(cardClass, incrementBy) {
    const card = document.querySelector(`.${cardClass} p`);
    card.textContent = parseInt(card.textContent) + incrementBy;
}

// Add new row to the table and update card counters
function addNewRow() {
    // Get the form values
    const dateInput = document.getElementById("newDate").value;
    const company = document.getElementById("newCompany").value;
    const status = document.getElementById("newStatus").value;

    // Check if all fields are filled
    if (!dateInput || !company) {
        alert("Please fill all fields.");
        return;
    }

    // Convert date string to Date object
    const date = new Date(dateInput);

    // Select the table body
    const tableBody = document.querySelector(".table-section tbody");

    // Create a new row
    const newRow = document.createElement("tr");

    // Insert date cell
    const dateCell = document.createElement("td");
    dateCell.textContent = dateInput;
    newRow.appendChild(dateCell);

    // Insert company cell
    const companyCell = document.createElement("td");
    companyCell.textContent = company;
    newRow.appendChild(companyCell);

    // Insert status cell with a button
    const statusCell = document.createElement("td");
    const statusButton = document.createElement("button");
    statusButton.textContent = status;
    statusButton.onclick = function() {
        toggleStatus(this);
    };
    statusCell.appendChild(statusButton);
    newRow.appendChild(statusCell);

    // Append the new row to the table
    tableBody.appendChild(newRow);

    // Update card counts based on date
    if (isDateInCurrentWeek(date)) {
        updateCard("card-this-week", 1);
    }
    if (isFutureDate(date)) {
        updateCard("card-upcoming-drives", 1);
    }

    // Clear the form and hide it
    document.getElementById("entryForm").reset();
    hideForm();
}

// Toggle the status between "OPEN" and "CLOSED"
function toggleStatus(button) {
    if (button.textContent === "OPEN") {
        button.textContent = "CLOSED";
        button.style.backgroundColor = "red";
    } else {
        button.textContent = "OPEN";
        button.style.backgroundColor = "";
    }
}

// Function to check if a date is in the past
function isPastDate(date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to start of the day
    return date < today;
}

// Periodically check for dates in the past and update "Companies Visited"
setInterval(() => {
    const tableRows = document.querySelectorAll(".table-section tbody tr");
    tableRows.forEach(row => {
        const dateText = row.cells[0].textContent;
        const date = new Date(dateText);
        const statusButton = row.cells[2].querySelector("button");

        // Check if the date has passed and status is OPEN
        if (isPastDate(date) && statusButton.textContent === "OPEN") {
            statusButton.textContent = "CLOSED";
            statusButton.style.backgroundColor = "red";
            updateCard("card-companies-visited", 1);
            updateCard("card-this-week", -1); // Decrease "Companies Visiting This Week" if counted
        }
    });
}, 60000); // Run every minute to update the card dynamically
