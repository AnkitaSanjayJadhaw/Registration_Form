document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('com-password');
    const email = document.querySelector('input[type="email"]');
    const resetButton = document.querySelector('.reset-btn');

    // Correcting the typo in the type attribute for the email input
    if(email) email.type = 'email';


    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Check if passwords match
        if (password.value !== confirmPassword.value) {
            alert("Passwords do not match.");
            return; // Stop the form submission
        }

        // You can add more validation here if needed

        // If everything's okay, proceed with form submission
        // For demonstration, we'll just show an alert
        alert("Form submitted successfully!");

        // If you want to actually submit the form to a server,
        // you would typically use AJAX here or simply not prevent the default
        // form submission behavior if you're not doing any client-side validation.
    });

    resetButton.addEventListener('click', function (e) {
        // Confirm before resetting the form
        const isConfirmed = confirm("Are you sure you want to reset the form?");
        if (!isConfirmed) {
            e.preventDefault(); // Prevent form reset
        }
    });
});





const password = document.getElementById("password");
    const confirmPassword = document.getElementById("com-password");

    const strengthBar = document.getElementById("strength-bar");
    const strengthText = document.getElementById("strength-text");
    const matchText = document.getElementById("match-text");

    // Password Strength Checker
    password.addEventListener("input", () => {

        const value = password.value;
        let strength = 0;

        if(value.length >= 6) strength++;
        if(value.match(/[A-Z]/)) strength++;
        if(value.match(/[0-9]/)) strength++;
        if(value.match(/[@$!%*?&]/)) strength++;

        switch(strength){

            case 1:
                strengthBar.style.width = "25%";
                strengthBar.style.background = "red";
                strengthText.innerHTML = "Weak Password";
                strengthText.style.color = "red";
                break;

            case 2:
                strengthBar.style.width = "50%";
                strengthBar.style.background = "orange";
                strengthText.innerHTML = "Medium Password";
                strengthText.style.color = "orange";
                break;

            case 3:
                strengthBar.style.width = "75%";
                strengthBar.style.background = "yellow";
                strengthText.innerHTML = "Good Password";
                strengthText.style.color = "yellow";
                break;

            case 4:
                strengthBar.style.width = "100%";
                strengthBar.style.background = "limegreen";
                strengthText.innerHTML = "Strong Password";
                strengthText.style.color = "limegreen";
                break;

            default:
                strengthBar.style.width = "0%";
                strengthText.innerHTML = "";
        }

        checkPasswordMatch();
    });

    // Confirm Password Match
    confirmPassword.addEventListener("input", checkPasswordMatch);

    function checkPasswordMatch(){

        if(confirmPassword.value === ""){
            matchText.innerHTML = "";
            return;
        }

        if(password.value === confirmPassword.value){
            matchText.innerHTML = "✓ Passwords Match";
            matchText.style.color = "limegreen";
        }
        else{
            matchText.innerHTML = "✗ Passwords Do Not Match";
            matchText.style.color = "red";
        }
    }

    // Show / Hide Password
    function togglePassword(id, element){

        const input = document.getElementById(id);

        if(input.type === "password"){
            input.type = "text";
            element.innerHTML = "Hide";
        }
        else{
            input.type = "password";
            element.innerHTML = "Show";
        }
    }
