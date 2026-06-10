/* ================================================================
   WEATHERSCOPE — JAVASCRIPT
   Sections:
   1. City data array
   2. DOM element references
   3. Rendering helpers
   4. Search logic
   5. Autocomplete (suggestions)
   6. Event listeners
   7. Init
================================================================ */


/* ── 1. CITY DATA ARRAY ────────────────────────────────────────── */
/*
   Each city is an object with all the data the UI needs.
   In a real app you'd fetch this from a weather API (e.g. OpenWeatherMap).
   For now, the data is hardcoded so the app works offline.

   Structure of each entry:
   {
     country, lat, lon, timezone,
     temp (°C), feels (°C),
     condition (string), conditionIcon (emoji),
     humidity, wind, visibility, uv,
     high, low,
     forecast: [ [dayName, emoji, temp], ... ]  ← 5 days
   }
*/
const cityData = {
  "Lagos": {
    country: "Nigeria",
    lat: "6.45°N", lon: "3.39°E",
    timezone: "WAT (UTC+1)",
    temp: 32, feels: 36,
    condition: "Partly Cloudy", conditionIcon: "⛅",
    humidity: "78%", wind: "14 km/h", visibility: "9 km", uv: "7",
    high: 34, low: 27,
    forecast: [
      ["Mon", "☀️", 34], ["Tue", "🌧", 29], ["Wed", "⛅", 31],
      ["Thu", "☀️", 33], ["Fri", "🌧", 28]
    ]
  },
  "Abuja": {
    country: "Nigeria",
    lat: "9.07°N", lon: "7.39°E",
    timezone: "WAT (UTC+1)",
    temp: 30, feels: 33,
    condition: "Sunny", conditionIcon: "☀️",
    humidity: "55%", wind: "10 km/h", visibility: "12 km", uv: "8",
    high: 32, low: 22,
    forecast: [
      ["Mon", "☀️", 31], ["Tue", "☀️", 32], ["Wed", "⛅", 29],
      ["Thu", "☀️", 31], ["Fri", "⛅", 28]
    ]
  },
  "London": {
    country: "United Kingdom",
    lat: "51.5°N", lon: "0.12°W",
    timezone: "BST (UTC+1)",
    temp: 18, feels: 16,
    condition: "Overcast", conditionIcon: "☁️",
    humidity: "72%", wind: "22 km/h", visibility: "8 km", uv: "3",
    high: 20, low: 13,
    forecast: [
      ["Mon", "🌧", 16], ["Tue", "⛅", 18], ["Wed", "☀️", 21],
      ["Thu", "⛅", 17], ["Fri", "🌧", 14]
    ]
  },
  "New York": {
    country: "United States",
    lat: "40.71°N", lon: "74.00°W",
    timezone: "EDT (UTC-4)",
    temp: 24, feels: 26,
    condition: "Clear Skies", conditionIcon: "☀️",
    humidity: "48%", wind: "18 km/h", visibility: "16 km", uv: "5",
    high: 27, low: 18,
    forecast: [
      ["Mon", "☀️", 26], ["Tue", "☀️", 27], ["Wed", "⛅", 22],
      ["Thu", "🌧", 19], ["Fri", "☀️", 25]
    ]
  },
  "Tokyo": {
    country: "Japan",
    lat: "35.68°N", lon: "139.69°E",
    timezone: "JST (UTC+9)",
    temp: 22, feels: 24,
    condition: "Humid & Hazy", conditionIcon: "🌫️",
    humidity: "85%", wind: "8 km/h", visibility: "6 km", uv: "4",
    high: 25, low: 18,
    forecast: [
      ["Mon", "🌫️", 23], ["Tue", "🌧", 20], ["Wed", "🌧", 19],
      ["Thu", "⛅", 22], ["Fri", "☀️", 26]
    ]
  },
  "Paris": {
    country: "France",
    lat: "48.85°N", lon: "2.35°E",
    timezone: "CEST (UTC+2)",
    temp: 21, feels: 20,
    condition: "Partly Sunny", conditionIcon: "⛅",
    humidity: "60%", wind: "14 km/h", visibility: "14 km", uv: "4",
    high: 23, low: 15,
    forecast: [
      ["Mon", "☀️", 23], ["Tue", "⛅", 20], ["Wed", "☀️", 24],
      ["Thu", "⛅", 19], ["Fri", "🌧", 17]
    ]
  },
  "Dubai": {
    country: "United Arab Emirates",
    lat: "25.20°N", lon: "55.27°E",
    timezone: "GST (UTC+4)",
    temp: 42, feels: 47,
    condition: "Scorching Sun", conditionIcon: "🌞",
    humidity: "38%", wind: "20 km/h", visibility: "10 km", uv: "11",
    high: 44, low: 33,
    forecast: [
      ["Mon", "🌞", 43], ["Tue", "🌞", 44], ["Wed", "🌞", 43],
      ["Thu", "☀️", 41], ["Fri", "🌞", 44]
    ]
  },
  "Sydney": {
    country: "Australia",
    lat: "33.87°S", lon: "151.21°E",
    timezone: "AEST (UTC+10)",
    temp: 16, feels: 15,
    condition: "Windy", conditionIcon: "💨",
    humidity: "65%", wind: "35 km/h", visibility: "20 km", uv: "3",
    high: 18, low: 11,
    forecast: [
      ["Mon", "🌧", 14], ["Tue", "⛅", 16], ["Wed", "☀️", 19],
      ["Thu", "☀️", 20], ["Fri", "⛅", 17]
    ]
  },
  "Mumbai": {
    country: "India",
    lat: "19.07°N", lon: "72.87°E",
    timezone: "IST (UTC+5:30)",
    temp: 29, feels: 34,
    condition: "Monsoon Season", conditionIcon: "🌧",
    humidity: "92%", wind: "28 km/h", visibility: "4 km", uv: "5",
    high: 31, low: 25,
    forecast: [
      ["Mon", "🌧", 29], ["Tue", "⛈️", 27], ["Wed", "🌧", 28],
      ["Thu", "🌧", 29], ["Fri", "⛈️", 26]
    ]
  },
  "Toronto": {
    country: "Canada",
    lat: "43.65°N", lon: "79.38°W",
    timezone: "EDT (UTC-4)",
    temp: 19, feels: 17,
    condition: "Mostly Cloudy", conditionIcon: "⛅",
    humidity: "58%", wind: "25 km/h", visibility: "12 km", uv: "4",
    high: 22, low: 14,
    forecast: [
      ["Mon", "⛅", 20], ["Tue", "🌧", 17], ["Wed", "⛅", 19],
      ["Thu", "☀️", 23], ["Fri", "☀️", 24]
    ]
  },
  "Cairo": {
    country: "Egypt",
    lat: "30.04°N", lon: "31.23°E",
    timezone: "EET (UTC+2)",
    temp: 38, feels: 40,
    condition: "Hot & Dry", conditionIcon: "🌵",
    humidity: "22%", wind: "15 km/h", visibility: "12 km", uv: "10",
    high: 40, low: 28,
    forecast: [
      ["Mon", "☀️", 39], ["Tue", "☀️", 40], ["Wed", "🌵", 38],
      ["Thu", "☀️", 37], ["Fri", "☀️", 38]
    ]
  },
  "Berlin": {
    country: "Germany",
    lat: "52.52°N", lon: "13.40°E",
    timezone: "CEST (UTC+2)",
    temp: 17, feels: 15,
    condition: "Light Rain", conditionIcon: "🌦️",
    humidity: "68%", wind: "19 km/h", visibility: "10 km", uv: "3",
    high: 19, low: 12,
    forecast: [
      ["Mon", "🌦️", 17], ["Tue", "⛅", 18], ["Wed", "☀️", 22],
      ["Thu", "⛅", 19], ["Fri", "🌧", 15]
    ]
  }
};

