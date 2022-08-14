let player = {
  name : "Aryan",
 chips : 200
 }
let Cards = [] //
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = ""
let cardsEl = document.querySelector("#cards-el")
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#Sum-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
  // If 1 then return 11
  // if i get any number between 11-13,return 10
  let number =  Math.floor(Math.random() * 13) + 1
  if(number === 1){
    return 11
  }else if(number > 10){
    return 10
  }

  return number
}

function startGame(){
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  Cards = [firstCard , secondCard]
  sum = firstCard + secondCard
  renderGame();
}


function newCard(){
  if(isAlive == true && sum < 21){
    let card = getRandomCard()
    sum += card
    Cards.push(card)
    renderGame()
  }

}


function renderGame(){
// Render out all the cards
cardsEl.textContent = "Cards: "

for(let i=0; i<Cards.length; i++){
  cardsEl.textContent += Cards[i] + " "
}

sumEl.textContent = "Sum: "  + sum

if(sum > 21){
  message = "Sorry! You're out of the game!"
  isAlive = false;
 }else if(sum < 21){
    message = "Do you want to draw a new card ? "
 }else{
   message = "Woohooo! You've got Blackjack!"
   hasBlackJack = true;
 }

 messageEl.textContent = message
}