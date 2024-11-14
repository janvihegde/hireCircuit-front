
document.getElementById("password").addEventListener("click", function() {
    const passwordField = document.getElementById("password");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
});


document.addEventListener('DOMContentLoaded', () => { 
    const form = document.getElementById('signup-form'); 
     
     
    const fullname = document.getElementById('full-name'); 
     
    const email = document.getElementById('email'); 
    const password = document.getElementById('password'); 
    const namefb = document.getElementById('namefb'); 
    const emailfb = document.getElementById('emailfb'); 
    
    const passfb = document.getElementById('passfb'); 
     
     
     
    fullname.addEventListener('input', () => { 
    if (fullname.value.length>=5) { 
        namefb.textContent = 'Valid Name!'; 
    namefb.className = 'valid'; 
    } else { 
     
    namefb.textContent = 'Please enter a valid Name.'; 
     
    namefb.className = 'error'; 
     
    } 
     
    }); 
     
     
     
    email.addEventListener('input', () => { 
    if (email.validity.valid) { 
    emailfb.textContent = 'Email is valid!'; 
    emailfb.className = 'valid'; 
    } else { 
     
    emailfb.textContent = ' Email is Invalid'; 
     
    emailfb.className = 'error'; 
     
    } 
     
    }); 
     
     
     
    password.addEventListener('input', () => { 
    if (password.value.length >= 14) { 
    passfb.textContent = 'Password looks good!'; 
    
    passfb.className = 'valid'; 
     
    } else { 
     
    passfb.textContent = 'Password must be at least 14 characters long.'; 
     
    passfb.className = 'error'; 
     
    } 
     
    }); 
     
     
     
    form.addEventListener('submit', (event) => { 
     
    if (!email.validity.valid || password.value.length < 8 || 
    username.value.length < 3) { 
     
    event.preventDefault(); 
     
    alert('Please fill out the form correctly before submitting.'); 
     
    } 
     
    }); 
     
    });