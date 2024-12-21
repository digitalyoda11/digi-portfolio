// Create and style the Back to Top button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '⬆ Back to Top';
backToTopButton.id = 'back-to-top';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.fontSize = '16px';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.backgroundColor = '#00bcd4';
backToTopButton.style.color = 'white';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none';
backToTopButton.style.zIndex = '1000';
backToTopButton.style.transition = 'opacity 0.3s';
document.body.appendChild(backToTopButton);

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
        backToTopButton.style.opacity = '1';
    } else {
        backToTopButton.style.opacity = '0';
        setTimeout(() => {
            if (window.scrollY <= 300) {
                backToTopButton.style.display = 'none';
            }
        }, 300);
    }
});

// Smooth scroll back to top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});