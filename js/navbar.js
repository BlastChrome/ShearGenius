document.onload = function(){

const navbtn = document.getElementsByClassName("mobile-nav-btn")[0];   
const mobile_nav = document.getElementsByClassName("mobile-nav-container")[0]; 
const mobile_navbar = document.getElementsByClassName("mb-navbar")[0]; 
const mobile_social = document.getElementsByClassName("mb-social-links")[0]; 
const mobile_book_btn = document.getElementsByClassName("mb-nav-btn")[0];

const navItems = [mobile_navbar,mobile_social,mobile_book_btn];

// const mobile_nav_links = document.querySelectorAll("mb-nav-link");
let mobile_nav_open = false;
const header = document.getElementsByClassName("header")[0];  
let sticky = header.offsetTop;  


//handles navbar opacity 
let navOpacity = () => { 
    if (window.pageYOffset > sticky) 
    {
        header.classList.remove("opacity-on");
        header.classList.add("opacity-off");
    } 
    else if(window.pageYOffset == 0) 
    {
        header.classList.add("opacity-on");
        header.classList.remove("opacity-off");
      } 

}
//Handles showing/hiding mobile nav menu
let mbNavDisplay = () =>{
    if(mobile_nav_open){
        mobile_nav_open = false; 
        mobile_nav.classList.remove('active');
        mobile_nav.classList.add('d-none');  
        navItems.forEach(item => {
            item.classList.remove("animate"); 
            item.classList.add('animate-out');
        });
        // mobile_nav_links.classList.remove('animate');
    } else{ 
        mobile_nav.classList.add('active');
        mobile_nav.classList.remove('d-none');
        navItems.forEach(item => {
            item.classList.add("animate"); 
            item.classList.remove('animate-out');
        });
        // mobile_nav_links.classList.add('animate');
        mobile_nav_open = true;         
    }
}




// handles the hamburger opening/closing animation and open the mb nav
navbtn.addEventListener('click', () => { 
    navbtn.classList.toggle('change');   
    mbNavDisplay();
});
// changes the opacity of the navbar depending on scroll position
window.onscroll = () => navOpacity();



}();
