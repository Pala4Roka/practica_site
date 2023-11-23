onst carousel = document.querySelector('.carousel');
const slides = carousel.querySelector('.slides');
const slide = slides.querySelectorAll('.slide');
const prevButton = carousel.querySelector('.prev');
const nextButton = carousel.querySelector('.next');

let currentIndex = 0;
let slideWidth = slide[0].clientWidth;

slides.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

function updateButtons() {
  if (currentIndex === 0) {
    prevButton.classList.add('disabled');
  } else {
    prevButton.classList.remove('disabled');
  }

  if (currentIndex === slide.length - 1) {
    nextButton.classList.add('disabled');
  } else {
    nextButton.classList.remove('disabled');
  }
}

prevButton.addEventListener('click', () => {
  currentIndex--;
  slides.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
  updateButtons();
});

nextButton.addEventListener('click', () => {
  currentIndex++;
  slides.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
  updateButtons();
});

updateButtons();
function enlargeImage(img) {
  // Create a new element to display the enlarged image
  var overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0,0,0,0.8)";
  overlay.style.zIndex = 9999;
  overlay.onclick = function() {
    document.body.removeChild(overlay);
  };
  
  // Create a new element for the enlarged image
  var enlargedImg = document.createElement("img");
  enlargedImg.src = img.src;
  enlargedImg.style.position = "absolute";
  enlargedImg.style.top = "50%";
  enlargedImg.style.left = "50%";
  enlargedImg.style.transform = "translate(-50%,-50%)";
  enlargedImg.style.maxHeight = "90%";
  enlargedImg.style.maxWidth = "90%";
  
  // Add the elements to the document
  overlay.appendChild(enlargedImg);
  document.body.appendChild(overlay);
}
close(){
    if (!this.isOpened) {
        return;
    }
    this.openedWindow.classList.add("hystmodal--moved");
    this.openedWindow.addEventListener("transitionend", this._closeAfterTransition);
    this.openedWindow.classList.remove("hystmodal--active");
}

_closeAfterTransition(){
    this.openedWindow.classList.remove("hystmodal--moved");
    this.openedWindow.removeEventListener("transitionend", this._closeAfterTransition);
    HystModal._shadow.classList.remove("hystmodal__shadow--show");
    this.openedWindow.setAttribute('aria-hidden', 'true');
    this.focusContol();
    this._bodyScrollControl();
    this.isOpened = false;
}
const modal = document.getElementsByClassName("modal")[0];
const openModal = () => {
  modal.stylе.displаy = "block";
}
const closeModal = () => {
  modal.stylе.displаy = "none";
}
