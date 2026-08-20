// Live Weather widget using the OpenWeatherMap Current Weather API.
//
// The API key is entered by the visitor in the page itself (not hardcoded
// here), so no key is committed to the public GitHub repository. The key
// is saved in the browser's localStorage purely for convenience, so
// returning visitors don't have to retype it — it is never written into
// this file or sent anywhere other than directly to OpenWeatherMap.
document.addEventListener("DOMContentLoaded", () => {

    const apiKeyInput = document.getElementById("api-key-input");
    const cityInput = document.getElementById("city-input");
    const weatherBtn = document.getElementById("weather-btn");
    const resultEl = document.getElementById("weather-result");

    if (!weatherBtn || !apiKeyInput || !cityInput || !resultEl) {
        return;
    }

    const STORAGE_KEY = "openweathermap_api_key";

    // Pre-fill the key input from a previous visit, if saved.
    const savedKey = localStorage.getItem(STORAGE_KEY);
    if (savedKey) {
        apiKeyInput.value = savedKey;
    }

    const getWeather = () => {

        const apiKey = apiKeyInput.value.trim();
        const city = cityInput.value.trim();

        if (apiKey === "") {
            resultEl.innerHTML =
                '<p class="weather-error">Please enter your OpenWeatherMap API key.</p>';
            return;
        }

        if (city === "") {
            resultEl.innerHTML =
                '<p class="weather-error">Please enter a city name.</p>';
            return;
        }

        // Remember the key for next time.
        localStorage.setItem(STORAGE_KEY, apiKey);

        resultEl.innerHTML = "<p>Loading weather…</p>";

        const url =
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}` +
            `&units=metric&appid=${apiKey}`;

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error("City not found");
                    }
                    if (response.status === 401) {
                        throw new Error("Invalid API key");
                    }
                    throw new Error("Weather service error");
                }
                return response.json();
            })
            .then((data) => {

                const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

                resultEl.innerHTML = `
                    <div class="weather-card">
                        <img src="${iconUrl}" alt="${data.weather[0].description}">
                        <div>
                            <h3>${data.name}</h3>
                            <p>${Math.round(data.main.temp)}°C</p>
                            <p>${data.weather[0].description}</p>
                        </div>
                    </div>
                `;
            })
            .catch((error) => {
                resultEl.innerHTML =
                    `<p class="weather-error">Could not get weather: ${error.message}. ` +
                    `Please check the city name and your API key, then try again.</p>`;
            });
    };

    weatherBtn.addEventListener("click", getWeather);

    // Also allow pressing Enter inside either input field.
    [apiKeyInput, cityInput].forEach((input) => {
        input.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                getWeather();
            }
        });
    });
});
