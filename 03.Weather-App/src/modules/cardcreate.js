import { getSearchfieldInput } from "../index.js";
import { getSunriseTime } from "../index.js";
import { getSunsetTime } from "../index.js";


export const cardCreater = (day, weekday, firstApi) => {
    
    //get section
    const section = document.querySelector("section");

    const newCard = document.createElement("article");
    newCard.classList.add("card");
    section.prepend(newCard);

    //create cardTitle
    const cardTitle = document.createElement("h2");
    cardTitle.classList.add('cardTitle');
    cardTitle.innerText = "The weather in" + " " + getSearchfieldInput();
    newCard.appendChild(cardTitle);


    //adding days to card
    const dayTitle = document.createElement("h2");
    dayTitle.innerText = "on" + " " + weekday + " is";
    newCard.appendChild(dayTitle);

    //icon + description div
    const iconHolder = document.createElement("div");
    iconHolder.classList.add("iconholder");
    newCard.appendChild(iconHolder);


    //card icon
    const icon = document.createElement("img");
    icon.src = "http://openweathermap.org/img/wn/" + day.weather[0].icon + "@2x.png";
    iconHolder.appendChild(icon);

    //weather description
    const description = document.createElement("p");
    description.innerText = day.weather[0].description;
    iconHolder.appendChild(description);

    //container for text containers
    const textContainer = document.createElement("div");
    textContainer.classList.add("textcontainer");
    newCard.appendChild(textContainer);

    // text container left = temp + description
    const textContainerLeft = document.createElement("div");
    textContainerLeft.classList.add("textcontainerleft");
    textContainer.appendChild(textContainerLeft);

    //create h3 for the temprature
    const temp = document.createElement("h1");
    temp.innerText = day.temp.day + "°C";
    textContainerLeft.appendChild(temp);

    //min max temp
    const feelsLike = document.createElement("span");
    feelsLike.innerText = "Feels like:" + " " + day.feels_like.day + "°C";
    textContainerLeft.appendChild(feelsLike);

    //create textcontainer right for spans
    const textContainerRight = document.createElement("div");
    textContainerRight.classList.add("textcontainerright");
    textContainer.appendChild(textContainerRight);
    
    //create sunrise  
    let sunrise = day.sunrise;
    let sunset = day.sunset;
    let timezone = firstApi.timezone;
    let sunriseOffset = (sunrise + timezone) - 3600;
    let sunsetOffset = (sunset + timezone)- 3600;


    const sunriseDisplay = document.createElement("span");
    sunriseDisplay.innerText = "The sun will rise @" + " " + getSunriseTime(sunriseOffset);
    textContainerRight.appendChild(sunriseDisplay);
    //sunset
    const sunsetDisplay = document.createElement("span");
    sunsetDisplay.innerText = "The sun will set @" + " " + getSunsetTime(sunsetOffset);
    textContainerRight.appendChild(sunsetDisplay);
}