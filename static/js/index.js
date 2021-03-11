//jshint esversion:6

//mobile menu code

let hamburger = document.querySelector('#hamburger');
let menu = document.querySelector('#mobile-menu');
let mobItems = document.querySelector('.mobile-item');
const menuButton = document.querySelector('#menu-btn');

function mobileMenu(){
  if (menu.classList.contains('menu-open')){
    menu.classList.remove('menu-open');
    menu.classList.add('menu-closed');
    menuButton.setAttribute('src', '/images/hamburger.svg');
  }else if(menu.classList.contains('menu-closed')){
    menu.classList.remove('menu-closed');
    menu.classList.add('menu-open');
    menuButton.setAttribute('src', '/images/Vector.png');
  }
}


//show more script

const moreButton = document.querySelector('#btn-main');
const moreProjects = document.querySelector('.project:nth-child(n+4)');

moreButton.addEventListener('click', function(){
  moreProjects.style.display="block";
});
