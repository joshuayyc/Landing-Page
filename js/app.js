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
    hideButton();
    collapseElements();
    timerFunction();
});

// Runs on Scroll
window.addEventListener('scroll', function(e) {
    e.preventDefault();
    changeActiveClass();
    appearButton();
    timerFunction();
});

// Runs on button-top click
document.getElementById('button-top').addEventListener('click', scrolltop);


// Define Main Functions - LOAD
function createNav () {
    const navBar = document.getElementById('navbar__list');
    // For loop - automatically builds NAV depending on number of sections
    for (let i=0; i<document.querySelectorAll('section').length; i++) {
        let list = document.createElement('li');
        navBar.appendChild(list);
        list.classList.add('menu__list');
        let link = document.createElement('a');
        link.classList.add('menu__link');
        link.innerHTML=`Section${i+1}`;
        link.id = `link${i+1}`;
        link.setAttribute('data-nav',`section${i+1}`);
        list.appendChild(link);
    }

    for (let i=0; i<document.querySelectorAll('section').length; i++) {
        const linkview = document.querySelector(`#link${i+1}`);
            linkview.addEventListener('click', function(e) {
            e.preventDefault();
            const eventID = linkview.dataset.nav;
            console.log(eventID);
            document.getElementById(`${eventID}`).scrollIntoView();
          });
      }
}

// Define Main Functions - SCROLLING
// Add class 'active' to SECTION when near top of viewport (adds to nav links)
function changeActiveClass (){
    for (let i=0; i<document.querySelectorAll('section').length; i++) {
        let sectionViewPort = document.querySelector(`#section${i+1}`).getBoundingClientRect().y;
        if ((sectionViewPort>-300) & (sectionViewPort<300)) {
            // console.log("Section View Port in range");
            // console.log("current y axis is"+sectionViewPort);
            // document.querySelector(`#section${i+1}`).className = "your-active-class";
            document.querySelector(`#section${i+1}`).classList.add("your-active-class");

        }
        else {
            // document.querySelector(`#section${i+1}`).className ="";
            document.querySelector(`#section${i+1}`).classList.remove("your-active-class");

        }
    }

    // Add class 'active' to NAV LINK when near top of viewport (adds to nav links)
    // Note: the default class for the nav link is menu__link
    for (let i=0; i<document.querySelectorAll('section').length; i++) {
        let sectionViewPort = document.querySelector(`#section${i+1}`).getBoundingClientRect().y;
        if ((sectionViewPort>-300) & (sectionViewPort<300)) {
            // document.getElementById('navbar__list').children[i].children[0].id ="active";
            document.getElementById('navbar__list').children[i].children[0].classList.add("active");
        }
        else {
            // document.getElementById('navbar__list').children[i].children[0].id="inactive";
            document.getElementById('navbar__list').children[i].children[0].classList.remove("active");

        }
    }
}

// Function to scroll page to top once y-axis below 224 for h1 element
function scrolltop () {
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
let timer = null;
function timerFunction (timer) {
    visibleNav();
    if (timer !==null) {
        clearTimeout(timer);
    }
    timer = setTimeout(hideNav, 10000);
}

function visibleNav () {
    let navMenu1 = document.getElementsByClassName('navbar__menu');
    navMenu1[0].hidden=false;
}

function hideNav () {
    let navMenu2 = document.getElementsByClassName('navbar__menu');
    navMenu2[0].hidden=true;
}

function hideButton () {
    document.querySelector('#button-top').hidden=true;
}

function appearButton() {
    if (document.body.scrollTop || document.documentElement.scrollTop === 0) {
        document.querySelector('#button-top').hidden=true;
        setTimeout(hideButton, 10000);
    }
    else {
        document.querySelector('#button-top').hidden=false;
    }
}
