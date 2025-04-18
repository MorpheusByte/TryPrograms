//! Selectors
const form = document.querySelector("form");
const input = document.querySelector("form input");
const cardContainer = document.getElementById("card-container")

// console.log(input);

//! Variable
// const apiKey = '47d2bf9cf0fc638765792e3f9d510309'
// localStorage.setItem("apiKey", '47d2bf9cf0fc638765792e3f9d510309')

const apiKey = localStorage.getItem("apiKey")

let url;
let units = 'metric' 
// fahrenayt için imperial yazmalıyız

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    // console.log(input.value); kullanıcının girdiği veri

    const city = input.value

    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`

    // console.log(url);

    getWeatherData()
    form.reset()
})


//^ Functions

const getWeatherData = async () => {
    try {
        const response = await fetch(url).then((response)=> response.json())
        console.log(response);

        //? Data destructure

        const {main, name, weather[0].description ,sys} = response
    } catch (error) {
        
    }




}