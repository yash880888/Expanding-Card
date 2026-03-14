
let main = document.querySelector(".main")

// let one = document.querySelector(".one")
// let two = document.querySelector(".two")
// let three = document.querySelector(".three")
// let four = document.querySelector(".four")
// let five = document.querySelector(".five")

let allImg = document.querySelectorAll(".img");
Array.from(allImg).forEach((v) => {
    v.addEventListener('click', () => {
        removeActive();
        v.classList.add("active")
    })
})

function removeActive() {
    Array.from(allImg).forEach((v) => {
        v.classList.remove("active")
    })

}



// one.addEventListener('click', () => {
//     one.classList.toggle("active")
// })

// two.addEventListener('click', () => {
//     two.classList.toggle("active")
// })

// three.addEventListener('click', () => {
//     three.classList.toggle("active")
// })

// four.addEventListener('click', () => {
//     four.classList.toggle("active")
// })

// five.addEventListener('click', () => {
//     five.classList.toggle("active")
// })