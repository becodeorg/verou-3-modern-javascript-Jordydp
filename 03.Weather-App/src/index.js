//import from config.js
import Data from "./config.js";
import { cardCreater } from "./modules/cardcreate.js";

console.log("hello Webpack")
const fetchImage = () => {
    fetch("https://api.unsplash.com/search/photos?query="
        + getSearchfieldInput() + 
        "&client_id=" + Data[1].UnsplashData)
        .then(response => response.json())
        .then(CreateImgOfCity);
}

export const getSearchfieldInput = () => {
    //get value of inputfield
    const searchField = document.getElementById("searchfield");
    const searchFieldInput = searchField.value;
    return searchFieldInput;
}

const CreateImgOfCity = (image) =>{
    //select body for background change
    const body = document.querySelector("body");
    let background = image.results[1].urls.raw;
    body.style.backgroundImage = "url(" + background + ")";
}

const fetchData = (cityInput) => {
    //fetch api + value of input field + metric + api key
    //console log this info
    // console.log(lonAndLat);
    // get longitude from first api and stor in variable
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + Data[0].key + "&units=metric")
    .then(response => response.json())
    .then(data => {
        //store data from fetch inside a variable
        const firstApi = data;
        fetchWeatherdata(firstApi);
        
        return firstApi;
    });
    
}

const fetchWeatherdata = (firstApi) => {
    
    //get Longitude from first api and store in variable
    const lon = firstApi.coord.lon;
    //get latitude from first api and store in variable
    const lat = firstApi.coord.lat;

    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=&appid=" + Data[0].key + "&units=metric")
    .then(response => response.json())
    .then(info => {
        let weatherInfo = info;
        const days = weatherInfo.daily;
        getWeekDaysInOrder(days, firstApi); 
    });
}
//display the data fetched
const displayfetchData = (event) => {
    //prevent default
    event.preventDefault();
    const cityInput = getSearchfieldInput();
    fetchImage(cityInput);
    fetchData(cityInput);
    
}


const getWeekDaysInOrder = (days, firstApi) => {
    //array of weekdays
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //d = date
    let d = new Date();
    // n = date in number 0->6
    let n = d.getDay();
    for(let i = 0; i < 5 ; i++){
        let x = (n+i) % weekdays.length;
        let weekday = weekdays[x];
        cardCreater(days[i],weekday, firstApi);
    }

}

export const getSunriseTime = (sunriseOffset) => {
    
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    let date = new Date(sunriseOffset * 1000);
    // Hours part from the timestamp
    let hours = date.getHours();
    // Minutes part from the timestamp
    let minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    //let seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    let formattedTime = hours + ':' + minutes.substr(-2);
    return formattedTime;
}


export const getSunsetTime = (sunsetOffset) =>{
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    let date = new Date(sunsetOffset * 1000);
    // Hours part from the timestamp
    let hours = date.getHours();
    // Minutes part from the timestamp
    let minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    //let seconds = "0" + date.getSeconds();
    // Will display time in 10:30 format
    let formattedTime = hours + ':' + minutes.substr(-2)
    return formattedTime;
}

//addEventListener on click use event
document.querySelector("button").addEventListener('click', displayfetchData);

//event at Enter
document.getElementById("searchfield").addEventListener("keyup", function (KeyboardEvent) {
    if (KeyboardEvent === 13) {
        displayfetchData();
        };
    })