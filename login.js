function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Simple validation (you can replace this with your own authentication logic)
    if (username === "example" && password === "password") {
        errorMessage.innerText = "";
        alert("Login successful!");
    } else {
        errorMessage.innerText = "Invalid username or password";
    }
}
