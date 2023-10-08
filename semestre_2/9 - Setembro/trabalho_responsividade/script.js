const hamburger = document.querySelector('#hamburger-btn')
hamburger.addEventListener('click', () => {

    const menu = document.querySelector('#mobile-menu')
    
    if (menu.classList.contains('visible')) {
        menu.classList.remove("visible")
        menu.style.display = 'none'
    }
    else {
        menu.classList.add("visible")
        menu.style.display = 'flex'
    }
})