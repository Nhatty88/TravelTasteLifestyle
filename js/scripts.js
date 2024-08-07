// JavaScript can be added here if needed
document.getElementById('nav-toggle').addEventListener('click', function() {
    var menu = document.getElementById('nav-menu');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
    } else {
        menu.classList.add('show');
    }
});
document.getElementById('nav-toggle').addEventListener('click', function() {
    var menu = document.getElementById('nav-menu');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
    } else {
        menu.classList.add('show');
    }
});

document.getElementById('theme-toggle').addEventListener('click', function() {
    var body = document.body;
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    navToggle.addEventListener('click', () => {
        if (navMenu.style.display === 'none' || navMenu.style.display === '') {
            navMenu.style.display = 'block';
        } else {
            navMenu.style.display = 'none';
        }
    });
});
