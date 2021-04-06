'use strict';


function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
};

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    // console.log(window.scrollY, navbarHeight);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});


//handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event)=>{
    const target = event.target;
    const link = target.dataset.link;
    if (link == null || !link) {
        return;   
    }
    // console.log(event.target.dataset.link);
    scrollIntoView(link);
});

const contactMeBtn = document.querySelector('.home__button');
contactMeBtn.addEventListener('click', () => {
    scrollIntoView('#contact')
});


// make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
    // console.log(homeHeight);
    // console.log (1 - window.scrollY / homeHeight);
    home.style.opacity = 1 - window.scrollY / homeHeight;
})