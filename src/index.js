import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay/SeasonDisplay.js';
import Spinner from './Spinner.js';
//when making a class we are creating a new class inside JS that has a new method render
//We are subclassing the React.Component class
//State is only used with class components or Functional w/ Hooks
//updating state rerenders the Component
//ONLY UPDATE STATE WITH --------------------->setSTATE<-------------------
//1. initialize
class App extends React.Component {

  //we can just use state = { var: value } instead of constructor method
  state = { lat: null, errorMessage: ''};

  componentDidMount() {
    console.log("App Component mounted");

    //with the callback function we setState of the state value lat to the returned position.coords.latitude data member
    navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );

  }

  componentDidUpdate() {
    console.log("State update caused re-rendered!")
  }

  //React says that we have to define render!!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div > Error: {
        this.state.errorMessage
      } < /div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    return <Spinner />
  }
}

ReactDOM.render( <
  App / > ,
  document.querySelector('#root')
);
