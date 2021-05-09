/**
 * Interactive Menu Icon
 */
const menuIcon = document.getElementsByClassName('menu-icon')[0];

menuIcon.addEventListener('click', function() {
  const header = document.getElementsByTagName('header')[0];
  if (header.style.left === '0%') {
    header.style.left = '-100%';
  } else {
    header.style.left = '0%';
  }
});

/**
 * Active class functionality for menu items
 */
const menuLinks = document.querySelectorAll('header nav ul li a');


function classShift() {
  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].classList.remove('active');
  }
  this.classList.add('active');
}

menuLinks.forEach(item => {
  item.addEventListener('click', classShift);
});

menuLinks[0].click();
