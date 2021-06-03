const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
  card.addEventListener("click", function(){
    const photoID = card.getAttribute('id')
    const title = card.querySelector('.text').innerHTML
    modalOverlay.classList.add('active')
    modalOverlay.querySelector('img').src = `/assets/${photoID}.png`
    modalOverlay.querySelector('.text').innerHTML = title
    
  })
}

document.querySelector(".close-modal").addEventListener("click", function() {
  modalOverlay.classList.remove('active')
})