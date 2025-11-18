'use strict';

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
 * LOGOUT FUNCTIONALITY
 */

const logoutBtn = document.getElementById('logout-btn');

logoutBtn.addEventListener('click', function() {
  // Simple logout - redirect to home page
  alert('You have been logged out successfully!');
  window.location.href = './index.html';
});

/**
 * ORDER ACTIONS
 */

// Track Order button
const trackOrderBtn = document.querySelector('.order-actions .btn-hover:nth-child(1)');

if (trackOrderBtn) {
  trackOrderBtn.addEventListener('click', function() {
    alert('Tracking your order... You will be redirected to the tracking page.');
    // In a real application, this would redirect to a tracking page
  });
}

// Download Invoice button
const downloadInvoiceBtn = document.querySelector('.order-actions .btn-hover:nth-child(2)');

if (downloadInvoiceBtn) {
  downloadInvoiceBtn.addEventListener('click', function() {
    alert('Downloading your invoice... The file will be saved to your device.');
    // In a real application, this would trigger a file download
  });
}