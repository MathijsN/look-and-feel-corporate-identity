const header = document.querySelector('header')
const menuIcon = document.querySelector('.menu-icon')


menuIcon.addEventListener('click', function() {
    header.classList.toggle('open')
    console.log('clicked')
})