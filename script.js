document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-list');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});

