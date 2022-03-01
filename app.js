let menu = document.querySelector('nav ul')
let door = document.querySelector('nav .mobile')
door.addEventListener('click', function(){
    menu.classList.toggle('show')
})