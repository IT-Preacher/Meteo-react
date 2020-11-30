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
      main:{
        city: null,
        country: null,
        temp: null,
      },
      second:{
        sunrise: null,
        sunset: null,
      },/*
      weather:{
        "feels_like":,
      }*/
    };
  };

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;

    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
      .then(response => response.json())
      .then(responseData => {
        const {coord:{lon, lat}} = responseData;

        console.log(responseData);
        console.log(lon, lat);
        this.setState({
            isLoaded: true,
            main:{
              city: responseData.name,
              country:  responseData.sys.country,
              temp:  Math.floor(responseData.main.temp),
            },
            second:{
              sunrise:  responseData.sys.sunrise,
              sunset:  responseData.sys.sunset,
            }
          });
      });
      console.log(this.state.main.city,
        this.state.main.country,
        this.state.second.sunrise,
        this.state.second.sunset);
  }


  render() {
    return (
      <div className="App">
        <InputWeather
        getWeather={this.getWeather} />
        <WeatherConteiner
        city = {this.state.main.city}
        temp = {this.state.main.temp}/>
      </div>
    );
  }
}

export default App;
