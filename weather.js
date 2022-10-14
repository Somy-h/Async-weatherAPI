class Weather {
  constructor(city) {
    this.appid = envConfig.API_KEY;
    this.city = city;
  }

  async getWeather() {
    try {
      // Make Simple Request - without preflight request
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.appid}`

      const response = await fetch(url);
      
      if (response.status === 404) {
        throw new Error(`City is not found. Try again.`);
      }
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } 
    catch (e) { 
      throw new Error(e.message);
    } 
  }
}