/* List of cities to show as quick-access chips (order matters visually) */
const popularCities = [
  "Lagos", "Abuja", "London", "New York",
  "Tokyo", "Paris", "Dubai", "Sydney", "Cairo"
];


/* ── 2. DOM ELEMENT REFERENCES ─────────────────────────────────── */
/*
   Cache all the elements we'll need repeatedly.
   Querying the DOM once is faster than querying it inside every function.
*/
const searchInput   = document.getElementById("searchInput");
const searchBtn     = document.getElementById("searchBtn");
const suggestionsEl = document.getElementById("suggestions");
const popularChips  = document.getElementById("popularChips");
const weatherCard   = document.getElementById("weatherCard");
const noResultEl    = document.getElementById("noResult");
const noResultMsg   = document.getElementById("noResultMsg");

/* Weather card inner elements */
const elCityName    = document.getElementById("cityName");
const elCityCountry = document.getElementById("cityCountry");
const elCityCoords  = document.getElementById("cityCoords");
const elLocalTime   = document.getElementById("localTime");
const elTempVal     = document.getElementById("tempVal");
const elFeelsLike   = document.getElementById("feelsLike");
const elCondIcon    = document.getElementById("condIcon");
const elCondBadge   = document.getElementById("condBadge");
const elHighLow     = document.getElementById("highLow");
const elHumidity    = document.getElementById("humidity");
const elWind        = document.getElementById("wind");
const elVisibility  = document.getElementById("visibility");
const elUvIndex     = document.getElementById("uvIndex");
const elForecastRow = document.getElementById("forecastRow");


