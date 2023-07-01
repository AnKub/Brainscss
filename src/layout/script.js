'use strict'
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i)
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i)
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i)
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i)
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i)
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    )
  },
}
if (isMobile.any()) {
  document.body.classList.add('_touch')
  let menuArrows = document.querySelectorAll('.menu__arrow')
  if (menuArrows.length > 0) {
    for (
      let index = 0;
      index < menuArrows.length;
      index++
    ) {
      const menuArrow = menuArrows[index]
      menuArrow.addEventListener('click', function (e) {
        menuArrow.parentElement.classList.toggle('_active')
      })
    }
  }
} else {
  document.body.classList.add('_pc')
}
// the part is responsible for the burger menu

const iconMenu = document.querySelector('.menu__icon')
const iconBody = document.querySelector('.menu__body')
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    // запрещает скролл при открытом меню
    document.body.classList.toggle('_lock')
    // включаэт или выключаэт класс актив
    iconMenu.classList.toggle('_active')
    iconBody.classList.toggle('_active')
  })
}

// scroll after click

const menuLinks = document.querySelectorAll(
  '.menu__link[data-goto]',
)
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', onMenuLinkClick)
  })

  function onMenuLinkClick(e) {
    const menuLink = e.target
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(
        menuLink.dataset.goto,
      )
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYoffset -
        document.querySelector('header').offsetHeight
      // the part resposible for scroll +menu intime
      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock')
        iconMenu.classList.remove('_active')
        iconBody.classList.remove('_active')
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth',
      })
      e.preventDefault()
    }
  }
}
