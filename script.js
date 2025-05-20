// Mobile Menu Toggle
const toggleMenu = () => {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", () => {
  // Handle menu button click
  const menuButton = document.querySelector(".menu-btn");
  if (menuButton) {
    menuButton.addEventListener("click", toggleMenu);
  }

  // Contact Form Validation with Inline Message
  const form = document.querySelector(".contact-form");
  if (form) {
    const feedback = document.createElement("div");
    feedback.className = "form-feedback";
    feedback.style.color = "red";
    feedback.style.marginTop = "10px";
    form.appendChild(feedback);

    form.addEventListener("submit", (e) => {
      const name = form.querySelector('input[name="name"]');
      const email = form.querySelector('input[name="email"]');
      const message = form.querySelector('textarea[name="message"]');

      if (!name.value || !email.value || !message.value) {
        e.preventDefault(); // Prevent actual form submission
        feedback.textContent = "Please fill out all fields before submitting.";
      } else {
        feedback.textContent = "";
        // Let the form submit normally (e.g., to mailto: or server)
      }
    });
  }

  // Smooth Scroll for Anchor Links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
