let input = document.getElementById("input")
let button = document.getElementById("button")
let list_container = document.getElementById("list-container")
let data

button.addEventListener('click', () => {
    console.log(input.value)
    var li = document.createElement("li")
    li.innerText = input.value
    list_container.appendChild(li)
    input.value = ""
    
    })

list_container.addEventListener("dblclick", (e) => {
    
    let x = e.target
    x.remove()
    
    save_data(list_container)
    
})
list_container.addEventListener("click", (e) => {
    e.target.classList.toggle("checked")
    save_data(list_container)
})





function save_data(save_info) {
    localStorage.setItem("data", save_info.innerHTML)

}

function show_data() {
    list_container.innerHTML = localStorage.getItem("data")
}

show_data()