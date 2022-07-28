import vars from "../_vars";

const isMobile = {
  Android: function () {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android()
      || isMobile.BlackBerry()
      || isMobile.iOS()
      || isMobile.Opera()
      || isMobile.Windows()
    );
  }
};

if (isMobile.any()) {
  vars.bodyEl.classList.add('mobile');
} else {
  vars.bodyEl.classList.add('pc');
}

if (vars.menuArrows.length > 0) {
  vars.menuArrows.forEach(el => {
    el.addEventListener('click', (e) => {
      el.parentElement.classList.toggle('active');
    });
  });
}

// Меню бургер

if (vars.iconMenu) {
  vars.iconMenu.addEventListener('click', (e) => {
    vars.bodyEl.classList.toggle('lock');
    vars.iconMenu.classList.toggle('active');
    vars.menuBody.classList.toggle('active');
    vars.navContainer.classList.toggle('active');
  });
}

// Прокрутка при клике

if (vars.menuLinks.length > 0) {
  vars.menuLinks.forEach(el => {
    el.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;

    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY + 50;

      if (vars.iconMenu.classList.contains('active')) {
        vars.bodyEl.classList.remove('lock');
        vars.iconMenu.classList.remove('active');
        vars.menuBody.classList.remove('active');
        vars.navContainer.classList.remove('active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      });
      e.preventDefault();
    }
  }
}

