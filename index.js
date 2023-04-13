const search = document.querySelector(".check");
const images = document.querySelector(".images");
const errorText = document.querySelector(".error");
const notFound = document.querySelector(".notfound");
const icons = document.querySelector(".icons");
const humidity = document.querySelector(".percent");

search.addEventListener("click", () => {
  const APIKey = "bccf9f4fdb5d61efd6ff063ad80cb5be";
  const city = document.querySelector(".weather-input").value;
  const windSpeed = document.querySelector(".km");
  const cityName = document.querySelector(".city-name");

  if (city === "") {
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      if (json.cod === "404") {
        images.src = "images/404.png";
        images.style.display = "block";
        errorText.innerHTML = "Error not found :(";
        windSpeed.innerHTML = "";
        humidity.innerHTML = "";
        cityName.innerHTML = "";
        return;
      }
      images.style.display = "none";
      errorText.innerHTML = "";
      

      
      

      switch (json.weather[0].main) {
        case "Clear":
          images.src = "images/clear.jpg";
          images.style.display = "block";
          icons.style.display = "block";
          cityName.innerHTML = `${json.name}`;
          humidity.innerHTML = `Humidity: ${json.main.humidity}%`;
          windSpeed.innerHTML = `Wind Speed: ${parseInt(json.wind.speed)}Km/h`;
          errorText.innerHTML = `Temp: ${parseInt(
            json.main.temp
          )}<span>°C</span>`;
          break;

          case "Mist":
          images.src = "images/foggy.jpg";
          images.style.display = "block";
          icons.style.display = "block";
          cityName.innerHTML = `${json.name}`;
          humidity.innerHTML = `Humidity: ${json.main.humidity}%`;
          windSpeed.innerHTML = `Wind Speed: ${parseInt(json.wind.speed)}Km/h`;
          errorText.innerHTML = `Temp: ${parseInt(
            json.main.temp
          )}<span>°C</span>`;
          break;

        case "Rain":
          images.src = "images/rain.jpg";
          images.style.display = "block";
          icons.style.display = "block";
          cityName.innerHTML = `${json.name}`;
          humidity.innerHTML = `Humidity: ${json.main.humidity}%`;
          windSpeed.innerHTML = `Wind Speed: ${parseInt(json.wind.speed)}Km/h`;
          errorText.innerHTML = `Temp: ${parseInt(
            json.main.temp
          )}<span>°C</span>`;
          break;

        case "Snow":
          images.src = "images/snow.jpg";
          images.style.display = "block";
          icons.style.display = "block";
          cityName.innerHTML = `${json.name}`;
          humidity.innerHTML = `Humidity: ${json.main.humidity}%`;
          windSpeed.innerHTML = `Wind Speed: ${parseInt(json.wind.speed)}Km/h`;
          errorText.innerHTML = `Temp: ${parseInt(
            json.main.temp
          )}<span>°C</span>`;
          break;

        case "Clouds":
          images.src = "images/cloudy.jpg";
          images.style.display = "block";
          icons.style.display = "block";
          cityName.innerHTML = `${json.name}`;
          humidity.innerHTML = `Humidity: ${json.main.humidity}%`;
          windSpeed.innerHTML = `Wind Speed: ${parseInt(json.wind.speed)}Km/h`;
          errorText.innerHTML = `Temp: ${parseInt(
            json.main.temp
          )}<span>°C</span>`;
          break;

        case "Haze":
          images.src = "images/mist.jpg";
          images.style.display = "block";
          icons.style.display = "block";
          cityName.innerHTML = `${json.name}`;
          humidity.innerHTML = `Humidity: ${json.main.humidity}%`;
          windSpeed.innerHTML = `Wind Speed: ${parseInt(json.wind.speed)}Km/h`;
          errorText.innerHTML = `Temp: ${parseInt(
            json.main.temp
          )}<span>°C</span>`;
          break;

        default:
          images.src = "";
      }
    });
});
