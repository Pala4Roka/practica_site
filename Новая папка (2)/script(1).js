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

function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

function toggleTab(tabId) {
    var tab = document.getElementById(tabId);
    var content = document.getElementById('content' + tabId.slice(3));
    content.style.display = (content.style.display === 'block') ? 'none' : 'block';
}

function toggleButton(buttonId) {
    var button = document.getElementById(buttonId);
    button.classList.toggle('active-button');
}

function highlightButton(button) {
    button.classList.toggle('active-button');
}
