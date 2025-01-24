// selecteert de knoppen en menu
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// event listener voor klikken op de hamburger
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menu.classList.toggle('open'); 
});
