const API_KEY = "2e48e6eb199773f3d88e8d47680c1ca1";
const API_KEY_K = "9d039935f738c18f1c901c61a76d8afc";

async function getWeather() {
  const city = prompt("Введите город");

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY_K}&units=metric&lang=ru`
  );

  const result = await response.json();
  console.log("result:", result);

  const cityH2 = document.getElementById("city");
  cityH2.innerHTML = `Город: ${result.name}`;
  const temp = document.getElementById("temp");
  temp.innerHTML = `Температура: ${result.main.temp}`;
  console.log(temp);
  const feels = document.getElementById("feels");
  feels.innerHTML = `Ощущается как: ${result.main.feels_like}`;
  const max = document.getElementById("max");
  max.innerHTML = `Максимальная температура: ${result.main.temp_max}`;
  const min = document.getElementById("min");
  min.innerHTML = `Минимальная температура: ${result.main.temp_min}`;
}
function successCallback(location) {
  const { latitude, longitude } = location.coords;
}
function errorCalback() {}
navigator.geolocation.getCurrentPosition(successCallback, errorCalback);
