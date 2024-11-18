const menuBtn = document.querySelector('.menu-btn')
const navBar = document.querySelector('nav  ul')
const icon = document.querySelector('i')



menuBtn.addEventListener('click', (e)=>{
    const close = "fa-solid fa-bars"
    const open = "fa-solid fa-xmark"
    if(icon.className == close){
        navBar.classList.add('flex')
        icon.className = open
    } else {
        navBar.classList.remove('flex')
        icon.className = close
    }
})

//<i class="fa-solid fa-bars"></i>
// <i class="fa-solid fa-xmark"></i>