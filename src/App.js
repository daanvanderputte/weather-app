import React, { useState } from "react";
import axios from "axios"

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=80996b5a8f7ac15145fdf4b600a617d2`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    }  
  }

  return (
    <div className="App">
      <div className="search">
        <input 
        value={location} 
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text"/>

      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Berlin</p>
          </div>
          <div className="temp">
            <h1>28C</h1>
          </div>
          <div className="description">
            <p>Sunny</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">34C</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>     
    </div>
  );
}

export default App;
