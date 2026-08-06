import requests

url = "https://api.github.com/users/proton2-limitless"

response = requests.get(url)

print(response.text)