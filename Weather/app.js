//! Selectors
const form = document.querySelector("form");
const input = document.querySelector("form input");
const cardContainer = document.getElementById("card-container");
const alertMessage = document.getElementById("alert");
const langButton = document.querySelector(".language")


//! Location find
const locate = document.getElementById("locate")
const locationDiv = document.getElementById('userLocation')
let userLocation = false // kullanıcı konum bilgisini sol tarafa göndermek için

// console.log(input)

//! Variables
// const apiKey = 'a9d5e78ea485c1a78e987a3528327c09'
// localStorage.setItem("apiKey", 'a9d5e78ea485c1a78e987a3528327c09') //apiKey i local storage e kaydeder.

const apiKey = localStorage.getItem("apiKey"); // apiKey i local storage den alır.

let url;
let units = "metric"; // fahrenheit için 'imperial' yazmalıyız
let cities = [] // sergilenen şehirlerin isimlerini tutacak
let lang = "en"

//! Event Listeners

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(input.value) kullanıcının girdiği veri

  if (input.value) {
    const city = input.value;

    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&lang=${lang}`;

    // console.log(url)

    getWeatherData();
  }
  form.reset();
});


//& Location find

locate.addEventListener("click", ()=>{
    navigator.geolocation?.getCurrentPosition(({coords})=>{
        // console.log(coords)

        const {latitude, longitude} = coords
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}&lang=${lang}`;
        userLocation = true
        // console.log(url)

       
    
        getWeatherData();
    })

})


//^ Language
langButton.addEventListener("click", (e)=>{
    if (e.target.textContent == "TR") {
        input.setAttribute("placeholder", "Bir Şehir Giriniz")
        lang = 'tr'

        
    } else if(e.target.textContent == "EN"){
        input.setAttribute("placeholder", "Search for a city")
        lang = 'en'
    }
})

//^ Functions

const getWeatherData = async () => {
  try {
    // const response = await fetch(url).then((response) => response.json()); //fetch ile istek atma

    const response = await axios(url) //^ Axios ile istek atma

    // console.log(response) // API dan gelen hava durumu bilgiler

    //? Data destructure

    // const { main, name, weather, sys } = response; //& fetch
    const { main, name, weather, sys } = response.data; //^ Axios

    // console.log(main, name, weather[0].description, sys.country);



    // const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png` //^ openweathermap.org

    const iconUrl = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg` //^ alternatif

    if (cities.indexOf(name) == -1) {
        cities.unshift(name)
        
        let card = `       <div class="col" id="${name}">
<div class="card mb-4 rounded-3 shadow-sm">
    <ul class="list-unstyled mt-2 mb-4">
        <li class="text-end me-2"><i class="bi bi-x-circle"></i></li>
        <h4 class="my-0 fw-normal">${name} <span ><sup><img src="https://flagsapi.com/${
          sys.country
        }/shiny/24.png" class="rounded-circle" alt=${
          sys.country
        }/> </sup></span></h4>
        <h1 class="card-title pricing-card-title"><i class="bi bi-thermometer-half"></i> ${Math.round(
          main.temp
        )}<sup>°C</sup></h1>
        <h6 class="card-title pricing-card-title">Min : ${Math.round(
          main.temp_min
        )}<sup>°C</sup> - Max : ${Math.round(main.temp_max)}<sup>°C</sup>  </h6>
        <h6 class="card-title pricing-card-title"><img src="./assets/wi-barometer.svg" height="30px"/>${
          main.pressure
        } <img src="./assets/wi-humidity.svg" height="30px"/>${
          main.humidity
        } </h6>
        <li><img src="${iconUrl}"/></li>
        <li>${weather[0].description.toUpperCase()}</li>
    </ul>
</div>
</div>`;


        if (userLocation) {
            locationDiv.innerHTML = card
            userLocation = false
            
        } else {
            
            cardContainer.innerHTML =  card + cardContainer.innerHTML
        }


    //! Remove Cities

    const clearButton = document.querySelectorAll(".bi-x-circle")
    // console.log(clearButton) //yakalanan butonlar

    clearButton.forEach((button)=>{
        button.addEventListener("click", (e)=>{
            // console.log(e.target.closest(".col").id) // tıklanan şehir ismine ulaşım
            e.target.closest(".col").remove() // tıklanan kartı Dom dan siler
            delete cities[cities.indexOf(e.target.closest(".col").id)]
            console.log(cities)
        })
    })




    } else {
        alertMessage.textContent = `You already know the weather for ${name}, Please search for another city 😉`
        alertMessage.classList.replace("d-none", "d-block")

        setTimeout(()=>{
            alertMessage.classList.replace("d-block", "d-none")
        },3000)
    }



    





  } catch (error) {

    if (lang == 'tr') {
        alertMessage.textContent = 'Şehit Bulunamadı'
    } else {
        alertMessage.textContent = 'City Not found'
    }
    
    alertMessage.classList.replace("d-none", "d-block")

    setTimeout(()=>{
        alertMessage.classList.replace("d-block", "d-none")
    },3000)
  }
};