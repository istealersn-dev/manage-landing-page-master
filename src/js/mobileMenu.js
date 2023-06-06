// Get the img within the nav
const hamburgerIcon = document.getElementById('hamburger');
const closeIcon = document.getElementById('close');

function mobileMenu() {
    let isMenuOpen = false

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen; // Toggle the state
    
        console.log(isMenuOpen)
    
        // Toggle the 'open' and 'close' classes on the hamburger icon
        hamburgerIcon.classList.toggle('active');
        closeIcon.classList.toggle('active');
  }
    hamburgerIcon.addEventListener('click', toggleMenu);
    closeIcon.addEventListener('click', toggleMenu);

};

mobileMenu();