import React ,{Component} from 'react';

class InputWeather extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="search-container">
        <h1>You wanna now the weather?</h1>
        <form onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="City"></input>
          <button>Find Out</button>
        </form>
      </div>
    );
  }
}

export default InputWeather;
