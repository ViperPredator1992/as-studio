document.addEventListener("DOMContentLoaded",()=>{"use strict";(()=>{const e=document.querySelector(".burger"),r=document.querySelector(".nav-list");document.querySelector("body").addEventListener("click",t=>{let o=t.target;if(o.closest(".burger"))e.classList.toggle("burger-open"),"block"===r.style.display?r.style.display="none":r.style.display="block";else if(o.closest("burger"))e.classList.remove("burger-open"),r.style.display="none";else{if("DIV"===o.tagName)return;e.classList.remove("burger-open"),r.style.display="none"}})})(),$(function(){$(".portfolio-works").isotope({itemSelector:".portfolio-block"}),$(".portfolio-list a").click(function(){$(".portfolio-list  a").removeClass("current"),$(this).addClass("current");var e=$(this).attr("data-filter");return $(".portfolio-works").isotope({filter:e,animationOptions:{duration:1e3,easing:"easeOutQuart",queue:!1}}),!1})}),$("#form").validate({lang:"ru",rules:{name:{required:!0},phone:{required:!0},email:{required:!0}},messages:{name:{required:"Введите имя"},phone:{required:"Введите телефон"},email:{required:"Введите email",email:"Введите корректный email"}}})});