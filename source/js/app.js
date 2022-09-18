let header = document.querySelector('.main-header');
let toggle = document.querySelector('.main-header__burger-menu');

header.classList.remove('main-header--nojs');

toggle.addEventListener('click', function () {
  if (header.classList.contains('main-header--closed')) {
    header.classList.remove('main-header--closed');
    header.classList.add('main-header--opened');
  } else {
    header.classList.add('main-header--closed');
    header.classList.remove('main-header--opened');
  }
});
