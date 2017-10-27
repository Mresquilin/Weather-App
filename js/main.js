//root url for the open weather app api

const weather_api = "http://api.openweathermap.org/data/2.5/weather?zip="
const API_KEY = "6bd73c7c79534b7e8a42c9aed117ad2b"

//select all elements in the html by using querySelector and putting them in variation

const body = document.querySelector('body');
const city = document.querySelector('.city');
const zip = document.querySelector('.zip');
const weather = document.querySelector('.weather');
const temp = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const icon = document.querySelector('.icon');

const groups = {
    'rain':'img/rain.png'

}

//This is where our converter functions will be

function KelvinToFar(Kelvin){
    return Math.round(Kelvin * 9/5 - 459.67)
}

//ajax function
function getWeather(zipCode){
$.ajax({
    type:"GET",
    url: `${weather_api}${zipCode},us&appid=${API_KEY}`,
    dataType: "json",
    success: function(data){
            console.log(data)
            temp.textContent = KelvinToFar(data.main.temp)
            city.textContent = data.name
            weather.textContent = data.weather[0].main
            humidity.textContent = data.main.humidity
            icon.setAttribute('src', groups[data.weather[0].main])


            

    },
     error: function(error){
     console.log(error);
    }
})
}

getWeather("33021");
     zip.addEventListener('keypress', function(event){
    if(event.key === "Enter"){
        getWeather(zip.value);
    }
 })