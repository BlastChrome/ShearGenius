document.onload=function(){const e=document.getElementsByClassName("mobile-nav-btn")[0],s=document.getElementsByClassName("mobile-nav-container")[0],a=[document.getElementsByClassName("mb-navbar")[0],document.getElementsByClassName("mb-social-links")[0],document.getElementsByClassName("mb-nav-btn")[0]];let t=!1;const o=document.getElementsByClassName("header")[0];let n=o.offsetTop;e.addEventListener("click",()=>{e.classList.toggle("change"),t?(t=!1,s.classList.remove("active"),s.classList.add("d-none"),a.forEach(e=>{e.classList.remove("animate"),e.classList.add("animate-out")})):(s.classList.add("active"),s.classList.remove("d-none"),a.forEach(e=>{e.classList.add("animate"),e.classList.remove("animate-out")}),t=!0)}),window.onscroll=(()=>void(window.pageYOffset>n?(o.classList.remove("opacity-on"),o.classList.add("opacity-off")):0==window.pageYOffset&&(o.classList.add("opacity-on"),o.classList.remove("opacity-off"))))}();