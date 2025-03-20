document.addEventListener("DOMContentLoaded", () => {
    // Contact form functionality
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

    // Dark Mode Toggle functionality
    const toggleButton = document.getElementById("theme-toggle");

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Save user preference to local storage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    // Load saved theme preference
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Project Filtering functionality
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");
            
            projects.forEach(project => {
                if (category === "all" || project.getAttribute("data-category") === category) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
  