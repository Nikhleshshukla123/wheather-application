function getWeather() {
    const locationInput = document.getElementById("locationInput");
    const location = locationInput.value.trim();

    if (!location) {
        alert("Please enter a location");
        return;
    }

    const apiKey = 'OpenWeatherMap'; // Replace with your API key
    const apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}';
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            alert('There was an error fetching weather data. Please try again.');
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById("weatherInfo");
    weatherInfo.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Description: ${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}
