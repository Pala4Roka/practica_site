


var c = document.getElementById("matrixBackground");
var ctx = c.getContext("2d");

var cW = ctx.canvas.width;
var cH = ctx.canvas.height;
var words = [];

var animateLoop, randomWord, text, possible, speed, wordsLoop, wordsY;

function _(x) {
  return document.getElementById(x);
}
function numberRandomizer() {
  wordsY = (Math.floor(Math.random()*cW)+1);
}
function makeWords() {
  var opacity = Math.random()*0.6;
  var wordsX = -100;
  var wordsY = (Math.floor(Math.random()*cH)+1);
  var speed = Math.floor(Math.random() * 15) + 1;
  var text = "";
  possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789              ";

  for( var i=0; i < 50; i++ )
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  words.push({"x":wordsX,"y":wordsY,"s":speed, "t":text, "o":opacity});
}
function moveWords() {

  for(var i = 0; i < words.length; i++) {
    ctx.fillStyle = "rgba(50,205,50," +words[i].o+ ")";
    ctx.font = "20px Unica One";
    ctx.fillText(words[i].t, words[i].x,  words[i].y);
    words[i].x += words[i].s;
    if (words[i].x > cW) {
      words[i].y = (Math.floor(Math.random() * cW) + 1);
      words[i].x = -700;
    }
  }
}
function animateBackground() {
  ctx.save();
  ctx.clearRect(0,0,cW,cH);
  moveWords();
  ctx.restore();
  animateLoop = setTimeout(animateBackground, 30);
  if (words.length<100) {
    wordsLoop = setTimeout(makeWords, 240);
  }
}
window.addEventListener("load",function() {
  animateBackground();
});

 // JavaScript
 function toggleMenu() {
  var menu = document.getElementById('menu');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  
}

function toggleTab(tabId) {
  var tab = document.getElementById(tabId);
  var content = document.getElementById('content' + tabId.slice(3));
  content.style.display = (content.style.display === 'block') ? 'none' : 'block';

  var allTabs = document.querySelectorAll('.tab');
  allTabs.forEach(function(tab) {
    tab.classList.remove('active-tab-red', 'active-tab-purple', 'active-tab-green', 'active-tab-crimson');
  });


  if (tabId == 'tab1') {
    tab.classList.add('active-tab-red');
  } else if (tabId == 'tab2') {
    tab.classList.add('active-tab-purple');
  } else if (tabId == 'tab3') {
    tab.classList.add('active-tab-green');
  } else if (tabId == 'tab4') {
    tab.classList.add('active-tab-crimson');
  }
}



function highlightButton(button, color) {
  button.classList.toggle('active-button');
  if (color === 'red') {
    button.classList.toggle('active-button-red');
  } else if (color === 'purple') {
    button.classList.toggle('active-button-purple');
  } else if (color === 'green') {
    button.classList.toggle('active-button-green');
  } else if (color === 'white') {
    button.classList.toggle('active-button-white');
  }
}


function search() {
 
}

function goToProfile() {
  
const profileAvatar = document.querySelector('.profile-avatar');


profileAvatar.addEventListener('click', function() {
    
    window.location.href = '../web/profile/index.html';
});
}
document.addEventListener('DOMContentLoaded', function () {
  const carouselInner = document.querySelector('.carousel-inner');
  const scrollButton = document.querySelector('.scroll-button');
  let currentIndex = 0;

  function updateCarousel() {
      const translateValue = -currentIndex * 220; 
      carouselInner.style.transform = `translateX(${translateValue}px)`;
  }
  scrollButton.addEventListener('wheel', function (event) {
      if (event.deltaY > 0) {
          
          currentIndex = Math.min(currentIndex + 1, document.querySelectorAll('.game-card').length - 3);
      } else {
          
          currentIndex = Math.max(currentIndex - 1, 0);
      }

      updateCarousel();
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const gameCards = document.querySelectorAll('.game-card');

  gameCards.forEach(card => {
      card.addEventListener('mouseenter', function () {
          const fullScreenImage = this.querySelector('.fullscreen-image');
          if (fullScreenImage) {
              fullScreenImage.style.display = 'block';
          }
      });

      card.addEventListener('mouseleave', function () {
          const fullScreenImage = this.querySelector('.fullscreen-image');
          if (fullScreenImage) {
              fullScreenImage.style.display = 'none';
          }
      });
  });
});
function showText(element) {
  const textElement = element.querySelector('.photo-text');
  textElement.style.opacity = '1';
}

function hideText(element) {
  const textElement = element.querySelector('.photo-text');
  textElement.style.opacity = '0';
}

