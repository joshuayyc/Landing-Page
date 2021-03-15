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

// Add Event Listeners
// Runs on load
window.addEventListener('load', function(e) {
    e.preventDefault();
    console.log('page is fully loaded');
    createNav();
    navAppearStatus();
    hideButton();
    collapseElements();
});

// Runs on Scroll
window.addEventListener('scroll', function() {
    changeActiveClass();
    navAppearStatus();
    appearButton();
});

// Runs on button-top click
document.getElementById('button-top').addEventListener('click', scrolltop);

// Define Main Functions - LOAD
function createNav () {
    const navBar = document.getElementById('navbar__list');
    // For loop - automatically builds NAV depending on number of sections
    for (var i=0; i<document.querySelectorAll('section').length; i++) {
        let list = document.createElement('li');
        navBar.appendChild(list);
        let link = document.createElement('a');
        list.appendChild(link);
        link.outerHTML=`<a href='#section${i+1}' class='menu__link' id=''>Section${i+1}</a>`;
    }
}

// Define Main Functions - SCROLLING
// Add class 'active' to SECTION when near top of viewport (adds to nav links)
function changeActiveClass (){
    for (var i=0; i<document.querySelectorAll('section').length; i++) {
        let sectionViewPort = document.querySelector(`#section${i+1}`).getBoundingClientRect().y;
        if ((sectionViewPort>-300) & (sectionViewPort<300)) {
            // console.log("Section View Port in range");
            // console.log("current y axis is"+sectionViewPort);
            document.querySelector(`#section${i+1}`).className = "your-active-class";
        }
        else {
            document.querySelector(`#section${i+1}`).className ="";
        }
    }

    // Add class 'active' to NAV LINK when near top of viewport (adds to nav links)
    // Note: the default class for the nav link is menu__link
    for (var i=0; i<document.querySelectorAll('section').length; i++) {
        let sectionViewPort = document.querySelector(`#section${i+1}`).getBoundingClientRect().y;
        if ((sectionViewPort>-300) & (sectionViewPort<300)) {
            document.getElementById('navbar__list').children[i].children[0].id ="active";
        }
        else {
            document.getElementById('navbar__list').children[i].children[0].id="inactive";
        }
    }
}

// Function to scroll page to top once y-axis below 224 for h1 element
function scrolltop () {
    console.log("clicked");
    document.body.scrollTop = 0; // Scrolls to top For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//  Function to toggle
function collapseElements () {
    let collapse = document.getElementsByClassName('collapsible');
    for (i=0; i< collapse.length; i++) {
        collapse[i].addEventListener('click', function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
            if (content.style.display === "block") {
              content.style.display = "none";
            } else {
              content.style.display = "block";
            }
        });
    }
}

// Define Helper Functions
function navAppearStatus () {
    visibleNav();
    setTimeout(hideNav, 5000);
}

function hideNav () {
    document.getElementsByClassName('navbar__menu')[0].hidden=true;
}

function visibleNav () {
    document.getElementsByClassName('navbar__menu')[0].hidden=false;
}

function hideButton () {
    document.querySelector('#button-top').hidden=true;
}

function appearButton() {
  document.querySelector('#button-top').hidden=false;
}
