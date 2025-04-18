//! Selectors
const form = document.querySelector("form");
const input = document.querySelector("form input");
const cardContainer = document.getElementById("card-container")
const alertMessage = document.getElementById("alert")

// console.log(input)

//! Variables
// const apiKey = 'a9d5e78ea485c1a78e987a3528327c09'
// localStorage.setItem("apiKey", 'a9d5e78ea485c1a78e987a3528327c09') //apiKey i local storage e kaydeder.

const apiKey = localStorage.getItem("apiKey"); // apiKey i local storage den alır.

let url;
let units = "metric"; // fahrenheit için 'imperial' yazmalıyız

//! Event Listeners

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(input.value) kullanıcının girdiği veri

  const city = input.value;

  url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  // console.log(url)

  getWeatherData()
  form.reset();
});

//^ Functions

const getWeatherData = async () => {
  try {
    const response = await fetch(url).then((response)=> response.json()) //fetch ile istek atma
    // console.log(response) // API dan gelen hava durumu bilgiler

    //? Data destructure

    const {main, name, weather, sys } = response //& fetch

    console.log(main, name, weather[0].description, sys.country)





  } catch (error) {}
};