// Get the img within the nav
const hamburgerIcon = document.getElementById('hamburger');
const closeIcon = document.getElementById('close');

const menuItems = document.querySelectorAll('.header__nav__mobileNav--menu');

function mobileMenu() {
    let isMenuOpen = false

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen; // Toggle the state
        const menu = isMenuOpen ? 'open' : 'close';
    
        // Toggle the 'open' and 'close' classes on the menu items
        menuItems.forEach(item => {
          item.classList.toggle('open', isMenuOpen);
          item.classList.toggle('close', !isMenuOpen);
        });
    
        // Toggle the 'open' and 'close' classes on the hamburger icon
        hamburgerIcon.classList.toggle('open', isMenuOpen);
        closeIcon.classList.toggle('close', isMenuOpen);
      };

    hamburgerIcon.addEventListener('click', toggleMenu);
    closeIcon.addEventListener('click', toggleMenu);

};

mobileMenu();