let player = {
    name: "Per",
    chips: 145
}


let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""



let messageEL =document.getElementById("message-el")
console.log(messageEL)
//let sumEl = document.querySelector("#sum-el")

let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")



// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + ": $" + player.chips

let playerName = "Per"
let playerChips = 145

let playerEl = document.getElementById("player-el")
playerEl.textContent = playerName + ": $" + playerChips

function getRandomCard() {
     return Math.floor( Math.random()*13 ) + 1
     if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function startGame(){
    console.log("Game started ")
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame();
}



function renderGame() {
    // sumEl.textContent = "Sum: " + sum
    
    cardsEl.textContent = "cards :"
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? \uD83D\uDE0D"
        
        
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! \uD83D\uDD25 \uD83D\uDE0E"
        hasBlackJack = true
    } else {
        message = "You're out of the game! \uD83D\uDE2D"
        isAlive = false
    }
  
    messageEL.textContent= message
    
}
function newcard() {
    console.log("Drawing a new card from the deck!")
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
   
    sum += card
    cards.push(card)
    console.log(cards)
 
     renderGame()
}
}