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

function styleLoad(){
  moreProjects.style.display = "none";
}

moreButton.addEventListener('click', function(){
  if(moreProjects.style.display === "none"){
  moreProjects.style.display="block";
  document.querySelector('.txt').innerText = "SHOW LESS";
  document.querySelector('.arrow').style.transform = "rotate(180deg)";

} else {
  moreProjects.style.display='none';
  document.querySelector('.txt').innerText = "SHOW MORE";
  document.querySelector('#btn-main>img').style.transform = "rotate(0deg)";
  console.log('else');
}
});

//autoplay video
const bgVideo = document.getElementById('h-video');

bgVideo.muted = true;
bgVideo.play();
