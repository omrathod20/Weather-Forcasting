
const apiKey = `2690220a8df45c31c30614414fb76757`;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const date = document.querySelector(".date")

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  document.querySelector(".visibility").innerHTML = data.visibility / 1000 + "km/h";

  const currentDate = new Date();
  date.textContent = currentDate.toDateString();

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "image/clouds.png";
  }
  else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "image/rain.png";
  }
  else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "image/clouds.png";
  }
  else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "image/clear.png";
  }
  else if (data.weather[0].main == "Haze") {
    weatherIcon.src = "image/haze.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
})

