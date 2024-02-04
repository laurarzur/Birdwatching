const nav = document.querySelector("nav"); 
const menu = document.querySelector("ul");
const openMenu = document.querySelector(".fa-bars"); 
const closeMenu = document.querySelector(".fa-xmark"); 

openMenu.addEventListener("click", () => {
    openMenu.style.display = "none"; 
    closeMenu.style.display = "flex";
    menu.style.transform = "translateX(0)"; 
    nav.style.height = "auto";
})

closeMenu.addEventListener("click", () => {
    openMenu.style.display = "flex"; 
    closeMenu.style.display = "none";
    menu.style.transform = "translateX(-500%)"; 
    nav.style.height = "50px";
})