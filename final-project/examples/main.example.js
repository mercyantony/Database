console.log("TACO")

fetch("/data")
    .then((response) => response.json())
    .then((data) => {
        manipDom(data)
    })

function manipDom(data) {
    console.log("data", data)
}

const myButton = document.getElementById("myButton")

// myButton.addEventListener("click")
myButton.onclick = function () {
    fetch("/cat")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
}
