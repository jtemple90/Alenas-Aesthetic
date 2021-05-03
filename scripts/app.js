const menu = document.querySelector('#mobile-menu')
const navBar = document.querySelector('.navbar')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

//Display Mobile Menu
const mobileMenu =() => {
  menu.classList.toggle('is-active')
  navBar.classList.toggle('active')
  menuLinks.classList.toggle('active')
  body.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)