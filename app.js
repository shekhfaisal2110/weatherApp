// API key from OpenWeatherMap (replace with your own key)
const apiKey = '606c940fef5825e421ccfddf2c63c737';
const weatherButton = document.getElementById('get-weather');
const cityInput = document.getElementById('city');
const weatherInfo = document.getElementById('weather-info');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const humidityElement = document.getElementById('humidity');
const windElement = document.getElementById('wind');

// Function to fetch weather data from OpenWeatherMap API
function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            // Display weather data
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const wind = data.wind.speed;

            temperatureElement.textContent = `Temperature: ${temperature}°C`;
            descriptionElement.textContent = `Description: ${description}`;
            humidityElement.textContent = `Humidity: ${humidity}%`;
            windElement.textContent = `Wind: ${wind} m/s`;

            weatherInfo.style.display = 'block'; // Show weather info
        })
        .catch(error => {
            alert(error.message);
            weatherInfo.style.display = 'none'; // Hide weather info
        });
}

// Event listener for the "Get Weather" button
weatherButton.addEventListener('click', () => {
    const city = cityInput.value.trim();

    if (city !== '') {
        fetchWeather(city);
    } else {
        alert('Please enter a city!');
    }
});
