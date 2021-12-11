document.onload = function(){
const navbtn = document.getElementsByClassName("mobile-nav-btn")[0]; 

// handles the hamburger opening/closing animation
navbtn.addEventListener('click', () => navbtn.classList.toggle('change'));
    
}();
