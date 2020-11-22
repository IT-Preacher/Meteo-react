import React ,{Component} from 'react';
import './App.css';
import InputWeather from './components/APIWeather/InputWeather.js';
import API_KEY from './components/APIWeather/APIKEY.js';
import WeatherConteiner from './components/OutputWeather/OutWeather.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      city: null,
      sys:{
        country: null,
        sunrise: null,
        sunset: null,
        temp: null,
      }/*,
      weather:{
        temp,
        "feels_like"
      }*/
    };
  };

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    /*const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const data = await api_url.json();
    const {coord:{lon, lat}} = data;
    const weatherStory = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_KEY}`);
    const dataStory = await weatherStory.json();*/



    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
      .then(response => response.json())
      .then(responseData => {
        const {coord:{lon, lat}} = responseData;

        console.log(responseData);
        console.log(lon, lat);
        this.setState({
            isLoaded: true,
            city: responseData.name,
            sys:{
              country:  responseData.sys.country,
              sunrise:  responseData.sys.sunrise,
              sunset:  responseData.sys.sunset,
              temp:  responseData.main.temp
            }
          });
      });
      console.log(this.state.city,
        this.state.sys.country,
        this.state.sys.sunrise,
        this.state.sys.sunset);
    //console.log(data);
    //console.log(data.coord);
    //console.log(dataStory);
    //console.log(lon, lat);
  }


  render() {
    return (
      <div className="App">
        <InputWeather
        getWeather={this.getWeather} />
        <WeatherConteiner
        city = {this.state.city}
        temp = {this.state.sys.temp}/>
      </div>
    );
  }
}

export default App;
