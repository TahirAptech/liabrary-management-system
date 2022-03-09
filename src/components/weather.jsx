import { useEffect, useState } from 'react'
import './WeatherCSS.css';

const Weather = () => {
   const [data, setWeatherData] = useState({});
   let [locationCity, setLocationCity] = useState({}); 
   const [cityName, setCityName] = useState("Islamabad");
   const [searchCityState, setSearchCityState] = useState("Islamabad");

   useEffect(_ => {
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(
            (position)=>{
              console.log(position)
              setLocationCity(position);
            },
            (error)=>{
              alert("You rejected the permission!");
            }
          );
        }
        else{
          alert("Geolocation is not supported!");
        }
      //  alert("GeoLocation call");
   },[]);

   useEffect(function(){
     let query = locationCity && locationCity.coords ? `lat=${locationCity.coords.latitude}&lon=${locationCity.coords.longitude}` : `q=${searchCityState}`
       fetch(`https://api.openweathermap.org/data/2.5/weather?${query}&appid=ce92e730593238d7c8b175580b6c3b2c&units=metric`)
        .then((res) => res.json())
        .then((result) => {
            setWeatherData(result);
        })
        .catch(function(err){
            console.log(err);
        });
    },[searchCityState, locationCity]);

    const searchCity = (e) => {
      if(e.key === 'Enter' && cityName)
      {
        setLocationCity(null);
        setSearchCityState(cityName);
      }
    };
   
    return (
      <>
       <div className="app">
        <div className="search">
          <input
            onChange={event => setCityName(event.target.value)}
            onKeyPress={searchCity}
            placeholder='Enter Location'
            type="text" />
        </div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            </div>
          </div>
          {(data.name || 0) &&
            <div className="bottom">
              <div className="feels">
                {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                <p>Humidity</p>
              </div>
              {/* <div className="wind">
                {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
                <p>Wind Speed</p>
              </div> */}
              <div className="wind">
                {data.weather && data.weather[0].main ? <p className='bold'>{data.weather[0].main}</p> : null}
                <p>Condition</p>
              </div>
            </div>
          }
        </div>
      </div>
      </>
    );
  }

export default Weather;