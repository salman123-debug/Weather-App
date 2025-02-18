import { useState, useRef } from 'react'

import './App.css'

function App() {
 

 
   const [weatherData, setWeatherData] = useState(null);
  const inputRef = useRef();
  const Api_key = "8b718b4d2935b7625fe3a17cf8ced283";

  const getData = async () => {
    const cityName = inputRef.current.value;
    if (cityName === "") {
      alert("Please enter a city name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${Api_key}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setWeatherData({
        temperature: data.main.temp,
        city: data.name,
        weather: data.weather[0].description,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div className="container">
      <div className="weather-box">
        <div className="overlay"></div>
      </div>
      <div className="textw">
        <h1>Salman's Weather App</h1>
        <input
          type="text"
          placeholder="Enter City Name"
          className="input"
          ref={inputRef}
        />
        <button onClick={getData} className="btn" style={{ backgroundColor: "#ff9800", marginLeft: "10px", marginBottom: "20px" }}>Get Weather</button>
        {weatherData && (
          <div className="weather-info">
            <h2>{weatherData.city}</h2>
            <p>{weatherData.weather}</p>
            <h2>{weatherData.temperature}°C</h2>
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default App
