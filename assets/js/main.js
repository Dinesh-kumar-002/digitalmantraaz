document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("load", function() {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
 
  });
});







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



const toggleBtn = document.querySelector(".navbar-toggler");
const navbarNav = document.querySelector(".navbar-nav");
const navCloseBtn = document.querySelector(".btn-nav-close");

toggleBtn.addEventListener("click", () => {
	navbarNav.classList.toggle("active");
});
navCloseBtn.addEventListener("click", () => {
	navbarNav.classList.remove("active");
});


const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
	const hasDropdowns = item.querySelector(".dropdown") !== null;
	if (hasDropdowns) {
		item.classList.add("icon");
	}
});


$(document).ready(()=>{
  var floatingBannerImage = $('.floating-banner-image');
  floatingBannerImage.addClass('anime');
})




