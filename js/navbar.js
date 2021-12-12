document.onload = function(){

const navbtn = document.getElementsByClassName("mobile-nav-btn")[0];   
const mobile_nav = document.getElementsByClassName("mobile-nav-container")[0];
let mobile_nav_open = false;
let scrollLock = true;
const header = document.getElementsByClassName("header")[0];  
let sticky = header.offsetTop;  

let navOpacity = () => { 
    if (window.pageYOffset > sticky) 
    {
        console.log(sticky);
        header.classList.remove("opacity-on");
        header.classList.add("opacity-off");
    } 
    else if(window.pageYOffset == 0) 
    {
        console.log(sticky);
        header.classList.toggle("opacity-on");
        header.classList.remove("opacity-off");
      } 

} 

let mbNavDisplay = () =>{
    if(mobile_nav_open){
        mobile_nav.classList.remove("opacity-full-off"); 
        mobile_nav.classList.add("opacity-full-on");
        mobile_nav_open = false;
    } else{ 
        mobile_nav.classList.add("opacity-full-off"); 
        mobile_nav.classList.remove("opacity-full-on");
        mobile_nav_open = true;         
    }
}

// handles the hamburger opening/closing animation
navbtn.addEventListener('click', () => { 
    
    
    navbtn.classList.toggle('change');   
    mbNavDisplay();
    // mobile_nav.classList.toggle('opacity-full-on');

});

// changes the opacity of the navbar depending on scroll position
window.onscroll = () => navOpacity();


}();
