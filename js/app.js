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
 *
*/

const Section1 ="Section1*"
const navBar = document.getElementById('navbar__list');

// For loop - automatically builds NAV depending on number of sections
for (i=0; i<document.querySelectorAll('section').length; i++)
{
  let list = document.createElement('li');
  navBar.appendChild(list);
  let link = document.createElement('a');
  list.appendChild(link);
  link.outerHTML=`<a href='#section${i+1}' class='menu__link'>Section${i+1}</a>`;
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
