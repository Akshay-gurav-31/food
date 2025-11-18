'use strict';

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}

/**
 * header sticky & back to top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * search box toggle
 */

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

for (let i = 0; i < searchBoxElems.length; i++) {
  searchBoxElems[i].addEventListener("click", function () {
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}



/**
 * move cycle on scroll
 */

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {

  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }

});

/**
 * LOGIN/SIGNUP MODAL FUNCTIONALITY
 */

// Get modal elements
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const closeLogin = document.getElementById('close-login');
const closeSignup = document.getElementById('close-signup');
const showSignupLink = document.getElementById('show-signup');
const showLoginLink = document.getElementById('show-login');

// Open login modal
loginBtn.addEventListener('click', function() {
  loginModal.style.display = 'block';
});

// Open signup modal
signupBtn.addEventListener('click', function() {
  signupModal.style.display = 'block';
});

// Close login modal
closeLogin.addEventListener('click', function() {
  loginModal.style.display = 'none';
});

// Close signup modal
closeSignup.addEventListener('click', function() {
  signupModal.style.display = 'none';
});

// Switch to signup from login
showSignupLink.addEventListener('click', function(e) {
  e.preventDefault();
  loginModal.style.display = 'none';
  signupModal.style.display = 'block';
});

// Switch to login from signup
showLoginLink.addEventListener('click', function(e) {
  e.preventDefault();
  signupModal.style.display = 'none';
  loginModal.style.display = 'block';
});

// Close modal when clicking outside of it
window.addEventListener('click', function(e) {
  if (e.target === loginModal) {
    loginModal.style.display = 'none';
  }
  if (e.target === signupModal) {
    signupModal.style.display = 'none';
  }
});

// Handle login form submission
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  
  // Simple validation (in a real app, this would be server-side)
  if (email && password) {
    // Redirect to order details page after successful login
    window.location.href = './order-details.html';
  } else {
    alert('Please fill in all fields');
  }
});

// Handle signup form submission
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('signup-confirm-password').value;
  
  // Simple validation (in a real app, this would be server-side)
  if (name && email && password && confirmPassword) {
    if (password === confirmPassword) {
      alert('Account created successfully! Welcome, ' + name);
      signupModal.style.display = 'none';
      signupForm.reset();
    } else {
      alert('Passwords do not match!');
    }
  } else {
    alert('Please fill in all fields');
  }
});