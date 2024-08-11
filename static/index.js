document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger_icon");
    const navLinks = document.getElementById("navLinks");

    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });
});