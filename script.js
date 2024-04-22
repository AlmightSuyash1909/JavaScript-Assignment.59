// Without Event Delegation

let firstBoxes = document.querySelectorAll(".first li")

firstBoxes.forEach((box,index) => {
    box.addEventListener("click" ,function(event){
        event.target.innerText = index + 1;

        setTimeout(() => {
            event.target.innerText = ""
        },5000)
    })
})



// With Event Delegation

let secondBoxes = document.querySelector(".second")

secondBoxes.addEventListener("click" , (event) => {
    let text = event.target.dataset.text
    event.target.innerText = text

    setTimeout(() => {
        event.target.innerText = ""
    },5000)
} )