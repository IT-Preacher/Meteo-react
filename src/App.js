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
        coord:{
          lon: null,
          lat: null,
        },
      },
      second:{
        sunrise: null,
        sunset: null,
      },
      weather:{
        temp: null,
        feelsLike: null,
      },
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
              coord:{
                lon: false,
                lat: this.lat,
              },
            },
            second:{
              sunrise:  responseData.sys.sunrise,
              sunset:  responseData.sys.sunset,
            },
            weather:{
              temp: Math.floor(responseData.main.temp),
              feelsLike: false,
            },
          });
      }).catch( error => console.log(`Could not fetch ${error}`));
      console.log(this.state.main.city,
        this.state.main.coord.lon,

        this.state.second.sunset);
  }


  render() {
    return (
      <div className="App">
        <InputWeather
        getWeather={this.getWeather} />
        <WeatherConteiner
        city = {this.state.main.city}
        temp = {this.state.weather.temp}/>
      </div>
    );
  }
}

export default App;
