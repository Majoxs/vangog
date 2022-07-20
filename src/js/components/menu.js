import vars from "../_vars";

let isMobile = {
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

// if (isMobile.any()) {
//   vars.bodyEl.classList.add('touch');
//   vars.arrowEls.forEach((el) => {
//     let thisLink = el.previousElementSibling;
//     let subMenu = el.nextElementSibling;

//     thisLink.classList.add('parent');
//     el.addEventListener('click', () => {
//       subMenu.classList.toggle('open');
//       el.classList.toggle('active');
//     })
//   });
// } else {
//   vars.bodyEl.classList.add('mouse');
// }

