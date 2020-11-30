import API_KEY from './components/APIWeather/APIKEY.js';

export default GetService{
  constructor(){
    this._apiBase = `https://api.openweathermap.org/data/2.5`;
  }

  async getResours(e, url){
    e.preventDefault();
    const res = await fetch(`${this._ApiBase}${url}`);

    if(!res.ok){
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  }

  getWeather(){
    return this.getResours(`/weather?q=${city}&units=metric&appid=${API_KEY}`)
  }
}
