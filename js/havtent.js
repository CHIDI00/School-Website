const menuIcon = document.getElementById('menu-icon');
const navBar = document.querySelector('.nav-bar');

menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('active');
})