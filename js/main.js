
//función que hace que cambie de tamaño el menu de arriba al hacer scroll

const menu = document.querySelector(".navbar-logo");
document.addEventListener("scroll", ()=>{

         if(scrollY > 267) menu.style.width = "50px";                     
    else if(scrollY < 267) menu.style.width = "60px";

    

})





    
