// =========== MENU =============

const btnOpen = document.querySelector('.btn-open')
const btnClose = document.querySelector('.btn-close')
const menu = document.querySelector('nav.menu')

btnOpen.addEventListener('click', openMenu)
btnClose.addEventListener('click', closeMenu)

function openMenu() {
  menu.classList.add('active')
}

function closeMenu() {
  menu.classList.remove('active')
}
