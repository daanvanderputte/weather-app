import React, { useState } from "react";
import axios from "axios"

function App() {

  const url = `https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=80996b5a8f7ac15145fdf4b600a617d2`

  return (
    <div className="App">
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
            <p>34C</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>

        </div>

      </div>

      
    </div>
  );
}

export default App;
