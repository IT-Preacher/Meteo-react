import React ,{Component} from 'react';
import './InputWeather.css';

class InputWeather extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="search-container">
        <h1>You wanna now the weather?</h1>
        <form onSubmit={this.props.getWeather}>
          <input className="input-place" type="text" name="city" placeholder="City"></input>
          <button className="input-button">Find Out</button>
        </form>
      </div>
    );
  }
}

export default InputWeather;
