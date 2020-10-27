// DOCUMENTACIÓN API
// https://github.com/howlCode/tarot_api

const URL = 'https://tarot.howlcode.com/api/v1/'
const deck = document.getElementById("deck");
const deckDiv = document.getElementsByClassName('cardsDiv')[0];
let imagesTarot = [];

// Ejemplo de GET para obtener todas las cartas
const getAllCards = async () => {
  try {
    // GET
    const finalUrl = `${URL}spreads/shuffled`;
    const res = await fetch(finalUrl);
    const data = await res.json();
    console.log(data);
    for (let i = 0; i < data.length; i++) {     
      imagesTarot.push(data[i].image); 
    }
    
  } catch(error) {
    console.error(error);
  }
}

let arrayImg = [];
const spreadsTarot = () => {
  let pico = arrayImg.length;
  if (pico===3) {
    alert('la tirada demoniaca consiste en 3 cartas');
    return false;
  } else {
    let imgCard = document.createElement('img');
    imgCard.src = 'img/cardback.png';
    imgCard.classList.add('card');
    deckDiv.appendChild(imgCard);  
    arrayImg.push(imgCard);
    if (arrayImg.length===3) {
      arrayImg.forEach(card =>{
        card.addEventListener('click', demonReading); 
      })
    }
    
    // console.log(arrayImg);

  }
}
// const imgRandom = (array) => {
//   let card1 = array[0];
//   let card2 = array[1];
//   let card3 = array[2];  
  // console.log(array[Math.floor(Math.random()* array.length)]);
//   console.log(card1, card2, card3)
// }

// console.log(arrayImg);
function demonReading() {
  console.log(this);
  this.src = imagesTarot[0];
  imagesTarot.shift();
  this.removeEventListener('click', demonReading);  
}

getAllCards();
deck.addEventListener('click', spreadsTarot);

// console.log(imagesTarot);
// Te quiero mucho <3

