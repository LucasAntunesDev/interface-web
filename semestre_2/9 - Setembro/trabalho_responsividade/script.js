const hamburger = document.querySelector('#hamburger-btn')
hamburger.addEventListener('click', () => {
    // alert('oi')
    const menu = document.querySelector('#mobile-menu')
    // menu.classList.contains('visible') ? menu.classList.remove("visible") :menu.classList.add("visible")
    if (menu.classList.contains('visible')) {
        menu.classList.remove("visible")
        menu.style.display = 'none'
    }
    else {
        menu.classList.add("visible")
        menu.style.display = 'flex'
    }
})