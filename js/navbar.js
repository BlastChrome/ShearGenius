document.onload = function(){
const navbtn = document.getElementsByClassName("mobile-nav-btn")[0];  
const header = document.getElementsByClassName("header")[0];  
let sticky = header.offsetTop;  

let stickyNav = () => { 
    console.log(window.pageYOffset); 
    console.log(sticky);
    if (window.pageYOffset > sticky) 
    {
        header.classList.add("opacity-on");
        header.classList.remove("opacity-off");
      } 
      else if(window.pageYOffset == sticky) 
      {
         header.classList.remove("opacity-on");
         header.classList.add("opacity-off");
      } 

}

// handles the hamburger opening/closing animation
navbtn.addEventListener('click', () => navbtn.classList.toggle('change'));

window.onscroll = () => {
    stickyNav();
};


}();
