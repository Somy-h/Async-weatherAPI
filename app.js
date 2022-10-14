class App {
  constructor() {
    this.setup();
  }

  setup() {
    // Add Event Listeners
    document.getElementById("form--getWeather").addEventListener("submit", (e) => {
      e.preventDefault();
      this.onGetWeather();
    });
    document.getElementById("city--input").addEventListener("keypress", (e) => {
      if (e.keyCode === 13) { // Enter key
        this.onGetWeather();
        e.preventDefault();
      }
    });
  }

  onGetWeather() {
    let cityName = document.getElementById("city--input")?.value.trim();
    new Weather(cityName).getWeather()
      .then(data => new WeatherView(data).render())
      .catch(msg => new WeatherView().displayError(msg))
  }  
}

window.onload = () => new App();