class WeatherData {
  constructor(data) {
    const { 
      name: cityName, 
      main: {
        temp: temp, 
        temp_min: temp_min,
        temp_max: temp_max,
        humidity: humidity, 
        pressure: pressure
      },
      clouds: {
        all: cloud
      },
      wind: {
        speed : wind
      },
      weather: weather
    } = data;
    data = null;

    this.weatherData = 
     {
      cityName, 
      temp, 
      temp_min, 
      temp_max, 
      humidity, 
      pressure,
      cloud,
      wind, 
      weather
    } 
  }

  getWeatherData() {
    return this.weatherData;
  }
}