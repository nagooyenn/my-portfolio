document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please fill in all fields.";
            formMessage.classList.remove("hidden", "success");
            formMessage.classList.add("error");
            return;
        }

        if (!validateEmail(email)) {
            formMessage.textContent = "Please enter a valid email.";
            formMessage.classList.remove("hidden", "success");
            formMessage.classList.add("error");
            return;
        }

        formMessage.textContent = "Message sent successfully!";
        formMessage.classList.remove("hidden", "error");
        formMessage.classList.add("success");

        // Clear form fields after submission
        form.reset();
    });

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
