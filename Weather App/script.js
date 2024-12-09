const apikey = "356e76520db168fb56df05ba94ec248e";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=pakistan&units=metric";

// targeting the input field so if the user enters the city he should see the results otherwise he's see the default weather
const cityInput = document.querySelector('.search input');

async function checkWeather() {
    
    const weather = await fetch(apiUrl + `&appid=${apikey}`);
    let responce = await weather.json();


    if (responce.cod !== 200) {
        // Handle error (city not found or invalid response)
        alert("City not found or invalid API response.");
        return;  // Exit early if there was an issue with the response
    }


    // Let Get all the elements that we have to target
    let temp = document.querySelector('.temp')  // Temperature
    let city = document.querySelector('.city')  // City Name
    let humidity = document.querySelector('.humidity')  // Humidity
    let wind = document.querySelector('.wind')  // Wind
    let weatherIcon = document.querySelector('.weather-icon') // Weather Icon



    // Update the HTML elements with the data from the API response
    temp.innerText = `${Math.round(responce.main.temp)}°C`;  // You can add '°C' or whatever unit you prefer
    city.innerText = responce.name;
    humidity.innerText = `${responce.main.humidity}%`;
    wind.innerText = `${responce.wind.speed} m/s`;
    weatherIcon.src = `/Images/${responce.weather[0].main}.png`;  // Access first weather condition

    // console.log(responce);
    // console.log(temp);
    
    
}

// Function to handle the city search input and API URL update
function searchWeather() {
    const searchButton = document.querySelector('.search button');
    
    // Add an event listener to the search button
    searchButton.addEventListener('click', () => {
        let updateCity = cityInput.value.trim();  // Get the city input value and remove any extra spaces
        
        if (updateCity) {
            // If a city is entered, update the API URL
            apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${updateCity}&units=metric`;
        } else {
            // If no city is entered, use the default (Canada)
            apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=newyork&units=metric";
        }
        
        // Call the checkWeather function to fetch and display the weather
        checkWeather();
    });
}

// Initialize the weather check on page load or default
searchWeather();

checkWeather();  // <-- This is the missing line to fetch the default weather when the page first loads
