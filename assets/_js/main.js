import * as homeCarousel from './_home-carousel.js';
import * as menu from './_menu.js';
import * as gallery from './_gallery.js';
import AOS from 'aos';
import FastClick from 'fastclick';
import Rellax from 'rellax';

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
    homeCarousel.init();
    menu.init();
    AOS.init();
    gallery.init();
    stickyBar();
    if (document.querySelector('.rellax')) {
      const rellax = new Rellax('.rellax');
    }
    // Smooth Scroll.
    let anchorlinks = document.querySelectorAll('a[href^="#"]');
    const header = document.querySelector('.header');
    const headerMenu = document.getElementById('menu-button');
    const menuOverLay = document.querySelector('.menu-overlay');
    for (let item of anchorlinks) { // relitere 
      item.addEventListener('click', (e)=> {
      let hashVal = item.getAttribute('href');
      let topOfElement = document.querySelector(hashVal).offsetTop - 120;
      if (header.classList.contains('header--active')) {
        header.classList.remove('header--active');
        headerMenu.classList.remove('header__menu--active');
        menuOverLay.classList.remove('menu-overlay--active');
      }
      window.scroll({ top: topOfElement, behavior: "smooth" });
      history.pushState(null, null, hashVal);
      e.preventDefault();
      })
    }
  }, false);
}

function stickyBar() {
  const announcementSection = document.querySelector('.announcement');
  if (!announcementSection) {
    return;
  }
  
  const main = document.getElementById('main');

  addSticky();

  // Check on scroll
  window.addEventListener('scroll', addSticky);

  function addSticky() {
    var window_scroll_top = (window.pageYOffset !== undefined)
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var announcementSectionHeight = parseInt(announcementSection.offsetHeight, 10);
    var mainTop = Math.floor(main.getBoundingClientRect().top + window_scroll_top);
    var mainHeight = parseInt(main.offsetHeight, 10);
    console.log(mainHeight);
    if (window_scroll_top >= mainTop + mainHeight - window.innerHeight + announcementSectionHeight) {
      announcementSection.classList.add('announcement--unstick');
    } else {
      announcementSection.classList.remove('announcement--unstick');
    }
  }
}