// Register Function
function register() {
    let name = document.getElementById("register-name").value;
    let email = document.getElementById("register-email").value;
    let password = document.getElementById("register-password").value;

    if (name && email && password) {
        alert("Registration successful! Welcome, " + name);
    } else {
        alert("Please fill all the fields.");
    }
}

// Sign In Function
function signIn() {
    let email = document.getElementById("signin-email").value;
    let password = document.getElementById("signin-password").value;

    if (email && password) {
        alert("Sign In successful!");
    } else {
        alert("Please enter email and password.");
    }
}