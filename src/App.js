import React, { useState } from "react";
import axios from "axios"

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_API_KEY}`

  const d = new Date();

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }  
  }

  const date = data.dt && new Date((data.dt + data.timezone) * 1000).toUTCString()
  console.log(date)

  return (
    <div className="App">
  
      <div className="location">
        <div className="city">{data.name}</div>
        <div className="country">{data.sys?.country}</div>
      </div>

      <div className="weather">
        <div className="sky">{data.weather && data.weather[0].main}</div>
        <div className="temperture">{data.main?.temp.toFixed()}˚C</div>
      </div>
    
      <div className="date">
        <div>{date}</div>
      </div>

      <div className="search">
        <input 
        value={location} 
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text"/>
      </div>

      {/* <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}, {data.sys?.country}</p>
          </div>
          <div className="temp">
            <h1>{data.main?.temp.toFixed()}˚C</h1>
          </div>
          <div className="description">
            <p>{data.weather && data.weather[0].main}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">{data.main?.feels_like}˚C</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">{data.sys?.sunrise}</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold"></p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>      */}
    </div>
  );
}

export default App;