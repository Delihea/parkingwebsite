// Wait until the page's content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const sections = {
        login: document.getElementById("loginSection"),
        register: document.getElementById("registerSection"),
        forgotPassword: document.getElementById("forgotPasswordSection")
    };

    const links = {
        createAccount: document.getElementById("createAccountLink"),
        backToLoginFromRegister: document.getElementById("backToLoginLink"),
        forgotPassword: document.getElementById("forgetPasswordLink"),
        backToLoginFromForgot: document.getElementById("backToLoginFromForgot")
    };

    function switchSection(showSection) {
        Object.values(sections).forEach(section => section.classList.add("hidden"));
        sections[showSection].classList.remove("hidden");
    }

    links.createAccount.addEventListener("click", (e) => {
        e.preventDefault();
        switchSection("register");
    });

    links.backToLoginFromRegister.addEventListener("click", (e) => {
        e.preventDefault();
        switchSection("login");
    });

    links.forgotPassword.addEventListener("click", (e) => {
        e.preventDefault();
        switchSection("forgotPassword");
    });

    links.backToLoginFromForgot.addEventListener("click", (e) => {
        e.preventDefault();
        switchSection("login");
    });

    document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("loginUsername").value.trim();
        const password = document.getElementById("loginPassword").value;

        localStorage.setItem("username", username);
        const user = JSON.parse(localStorage.getItem(username));
        if (user && user.password === password) {
            alert("Login successful!");
            window.location.href = "vehicle-registration.html";
        } else {
            alert("Invalid username or password.");
        }
    });

    document.getElementById("registerForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("newUsername").value.trim();
        const password = document.getElementById("newPassword").value;
        const email = document.getElementById("email").value.trim();

        if (localStorage.getItem(username)) {
            alert("Username is already taken.");
        } else {
            const user = { username, password, email };
            localStorage.setItem(username, JSON.stringify(user));
            alert("Account created successfully.");
            switchSection("login");
        }
    });

    document.getElementById("forgotPasswordForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("forgotUsername").value.trim();
        const user = JSON.parse(localStorage.getItem(username));
        if (user) {
            alert(`Your password is: ${user.password}`);
        } else {
            alert("Username not found.");
        }
    });
});
