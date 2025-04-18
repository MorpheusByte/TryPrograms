//! Selectors
const form = document.querySelector("form");
const input = document.querySelector("form input");

// console.log(input);

//! Variable
const apiKey = '47d2bf9cf0fc638765792e3f9d510309'
let url;
let units = 'metric' 
// fahrenayt için imperial yazmalıyız

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    // console.log(input.value); kullanıcının girdiği veri

    const city = input.value

    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`

    // console.log(url);
    form.reset()
})


//^ Functions

const getWeatherData = async () => {
    try {
        
    } catch (error) {
        
    }




}