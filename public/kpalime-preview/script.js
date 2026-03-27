document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const searchToggle = document.getElementById('searchToggle');
    const searchBar = document.getElementById('searchBar');
    const body = document.body;
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Toggle theme
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const icon = themeToggle.querySelector('i');
        if (body.classList.contains('dark-theme')) { // recupérer le thème actuel pour changer l'icône
            icon.classList.remove('bi-moon');
            icon.classList.add('bi-sun');
        } else {
            icon.classList.remove('bi-sun');
            icon.classList.add('bi-moon');
        }
    });

    // botton de recherche
    searchToggle.addEventListener('click', () => {// cache le bouton de recherche et affiche la barre de recherche
        searchToggle.classList.toggle('d-none');
        searchBar.classList.toggle('d-none');
        searchBar.focus();
    });

    // fermé le boutton de menu sur les mobiles
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navbarToggler.offsetParent !== null) { // Check if toggler is visible
                navbarToggler.click(); // Close the navbar
            }
        });
    });
});