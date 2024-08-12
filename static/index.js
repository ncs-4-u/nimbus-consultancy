document.addEventListener("DOMContentLoaded", function() {
    const hamburger_icon = document.getElementById("hamburger_icon");
    const navlinks = document.getElementById("navlinks");

    // Check if elements exist
    if (hamburger_icon && navlinks) {
        hamburger_icon.addEventListener("click", function() {
            navlinks.classList.toggle("show");
        });
    } else {
        console.error("Hamburger latest message or navLinks element not found in the DOM.");
    }
});
