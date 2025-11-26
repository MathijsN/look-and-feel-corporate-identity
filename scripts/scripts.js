const header = document.querySelector('header')
const menuIcon = document.querySelector('.menu-icon')
const menuTitle = document.querySelector('.menu-title')


menuIcon.addEventListener('click', function() {
    header.classList.toggle('open')

    // menuTitle.textContent.toggle = menuTitle.dataset.toggle-text

    if (header.classList.contains('open')) {
        menuTitle.textContent = menuTitle.dataset.close
    } else {
        menuTitle.textContent = menuTitle.dataset.open
    }
})