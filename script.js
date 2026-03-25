
async function getWeather(city = "Delhi") {
    try {
        // Step 1: Get coordinates from city
        const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
        const geoData = await geoRes.json();

        if (!geoData.results) {
            document.getElementById("weatherResult").innerHTML = "City not found";
            return;
        }

        const { latitude, longitude, name, country } = geoData.results[0];

        // Step 2: Get weather
        const weatherRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );
        const weatherData = await weatherRes.json();

        const temp = weatherData.current_weather.temperature;
        const wind = weatherData.current_weather.windspeed;

        document.getElementById("weatherResult").innerHTML = `
            <h2>${name}, ${country}</h2>
            <p>Temperature: ${temp}°C</p>
            <p>Wind Speed: ${wind} km/h</p>
        `;
    } catch (err) {
        document.getElementById("weatherResult").innerHTML = "Error fetching weather";
    }
}

// Button click
function handleSearch() {
    const city = document.getElementById("cityInput").value;
    getWeather(city);
}

// Default load Delhi
window.onload = () => getWeather("Delhi");
