const toggleButton = document.querySelector('.nav__btn-toggler');
const navLinks = document.querySelectorAll('.nav__link');

if (toggleButton) {
    toggleButton.addEventListener('click', (e) => {
        changeToggleButtonIcon();
        collapseNavItems();
    });
}

if (navLinks) {
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            changeToggleButtonIcon();
            collapseNavItems();
        });
    });
}

function changeToggleButtonIcon() {
    const btnIcon = toggleButton.querySelector('ion-icon');
    if (btnIcon.name == 'close-outline') {
        btnIcon.name = 'menu-outline';
    } else {
        btnIcon.name = 'close-outline';
    }
}

function collapseNavItems() {
    const navItems = document.querySelector('.nav__items');
    navItems.classList.toggle('nav__items--active');
}