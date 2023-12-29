let input = document.getElementById("input")
let button = document.getElementById("button")
let img = document.getElementById("img")

button.addEventListener("click", () => {
    img.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
    console.log("clicked",input.value)
}
)