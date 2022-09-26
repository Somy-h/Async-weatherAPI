
class WeatherView {

  constructor(data = null) {
    this.weatherData = data && new WeatherData(data).getWeatherData();
  }

  render() {
    //console.dir(this.weatherData);
    if (!this.weatherData) return;
    document.querySelector(".weather-container")?.classList.add("active");

    document.getElementById("city--name").textContent = this.weatherData.cityName;
    document.getElementById("description").textContent = this.weatherData.weather[0].description;
    document.getElementById("img--icon").setAttribute(
      'src', 
      `http://openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`);
    document.getElementById("temperature").textContent = this.getTemperature(this.weatherData.temp);
    document.getElementById("temp_max").textContent = this.getTemperature(this.weatherData.temp_min);
    document.getElementById("temp_min").textContent = this.getTemperature(this.weatherData.temp_max);
    document.getElementById("humidity").textContent = this.weatherData.humidity;
    document.getElementById("wind").textContent = this.weatherData.wind;
    document.getElementById("pressure").textContent = this.weatherData.pressure;
    document.getElementById("clouds").textContent = this.weatherData.cloud;

    document.getElementById("city--input").value = "";
    
  }

  getTemperature(kelvin) {
    return Math.round((kelvin - 273.15) * 9/5 + 32);
  }

  displayError(message) {
    console.error(message);
    
    document.querySelector(".weather-container")?.classList.remove("active");

    const refNode = document.getElementById("form--getWeather");
    const div = document.createElement('div');
    div.classList.add('alert');
    div.appendChild(document.createTextNode(message));
    document.querySelector(".info-container").insertBefore(div, refNode);

    // Timeout after 3 sec
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
    document.getElementById("city--input").value = "";
    document.getElementById("city--input").focus();
  }
}