// Get the testimonial slides and dots
   const carousel = document.querySelectorAll('.testimonial__cards__content');
   const dots = document.querySelector('.testimonial__dots');
   
   // Initialise the index of the active slide
   let activeCard = 0;
   
   // Function to show the current slide
   const showCard = () => {
       carousel.forEach((card, index) => {
           card.style.display = index === activeCard ? 'block' : 'none';
       });
   }
   
   // Create dots for each testimonial
   carousel.forEach( () => {
       const dot = document.createElement('span');
       dot.classList.add('testimonial__dots--dot');
       dots.appendChild(dot);
   })
   
   // Function to update the active dot
   const updateActiveDot = () => {
       const allDots = dots.querySelectorAll('.testimonial__dots--dot');
       allDots.forEach((dot, index) => {
           dot.classList.toggle('active', index === activeCard);
       });
   }
   
   // Add event listeners to the dots for navigation
   dots.addEventListener('click', (event) => {
       if (event.target.classList.contains('testimonial__dots--dot')) {
           activeCard = Array.from(dots.children).indexOf(event.target);
           showCard();
           updateActiveDot();
       }
   });
   
   // Initiate setup
   showCard();
   updateActiveDot();