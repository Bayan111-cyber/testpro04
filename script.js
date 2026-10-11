// Theme switcher
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

// Contact form
const contactForm = document.getElementById("contactForm");
const message = document.getElementById("message");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    message.textContent = "Thank you! Your message was received.";
    contactForm.reset();
});