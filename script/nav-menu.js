
const toggleButton = document.querySelector('.toggle-button');
const closeButton = document.querySelector('.close-button');
const mobileNav = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a');

const Display = () => {
    mobileNav.style.display = 'block'; 
    closeButton.style.display = 'block'; 
};

const Close = () => {
    mobileNav.style.display = 'none'; 
    closeButton.style.display = 'none'; 
};

toggleButton.addEventListener('click', Display);

closeButton.addEventListener('click', Close);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        Close(); 
    });
});


