let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard 
let hasBlackJack = false

if (sum <= 20) {
    console.log("Do you want to draw a new card?")
} else if (sum === 21) {
    console.log("wooho! you got a jack")
}else {
    console.log ("your out#@")
}
