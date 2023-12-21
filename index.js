const toggleButton = document.getElementById('menu-bars');
const navLinks= document.getElementById('nav-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})