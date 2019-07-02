import React from 'react';
import ReactDOM from 'react-dom';
//when making a class we are creating a new class inside JS that has a new method render
//We are subclassing the React.Component class
//State is only used with class components or Functional w/ Hooks
class App extends React.Component {
  render() {
    navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );

    return <div> Latitude: </div>;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
