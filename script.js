let navbar=document.querySelector(".navbar");

document.querySelector("#menu-btn").addEventListener("click", function(){
    navbar.classList.toggle("active");
   
    searchBar.classList.remove("active");
    cartItem.classList.remove("active");
})

let cartItem=document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").addEventListener("click", function(){
    cartItem.classList.toggle("active");
    navbar.classList.remove("active");
    searchBar.classList.remove("active");
    
})


let searchBar=document.querySelector(".search-form");

document.querySelector("#search-btn").addEventListener("click", function(){
    searchBar.classList.toggle("active");
    navbar.classList.remove("active");
   
    cartItem.classList.remove("active");
})

window.onscroll(function(){
    navbar.classList.remove("active");
    searchBar.classList.remove("active");
    cartItem.classList.remove("active");
})