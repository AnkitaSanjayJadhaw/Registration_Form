document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('registration-form');

    const password = document.getElementById('password');

    const confirmPassword =
    document.getElementById('com-password');

    const strengthBar =
    document.getElementById('strength-bar');

    const strengthText =
    document.getElementById('strength-text');

    const matchText =
    document.getElementById('match-text');

    /* ===== PASSWORD STRENGTH ===== */

    password.addEventListener('input', () => {

        const value = password.value;

        let strength = 0;

        if(value.length >= 6) strength++;

        if(/[A-Z]/.test(value)) strength++;

        if(/[0-9]/.test(value)) strength++;

        if(/[@$!%*?&]/.test(value)) strength++;

        switch(strength){

            case 1:

                strengthBar.style.width = "25%";
                strengthBar.style.background = "#ef4444";

                strengthText.innerHTML =
                "Weak Password";

                strengthText.style.color =
                "#ef4444";

                break;

            case 2:

                strengthBar.style.width = "50%";
                strengthBar.style.background = "#f59e0b";

                strengthText.innerHTML =
                "Medium Password";

                strengthText.style.color =
                "#f59e0b";

                break;

            case 3:

                strengthBar.style.width = "75%";
                strengthBar.style.background = "#eab308";

                strengthText.innerHTML =
                "Good Password";

                strengthText.style.color =
                "#eab308";

                break;

            case 4:

                strengthBar.style.width = "100%";
                strengthBar.style.background = "#22c55e";

                strengthText.innerHTML =
                "Strong Password";

                strengthText.style.color =
                "#22c55e";

                break;

            default:

                strengthBar.style.width = "0%";

                strengthText.innerHTML = "";
        }

        checkPasswordMatch();
    });

    /* ===== PASSWORD MATCH ===== */

    confirmPassword.addEventListener(
        'input',
        checkPasswordMatch
    );

    function checkPasswordMatch(){

        if(confirmPassword.value === ""){

            matchText.innerHTML = "";

            return;
        }

        if(password.value === confirmPassword.value){

            matchText.innerHTML =
            "✓ Passwords Match";

            matchText.style.color =
            "#22c55e";
        }

        else{

            matchText.innerHTML =
            "✗ Passwords Do Not Match";

            matchText.style.color =
            "#ef4444";
        }
    }

    /* ===== FORM SUBMIT ===== */

    form.addEventListener('submit', (e) => {

        e.preventDefault();

        if(password.value !== confirmPassword.value){

            alert("Passwords do not match.");

            return;
        }

        alert("Form submitted successfully!");
    });

    /* ===== RESET CONFIRM ===== */

    document.querySelector('.reset-btn')
    .addEventListener('click', (e) => {

        const confirmReset =
        confirm("Are you sure you want to reset the form?");

        if(!confirmReset){

            e.preventDefault();
        }
    });

});

/* ===== SHOW/HIDE PASSWORD ===== */

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
