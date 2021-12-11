document.onload = function(){

const navbtn = document.getElementsByClassName("mobile-nav-btn")[0];   
const mobile_nav = document.getElementsByClassName("mobile-nav-container")[0];
const header = document.getElementsByClassName("header")[0];  
let sticky = header.offsetTop;  
let navOpacity = () => { 
    if (window.pageYOffset > sticky) 
    {
        header.classList.remove("opacity-on");
         header.classList.add("opacity-off");
      } 
      else if(window.pageYOffset == 0) 
      {
        header.classList.toggle("opacity-on");
        header.classList.remove("opacity-off");
      } 

}

// handles the hamburger opening/closing animation
navbtn.addEventListener('click', () => { 
    navbtn.classList.toggle('change'); 
    mobile_nav.classList.toggle('opacity-full-on');

});

// changes the opacity of the navbar depending on scroll position
window.onscroll = () => navOpacity();


}();
