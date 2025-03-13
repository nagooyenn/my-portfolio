document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const details = button.nextElementSibling;

            if (details.classList.contains("hidden")) {
                details.classList.remove("hidden");
                details.style.display = "block";
                button.textContent = "Hide Details";
            } else {
                details.classList.add("hidden");
                details.style.display = "none";
                button.textContent = "Show Details";
            }
        });
    });
});
