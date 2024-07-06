window.addEventListener('scroll', function() {
    const parallax = document.querySelector('header');
    let scrollPosition = window.pageYOffset;
    
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});

// ScrollReveal animations
ScrollReveal().reveal('#intro', {
    duration: 2000,
    origin: 'left',
    distance: '50px'
});

ScrollReveal().reveal('#profile-image', {
    duration: 2000,
    origin: 'right',
    distance: '50px'
});


// ScrollReveal animations
ScrollReveal().reveal('#about-image', {
    duration: 2000,
    origin: 'right',
    distance: '50px',
    delay: 200
});

ScrollReveal().reveal('#bio', {
    duration: 2000,
    origin: 'left',
    distance: '50px',
    delay: 400
});

ScrollReveal().reveal('.skill-item', {
    duration: 2000,
    origin: 'bottom',
    distance: '50px',
    delay: 400,
    interval: 200
});

// Initialize ScrollReveal
ScrollReveal().reveal('.service-item', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    interval: 200, // Interval between each item's animation
    duration: 1000, // Animation duration
    easing: 'cubic-bezier(0.5, 0, 0, 1)', // Easing function
    reset: true // Reset animation on reveal
});


// Initialize ScrollReveal
ScrollReveal().reveal('.project-card', {
    delay: 200, // Delay before the animation starts
    distance: '50px', // Distance in pixels from the origin to start the animation
    origin: 'bottom', // Starting point of the animation
    interval: 200, // Interval between each item's animation
    duration: 1000, // Animation duration
    easing: 'cubic-bezier(0.5, 0, 0, 1)', // Easing function
    reset: true // Reset animation on reveal
});


// Initialize ScrollReveal
ScrollReveal().reveal('#contact-form', {
    delay: 200, // Delay before the animation starts
    distance: '50px', // Distance in pixels from the origin to start the animation
    origin: 'bottom', // Starting point of the animation
    duration: 1000, // Animation duration
    easing: 'cubic-bezier(0.5, 0, 0, 1)', // Easing function
    reset: true // Reset animation on reveal
});

ScrollReveal().reveal('.contact-info', {
    delay: 400, // Delay before the animation starts
    distance: '50px', // Distance in pixels from the origin to start the animation
    origin: 'bottom', // Starting point of the animation
    duration: 1000, // Animation duration
    easing: 'cubic-bezier(0.5, 0, 0, 1)', // Easing function
    reset: true // Reset animation on reveal
});

ScrollReveal().reveal('.form-group', {
    delay: 600, // Delay before the animation starts
    distance: '50px', // Distance in pixels from the origin to start the animation
    origin: 'bottom', // Starting point of the animation
    duration: 1000, // Animation duration
    easing: 'cubic-bezier(0.5, 0, 0, 1)', // Easing function
    reset: true, // Reset animation on reveal
    interval: 200 // Interval between each item
});

ScrollReveal().reveal('.social-links a', {
    delay: 800, // Delay before the animation starts
    distance: '50px', // Distance in pixels from the origin to start the animation
    origin: 'bottom', // Starting point of the animation
    duration: 1000, // Animation duration
    easing: 'cubic-bezier(0.5, 0, 0, 1)', // Easing function
    reset: true, // Reset animation on reveal
    interval: 200 // Interval between each item
});

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*============ MENU SHOW ============*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
} 

/*=========== MENU HIDDEN ===========*/
/*validate if consttant exists*/
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link, we remove the show menu class 
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