/* ── 3. RENDERING HELPERS ──────────────────────────────────────── */

/**
 * renderChips
 * Builds the popular-city pill buttons and appends them to #popularChips.
 * Called once on page load.
 */
function renderChips() {
  popularChips.innerHTML = ""; // clear before rendering

  popularCities.forEach(function (cityName) {
    const btn = document.createElement("button");
    btn.className = "chip";
    btn.textContent = cityName;
    btn.setAttribute("aria-label", "Search " + cityName);

    // Clicking a chip is the same as typing the city name and pressing Search
    btn.addEventListener("click", function () {
      searchCity(cityName);
    });

    popularChips.appendChild(btn);
  });
}

/**
 * setActiveChip
 * Adds the .active class to the matching chip button and removes it from all others.
 * @param {string} cityName
 */
function setActiveChip(cityName) {
  const allChips = popularChips.querySelectorAll(".chip");

  allChips.forEach(function (chip) {
    // Compare lowercased to handle case differences safely
    if (chip.textContent.toLowerCase() === cityName.toLowerCase()) {
      chip.classList.add("active");
    } else {
      chip.classList.remove("active");
    }
  });
}

/**
 * renderForecast
 * Builds the 5-day forecast cards and injects them into #forecastRow.
 * @param {Array} forecastArray  — array of [dayName, emoji, tempNumber]
 */
function renderForecast(forecastArray) {
  elForecastRow.innerHTML = ""; // clear previous

  forecastArray.forEach(function (day) {
    const dayName = day[0];
    const icon    = day[1];
    const temp    = day[2];

    // Build the small forecast card element
    const card = document.createElement("div");
    card.className = "forecast-card";
    card.innerHTML =
      '<div class="fc-day">' + dayName + '</div>' +
      '<div class="fc-icon">' + icon + '</div>' +
      '<div class="fc-temp">' + temp + '°C</div>';

    elForecastRow.appendChild(card);
  });
}

/**
 * showWeatherCard
 * Populates every field in the weather result card and makes it visible.
 * Also hides the no-result panel if it was previously showing.
 * @param {string} key   — the exact key as it appears in cityData
 * @param {object} data  — the city's data object from cityData
 */
function showWeatherCard(key, data) {
  /* Populate text fields */
  elCityName.textContent    = key;
  elCityCountry.textContent = data.country;
  elCityCoords.textContent  = data.lat + ", " + data.lon;
  elLocalTime.textContent   = "🕒 " + data.timezone;
  elTempVal.textContent     = data.temp + "°C";
  elFeelsLike.textContent   = "Feels like " + data.feels + "°C";
  elCondIcon.textContent    = data.conditionIcon;
  elCondBadge.textContent   = data.condition;
  elHighLow.textContent     = "H: " + data.high + "°  L: " + data.low + "°";
  elHumidity.textContent    = data.humidity;
  elWind.textContent        = data.wind;
  elVisibility.textContent  = data.visibility;
  elUvIndex.textContent     = data.uv;

  /* Build the 5-day forecast strip */
  renderForecast(data.forecast);

  /* Show the card, hide the error panel */
  weatherCard.classList.remove("hidden");
  noResultEl.classList.add("hidden");
}

/**
 * showNotFound
 * Hides the weather card and shows a friendly error message.
 * @param {string} query — whatever the user typed (used in the message)
 */
