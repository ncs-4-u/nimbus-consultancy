document.addEventListener("DOMContentLoaded", function() {
    const hamburger_icon = document.getElementById("hamburger_icon");
    const navLinks = document.getElementById("navLinks");

    // Check if elements exist
    if (hamburger_icon && navLinks) {
        hamburger_icon.addEventListener("click", function() {
            navLinks.classList.toggle("show");
        });
    } else {
        console.error("Hamburger or navLinks element not found in the DOM.");
    }
});
