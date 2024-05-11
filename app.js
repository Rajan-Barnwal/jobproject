let announcementBar = document.querySelector('div.top-banner');
let html = document.querySelector('html');

// Store initial styles in an object
let initialStyles = announcementBar.style

window.addEventListener('scroll', (Event) => {
    if (html.scrollTop > 0) {
        announcementBar.style.display = 'none';
    } else {
        // Restore initial styles
        announcementBar.style = initialStyles;
    }
});