const cardList = document.querySelectorAll('.card');
let virouAlgumaCarta, bloquearClick = false;
let cartaUm, cartaDois;
let matches, i = 0;

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const shuffle = _ => {
  cardList.forEach(card => card.style.order = random(0, 12))
}

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
    compararCard()
  }
}

function mudarPlacar() {
  document.querySelector('[data-js="encontrados"]').innerHTML = matches + ` matches`
  if (matches == 6) document.querySelector('[data-js="status"]').innerHTML = 'venceu'
}


function compararCard() {
  if (cartaUm.src === cartaDois.src) {
    matches += 1
    mudarPlacar()
    cartaUm.removeEventListener('click', viraCarta)
    cartaDois.removeEventListener('click', viraCarta)
  } else {
    bloquearClick = true;
    esconderCarta();
  }
}

function esconderCarta() {
  setTimeout( _ => {
    cartaUm.classList.remove('showCard')
    cartaDois.classList.remove('showCard')
    bloquearClick = false
  }, 1000)
}

window.onload = shuffle();
document.querySelector('[data-js="restart-btn"]').addEventListener('click', _ => location.reload())
document.querySelector('[data-js="shuffle-btn"]').addEventListener('click', shuffle)
cardList.forEach(card => card.addEventListener('click', viraCarta))
