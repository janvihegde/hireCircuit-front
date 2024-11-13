// Function to toggle the visibility of the form
function toggleEditForm() {
    const form = document.querySelector('.profile-form');
    form.style.display = form.style.display === 'block' ? 'none' : 'block';

    const profileHeader = document.querySelector('.profile-header');
    profileHeader.style.display = form.style.display === 'block' ? 'none' : 'flex';
}

// Handle profile form submission
document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get the values entered by the user
    const name = document.getElementById("name").value;
    const rollNo = document.getElementById("rollNo").value;
    const sem = document.getElementById("sem").value;
    const department = document.getElementById("department").value;
    const resumeFile = document.getElementById("resume").files[0];

    // Update the profile with the new information
    document.getElementById("userName").textContent = name;
    document.getElementById("userRollNo").textContent = `Roll No: ${rollNo}`;
    document.getElementById("userSem").textContent = `Semester: ${sem}`;
    document.getElementById("userDepartment").textContent = `Department: ${department}`;

    // If a resume is uploaded, update the link to the file (assuming it's a URL or stored file path)
    if (resumeFile) {
        const resumeURL = URL.createObjectURL(resumeFile);
        document.getElementById("userResume").textContent = 'Resume (Click to View)';
        document.getElementById("userResume").href = resumeURL;
    }

    // Hide the form after submission
    toggleEditForm();
});
