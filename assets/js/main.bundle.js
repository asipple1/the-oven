webpackJsonp([1],{

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/get-iterator.js
var get_iterator = __webpack_require__(25);
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: ./node_modules/swiper/dist/js/swiper.esm.bundle.js + 2 modules
var swiper_esm_bundle = __webpack_require__(54);

// CONCATENATED MODULE: ./assets/_js/_home-carousel.js


function homeCarouselInit() {
  if (!document.querySelector('.home-carousel__carousel')) {
    return;
  }
  var homeCarousel = new swiper_esm_bundle["a" /* default */]('.home-carousel__carousel', {
    loop: true,
    speed: 2500,
    spaceBetween: 200,
    parallax: true,
    autoplay: {
      delay: 5000
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.home-carousel__pagination',
      clickable: true
    }
  });
}

function init() {
  homeCarouselInit();
}
// CONCATENATED MODULE: ./assets/_js/_menu.js
var _menu_header = document.querySelector('.header');
var _menu_headerMenu = document.getElementById('menu-button');
var _menu_menuOverLay = document.querySelector('.menu-overlay');

function menu() {
  _menu_headerMenu.addEventListener('click', function (e) {
    e.preventDefault();
    _menu_header.classList.toggle('header--active');
    _menu_headerMenu.classList.toggle('header__menu--active');
    _menu_menuOverLay.classList.toggle('menu-overlay--active');
  });
  window.addEventListener("scroll", function (event) {
    if (window.pageYOffset > 100) {
      _menu_header.classList.add('header--fixed');
    } else {
      _menu_header.classList.remove('header--fixed');
    }
  });
}

function _menu_init() {
  menu();
}
// EXTERNAL MODULE: ./node_modules/baguettebox.js/dist/baguetteBox.min.js
var baguetteBox_min = __webpack_require__(55);
var baguetteBox_min_default = /*#__PURE__*/__webpack_require__.n(baguetteBox_min);

// CONCATENATED MODULE: ./assets/_js/_gallery.js


function galleryInit() {
  if (!document.querySelector('.gallery-section')) {
    return;
  }
  baguetteBox_min_default.a.run('.gallery-section');
}

function _gallery_init() {
  galleryInit();
}
// EXTERNAL MODULE: ./node_modules/aos/dist/aos.js
var aos = __webpack_require__(56);
var aos_default = /*#__PURE__*/__webpack_require__.n(aos);

// EXTERNAL MODULE: ./node_modules/fastclick/lib/fastclick.js
var fastclick = __webpack_require__(57);
var fastclick_default = /*#__PURE__*/__webpack_require__.n(fastclick);

// EXTERNAL MODULE: ./node_modules/rellax/rellax.js
var rellax_rellax = __webpack_require__(58);
var rellax_default = /*#__PURE__*/__webpack_require__.n(rellax_rellax);

// CONCATENATED MODULE: ./assets/_js/main.js








if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    fastclick_default.a.attach(document.body);
    init();
    _menu_init();
    aos_default.a.init();
    _gallery_init();
    stickyBar();
    if (document.querySelector('.rellax')) {
      var rellax = new rellax_default.a('.rellax');
    }
    // Smooth Scroll.
    var anchorlinks = document.querySelectorAll('a[href^="#"]');
    var header = document.querySelector('.header');
    var headerMenu = document.getElementById('menu-button');
    var menuOverLay = document.querySelector('.menu-overlay');

    var _loop = function _loop(item) {
      // relitere 
      item.addEventListener('click', function (e) {
        var hashVal = item.getAttribute('href');
        var topOfElement = document.querySelector(hashVal).offsetTop - 120;
        if (header.classList.contains('header--active')) {
          header.classList.remove('header--active');
          headerMenu.classList.remove('header__menu--active');
          menuOverLay.classList.remove('menu-overlay--active');
        }
        window.scroll({ top: topOfElement, behavior: "smooth" });
        history.pushState(null, null, hashVal);
        e.preventDefault();
      });
    };

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = get_iterator_default()(anchorlinks), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        _loop(item);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }, false);
}

function stickyBar() {
  var announcementSection = document.querySelector('.announcement');
  if (!announcementSection) {
    return;
  }

  var main = document.getElementById('main');

  addSticky();

  // Check on scroll
  window.addEventListener('scroll', addSticky);

  function addSticky() {
    var window_scroll_top = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
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

/***/ })

},[24]);
//# sourceMappingURL=main.bundle.js.map