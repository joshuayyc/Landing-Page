/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

document.addEventListener('scroll', changeActiveClass)
/**
 * End Global Variables
 * Start Helper Functions
 *
*/

window.addEventListener('load', (e) => {
  console.log('page is fully loaded');
});

/**
 * End Helper Functions
 * Begin Main Functions
 *let offset = section.getBoundingClientRect().top - window.innerHeight - getTranslate(section).y;
let limit = offset + section.getBoundingClientRect().height + window.innerHeight;
*/
function createNav () {
    const navBar = document.getElementById('navbar__list');
    // For loop - automatically builds NAV depending on number of sections
    for (i=0; i<document.querySelectorAll('section').length; i++) {
      let list = document.createElement('li');
      navBar.appendChild(list);
      let link = document.createElement('a');
      list.appendChild(link);
      link.outerHTML=`<a href='#section${i+1}' class='menu__link'>Section${i+1}</a>`;
    }
}

createNav();


// Add class 'active' to SECTION when near top of viewport (adds to nav links)
function changeActiveClass (e) {
    e.preventDefault();
    console.log("test")
    for (i=0; i<document.querySelectorAll('section').length; i++) {
        let sectionViewPort = document.querySelector(`#section${i+1}`).getBoundingClientRect().y;
        if ((sectionViewPort>-400) & (sectionViewPort<150)) {
          // if ((sectionViewPort>-515) & (sectionViewPort<185)) {
            console.log("Section View Port in range");
            console.log("current y axis is"+sectionViewPort);
            document.querySelector(`#section${i+1}`).className = "your-active-class";
        }
        else {
            document.querySelector(`#section${i+1}`).className ="";
        }
    }

    // Add class 'active' to NAV LINK when near top of viewport (adds to nav links)
    // Note: the default class for the nav link is menu__link
    for (i=0; i<document.querySelectorAll('section').length; i++) {
        let sectionViewPort = document.querySelector(`#section${i+1}`).getBoundingClientRect().y;
        if ((sectionViewPort>-400) & (sectionViewPort<150)) {
            document.getElementById('navbar__list').children[i].children[0].id ="active";
        }
        else {
            document.getElementById('navbar__list').children[i].children[0].id ="";
        }
    }
}


// Scroll to anchor ID using scrollTO event
/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
