const header = document.querySelector('header')
const menuIcon = document.querySelector('.menu-icon')
const menuTitle = document.querySelector('.menu-title')


menuIcon.addEventListener('click', function() {
    header.classList.toggle('open')
    menuTitle.textContent = "Close menu"
})