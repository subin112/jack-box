

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.innerText = count
    // console.log(count)
}

function save() {
    // console.log(count)
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count= 0
}


// let name = "subin"
// let greeting = "Hi, my name is "
// let myGreeting = greeting+name
// console.log(myGreeting)