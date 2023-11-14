function DateShow() {
  const calendar = new Date();
  const year = calendar.getUTCFullYear();

  const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(calendar);

  const date = calendar.getUTCDate();

  const day = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(calendar);

  document.querySelector(".date").innerHTML = `${day}, ${monthName} ${date}, ${year}`;
}
DateShow();


const apiKey = "604ce7dd92d0c7cd45c07d402d183aa8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
var searchBox = document.querySelector(".search-box");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  
  if (data.cod == 404) {
  document.querySelector(".main").style.display = "none";
  } else {
document.querySelector(".main").style.display = "block";
    document.querySelector(".city").innerHTML = data.name;

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";

    document.querySelector(".weather").innerHTML = data.weather[0].main;

      document.querySelector("#humidity").innerHTML = data.main.humidity + "%";

        document.querySelector("#wind").innerHTML = data.wind.speed + " km/h";
  }
};

document.querySelector("button").addEventListener("click", function() {
  checkWeather(searchBox.value);
});