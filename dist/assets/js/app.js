console.log("file 1"),document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("back-to-top");window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?e.style.display="block":e.style.display="none"},e.addEventListener("click",(function(){var e,t;e=window.pageYOffset,t=null,requestAnimationFrame((function n(o){null===t&&(t=o);var i,c,a,r=o-t,s=(i=r,c=e,a=-e,(i/=500)<1?a/2*i*i+c:-a/2*(--i*(i-2)-1)+c);window.scrollTo(0,s),r<1e3?requestAnimationFrame(n):scrollTo(0,0)}))}))})),document.addEventListener("DOMContentLoaded",(function(){let e=document.querySelector(".menu-btn"),t=document.querySelector(".mobile__nav"),n=document.querySelectorAll(".nav__link");function o(){e.classList.toggle("active__burger"),t.classList.toggle("active__burger")}e.addEventListener("click",o),n.forEach((function(e){e.addEventListener("click",o)})),document.addEventListener("click",(function(n){const o=t.contains(n.target),i=e.contains(n.target);o||i||(e.classList.remove("active__burger"),t.classList.remove("active__burger"))})),document.addEventListener("scroll",(function(){e.classList.remove("active__burger"),t.classList.remove("active__burger")}))})),console.log("file 2"),function(){function e(){window.innerWidth>991?function(){const e=document.querySelectorAll(".about__item-content");let t=0;e.forEach((e=>{e.style.height="auto";const n=e.offsetHeight;n>t&&(t=n)})),e.forEach((e=>{e.style.height=`${t}px`}))}():document.querySelectorAll(".about__item-content").forEach((e=>{e.style.height="auto"}))}document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".materials__carousel").forEach((e=>{!function(e){const t=e.querySelector(".prev"),n=e.querySelector(".next"),o=e.querySelector(".img__nav"),i=o.querySelectorAll(".img__thumb");let c=0;function a(e){i.forEach(((t,n)=>{t.classList.remove("active__image","prev","next"),t.style.display="none",n===e?(t.style.display="block",t.classList.add("active__image")):n===(e+1)%i.length?t.classList.add("next"):n===(e-1+i.length)%i.length&&t.classList.add("prev")}))}t.addEventListener("click",(function(){c=0===c?i.length-1:c-1,a(c)})),n.addEventListener("click",(function(){c=c===i.length-1?0:c+1,a(c)}));let r=0,s=0;o.addEventListener("touchstart",(function(e){r=e.touches[0].clientX})),o.addEventListener("touchmove",(function(e){s=e.touches[0].clientX})),o.addEventListener("touchend",(function(){s<r?n.click():s>r&&t.click()})),i.forEach((e=>{e.style.transition="opacity 0.5s"})),a(c)}(e)}))})),window.addEventListener("load",e),window.addEventListener("resize",e),document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=this.getAttribute("href").substring(1),n=document.getElementById(t);if(n){const e=n.offsetTop-100;window.scrollTo({top:e,behavior:"smooth"})}}))}))}(),function(){if($(document).ready((function(){$(".materials__item").hide(),$("#"+$(".materials__names li.math__active").data("target")).fadeIn(),$(".materials__names li").click((function(){var e=$(this).data("target");$(".materials__names li").removeClass("math__active"),$(this).addClass("math__active");var t=$("#"+e);$(".materials__item").not(t).fadeOut(300),t.delay(300).fadeIn(300)}))})),window.matchMedia("(max-width: 991px)").matches){const e=document.querySelectorAll(".materials__names li");document.querySelectorAll(".materials__item"),e.forEach(((e,t)=>{const n=e.getAttribute("data-target"),o=document.getElementById(n);e.parentNode.insertBefore(o,e.nextSibling)}))}document.addEventListener("DOMContentLoaded",(function(){if(window.matchMedia("(max-width: 991px)").matches){const e=document.getElementById("carousel"),t=new Hammer(e);t.get("swipe").set({direction:Hammer.DIRECTION_HORIZONTAL}),t.on("swipeleft swiperight",(function(e){e.preventDefault()}))}}))}(),function(){let e=window.pageYOffset;window.addEventListener("scroll",(function(){const t=window.pageYOffset,n=document.querySelector(".layer__header");t>e?n.classList.add("hidden"):0===t&&n.classList.remove("hidden"),e=t})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".machine"),t=document.querySelector(".gradient"),n=document.querySelector(".thread"),o=document.querySelector(".section_cta");function i(){var i=window.scrollY,c=Math.min(i,100);e.style.backgroundPosition="0 "+(280-c)+"px",n.style.transform="translateY("+-c+"px)",t.style.opacity=i>=50?"1":"0",window.innerWidth<991&&(0===i?o.style.marginTop="0":(o.style.marginTop="-280px",n.style.transform="translateY(-300px)")),window.innerWidth<757&&(0===i?o.style.marginTop="0":(o.style.marginTop="-110px",n.style.transform="translateY(-170px)"))}window.addEventListener("scroll",i),window.addEventListener("resize",i)})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".section_cta"),t=!1;new IntersectionObserver((function(n){n.forEach((function(n){n.isIntersecting&&window.innerWidth>757&&!t&&(e.style.marginTop="-280px")}))}),{threshold:[.5]}).observe(e),window.addEventListener("scroll",(function(){!t&&window.innerWidth<757?(e.style.marginTop="-110px",t=!0):0===window.scrollY&&window.innerWidth>=757&&(e.style.marginTop="0",t=!1)}))}))}();