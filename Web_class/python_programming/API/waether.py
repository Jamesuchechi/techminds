import requests

url = "https://api.open-meteo.com/v1/forecast?latitude=9.0765&longitude=7.3986&current=temperature_2m,wind_speed_10m,weather_code"

response = requests.get(url)

if response.status_code == 200:
    data = response.json()

    current = data["current"]

    print("Current Weather")
    print("----------------")
    print("Temperature:", current["temperature_2m"], "°C")
    print("Wind Speed:", current["wind_speed_10m"], "km/h")
    print("Weather Code:", current["weather_code"])
else:
    print("Could not retrieve weather data.")