function showNotFound(query) {
  weatherCard.classList.add("hidden");

  // Personalise the message with what the user searched for
  noResultMsg.textContent =
    '"' + query + '" isn\'t in our city list yet.';

  noResultEl.classList.remove("hidden");

  // Clear active chip since no city is selected
  setActiveChip("");
}


/* ── 4. SEARCH LOGIC ───────────────────────────────────────────── */

/**
 * searchCity
 * The main function that runs whenever a search is triggered.
 * It looks for the query (case-insensitive) in cityData and
 * either shows the weather card or the not-found message.
 * @param {string} query — city name to look up
 */
function searchCity(query) {
  const trimmed = query.trim();

  // Don't run a search on empty input
  if (!trimmed) return;

  // Hide the suggestions dropdown once search fires
  closeSuggestions();

  /*
     Case-insensitive lookup:
     Object.keys() gives us ["Lagos", "London", …].
     We find the first key whose lowercase matches the query lowercase.
  */
  const matchedKey = Object.keys(cityData).find(function (key) {
    return key.toLowerCase() === trimmed.toLowerCase();
  });

  if (matchedKey) {
    // City found — display weather card
    showWeatherCard(matchedKey, cityData[matchedKey]);
    setActiveChip(matchedKey);
  } else {
    // City not found — show the friendly error message
    showNotFound(trimmed);
  }

  // Clear the input after searching so it's ready for the next search
  searchInput.value = "";
}


/* ── 5. AUTOCOMPLETE (SUGGESTIONS) ────────────────────────────── */

/**
 * updateSuggestions
 * Filters cityData keys by the current input value and renders
 * a dropdown list. Hides the list if the input is empty or no matches.
 * @param {string} val — current value of the search input
 */
function updateSuggestions(val) {
  if (!val) {
    // Nothing typed — hide the dropdown
    closeSuggestions();
    return;
  }

  // Find all cities whose name starts with what the user typed
  const matches = Object.keys(cityData).filter(function (key) {
    return key.toLowerCase().startsWith(val.toLowerCase());
  });

  if (matches.length === 0) {
    // No matches — hide dropdown
    closeSuggestions();
    return;
  }

  // Build the dropdown list
  suggestionsEl.innerHTML = "";  // clear previous items

  matches.forEach(function (cityName) {
    const li = document.createElement("li");
    li.setAttribute("role", "option");

    // Pin emoji + city name on the left, country on the right
    li.innerHTML =
      '<span>📍 ' + cityName + '</span>' +
      '<span class="sug-country">' + cityData[cityName].country + '</span>';

    // Clicking a suggestion triggers a full search for that city
    li.addEventListener("click", function () {
      searchCity(cityName);
    });

    // Keyboard: pressing Enter on a focused suggestion selects it
    li.addEventListener("keydown", function (e) {
      if (e.key === "Enter") searchCity(cityName);
    });

    suggestionsEl.appendChild(li);
  });

  // Make the dropdown visible
  suggestionsEl.classList.remove("hidden");
}

/**
 * closeSuggestions
 * Hides the autocomplete dropdown.
 */
function closeSuggestions() {
  suggestionsEl.classList.add("hidden");
  suggestionsEl.innerHTML = "";
}


/* ── 6. EVENT LISTENERS ────────────────────────────────────────── */

/* Update suggestions on every keystroke */
searchInput.addEventListener("input", function () {
  updateSuggestions(searchInput.value);
});

/* Pressing Enter in the input triggers a search */
searchInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    searchCity(searchInput.value);
  }

  /* Arrow-down: move focus into the suggestions list for keyboard nav */
  if (e.key === "ArrowDown") {
    const firstItem = suggestionsEl.querySelector("li");
    if (firstItem) firstItem.focus();
  }
});

/* Clicking the Search button triggers a search */
searchBtn.addEventListener("click", function () {
  searchCity(searchInput.value);
});

/*
   Click anywhere outside the search area to close suggestions.
   We check that the click target is NOT inside .search-section.
*/
document.addEventListener("click", function (e) {
  const searchSection = document.querySelector(".search-section");
  if (!searchSection.contains(e.target)) {
    closeSuggestions();
  }
});


/* ── 7. INIT ───────────────────────────────────────────────────── */
/*
   Run once the page loads.
   1. Render the popular city chips.
   2. Auto-load Lagos as the default city so the card isn't empty on load.
*/
renderChips();
searchCity("Lagos");   // change this to any city key you prefer