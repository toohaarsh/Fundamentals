let input = document.getElementById("input")
let search_button = document.getElementById("search_btn")
let city_name = document.getElementById("city-name")
var temp = document.getElementById("temp")
let feels_like = document.getElementById("feels-like")
let humidity = document.getElementById("humidity")
let temp_max = document.getElementById("max-temp")
let temp_min = document.getElementById("min-temp")
let wind_speed = document.getElementById("wind-speed")
let heading= document.getElementById("heading")
let city
let lat
let lon

search_button.addEventListener('click', () => {
    console.log(input.value)
    long_lat()

})

async function long_lat(city) {

    city = input.value

    let response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=f3d93f0ebd6d9e1d899a90937ad14203`);

    let long_lat = await response.json();

    lat = long_lat[0]['lat']
    console.log(Math.round(lat));

    lon = long_lat[0]['lon']
    console.log(Math.round(lon));

    climate(lat, lon)

    heading.innerText= city
}
async function climate(lat, lon) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f3d93f0ebd6d9e1d899a90937ad14203&units=metric`)

    let climate = await response.json()
    console.log(climate)

        // temp = Math.round(climate['main']['temp'])
        // console.log(Math.round(climate['main']['feels_like']))
    
    temp.innerText= Math.round(climate['main']['temp'])+' °c'
    feels_like.innerText=Math.round(climate['main']['feels_like'])+' °c'
    temp_max.innerText= Math.round(climate['main']['temp_max']) +' °c'
    temp_min.innerText= Math.round(climate['main']['temp_min'])+' °c'
    humidity.innerText= Math.round(climate['main']['humidity'])  +' %'
    wind_speed.innerText= climate['wind']['speed']

}
