const btnMobile = document.getElementById('btn-mobile');
const imgButton = document.querySelector('#btn-mobile')

function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');


  if (nav.classList.contains('active')) {
    imgButton.setAttribute('src', './assets/menu-buguer-close.svg');
  }
  else {
    imgButton.setAttribute('src', './assets/menu-buguer-open.svg');
  }
}

btnMobile.addEventListener('click', toggleMenu);