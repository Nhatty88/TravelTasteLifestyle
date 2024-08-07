// JavaScript can be added here if needed
document.getElementById('nav-toggle').addEventListener('click', function() {
    var menu = document.getElementById('nav-menu');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
    } else {
        menu.classList.add('show');
    }
});
