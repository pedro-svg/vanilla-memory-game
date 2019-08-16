const cardList = document.querySelectorAll('.card');

const src = [
  "./assets/noir.jpg", "./assets/peni.jpg", "./assets/peter.jpg", "./assets/porco.png", "./assets/gwen.jpg", "./assets/miles.jpg", "./assets/gwen.jpg", "./assets/peter.jpg", "./assets/porco.png", "./assets/noir.jpg", "./assets/miles.jpg", "./assets/peni.jpg"
]


let virouAlgumaCarta = false
let cartaUm, cartaDois


let bloquearClick = false

function viraCarta() {

  if (bloquearClick) return;
  if (this === cartaUm) return;

  this.classList.add('showCard')

  if (!virouAlgumaCarta) {
    virouAlgumaCarta = true
    cartaUm = this
  } else {
    virouAlgumaCarta = false
    cartaDois = this
    saoIguais()
  }
}

function saoIguais() {
  if (cartaUm.src === cartaDois.src) {
    console.log('encontrou')
    cartaUm.removeEventListener('click', viraCarta)
    cartaDois.removeEventListener('click', viraCarta)
  } else {
    console.log('errou')
    bloquearClick = true
    esconderCarta()
  }
}

function resetarJogo() {
  [virouAlgumaCarta] = [false]
  [cartaUm, cartaDois] = [null, null]
}

function esconderCarta() {
  setTimeout(() => {
    cartaUm.classList.remove('showCard')
    cartaDois.classList.remove('showCard')
    bloquearClick = false
  }, 1000)
}
let i = 0

 cardList.forEach(function(box) {
  box.src = src[i];
  i++;
});

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle() {
   cardList.forEach(box => {
    box.style.order = random(0, 12);
  });
}

window.onload = shuffle();


cardList.forEach(card => card.addEventListener('click', viraCarta))