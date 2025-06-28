const header = document.querySelector('.header');
const headerMenu = document.getElementById('menu-button');
const menuOverLay = document.querySelector('.menu-overlay');


function menu() {
  headerMenu.addEventListener('click', (e) => {
    e.preventDefault();
    header.classList.toggle('header--active');
    headerMenu.classList.toggle('header__menu--active');
    menuOverLay.classList.toggle('menu-overlay--active');
  });
  window.addEventListener("scroll", event => {
    if( window.pageYOffset > 100) {
      header.classList.add('header--fixed');
    }
    else {
       header.classList.remove('header--fixed');
    }
  });
}


export function init() {
  menu();
}