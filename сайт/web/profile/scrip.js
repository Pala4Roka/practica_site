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
}

function highlightButton(button) {
button.classList.toggle('active-button');
}

function search() {
  // Логика для поиска
}

function goToProfile() {
  // Находим элемент с аватаром профиля
const profileAvatar = document.querySelector('.profile-avatar');

// Добавляем обработчик события для клика по аватару профиля
profileAvatar.addEventListener('click', function() {
    // Перенаправляем на другую страницу при клике на аватар профиля
    window.location.href = '../../main/index.html';
});

}
// Функция открытия модального окна
function openModal() {
  document.getElementById('editModal').style.display = 'block';
}

// Функция закрытия модального окна
function closeModal() {
  document.getElementById('editModal').style.display = 'none';
}

// Событие при клике на кнопку редактирования
document.querySelector('.edit-button').addEventListener('click', function (event) {
  event.preventDefault(); // Предотвращение действия по умолчанию, чтобы страница не перезагружалась

  // Открытие модального окна при нажатии кнопки редактирования
  openModal();
});

// Обработка отправки формы редактирования
document.getElementById('editForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Предотвращение отправки формы и перезагрузки страницы
  
  // Получение значений из формы
  const fullName = document.getElementById('fullName').value;
  const nickname = document.getElementById('nickname').value;
  const email = document.getElementById('email').value;

  // Применение изменений (здесь можно отправить данные на сервер для сохранения)

  // Закрытие модального окна после сохранения
  closeModal();

  // Здесь можно добавить логику для обновления страницы с новыми данными,
  // либо обновить содержимое элементов на текущей странице с новыми значениями
});
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Использование проверки при отправке формы
document.getElementById('editForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Предотвращение отправки формы и перезагрузки страницы

  const emailInput = document.getElementById('email').value;

  if (!isValidEmail(emailInput)) {
    alert('Пожалуйста, введите действительный адрес электронной почты.');
    return;
  }

  // Остальная логика сохранения данных и закрытия модального окна
});
