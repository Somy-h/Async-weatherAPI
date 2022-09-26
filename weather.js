class Weather {
  constructor(city) {
    this.appid = '53c9fdd47d15ba2bb85a2378b19b1c96';
    this.city = city;
  }

  async getWeather() {
    try {
      // Make Simple Request - without preflight request
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.appid}`;
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

  // Preflight request: CORS Error
  // const getWeatherInfo = async () => {
  //   const response = await fetch('http://api.openweathermap.org/data/2.5/weather', {
  //     method: 'GET',
  //       origin: 'http://192.168.2.124:5501',
  //     // 'content-type':'application/x-www-form-urlencoded',
  //     headers: {
  //       'q': 'SAN JOSE, USA',
  //       'mode': 'html',
  //       'appid': '53c9fdd47d15ba2bb85a2378b19b1c96'
  //     },
  //   });
  //   ///////////////
  //   console.dir(location.origin);	
  //   const weatherData = await response.json();
  //   console.dir(weatherData);
	// }