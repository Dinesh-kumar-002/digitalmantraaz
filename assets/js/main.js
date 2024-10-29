document.addEventListener("DOMContentLoaded", function() {
  // Wait for the page to load completely
  window.addEventListener("load", function() {
    // Hide the preloader
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
    
    // Show the website content
    // const content = document.querySelector('.content');
    // content.style.display = 'block';
  });
});



// header bg to white
var logo = document.querySelectorAll('.navbar-brand img')[0];
var links = document.querySelectorAll('.nav-link');
console.log(logo);

window.addEventListener('scroll', function() {
    const header = document.getElementById('navbar');
    const bar = document.querySelector('.fa-bars');
    
    if (window.scrollY > 0) { // Adjust this value based on when you want the color change
      header.classList.add('scrolled');
      bar.style.color='#0c1b31';
      logo.src="assets/images/logo/Logo-blue.png";
      links.forEach(link => {
        link.style.color="#071932";
      });
      
    } else {
      links.forEach(link => {
        link.style.color="white";
      });
      logo.src="assets/images/logo/Logo-gold.png";
      header.classList.remove('scrolled');
      bar.style.color='white';
    }
});

// header bg to white




// input 
// Add event listeners to all inputs
document.querySelectorAll('#customer input').forEach(input => {
    input.addEventListener('focus', function() {
      this.previousElementSibling.classList.add('label-move');
    });
    
    input.addEventListener('blur', function() {
      if (this.value === "") { // Only move back if input is empty
        this.previousElementSibling.classList.remove('label-move');
      }
    });
  });
  
// input 