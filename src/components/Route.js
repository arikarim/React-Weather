import React, {useState} from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Houre from './Houre'
import Daily from './Daily'
import Nav from './Nav'
import About from './About'
const Api = props => {
  const [input, setInput] = useState('')
  const [weather, setWeather] = useState({})

  const search = e => {
    const alert = document.querySelector('.alert')
    alert.innerHTML ='';
    if (e.key === 'Enter') {
      fetch(`https://api.weatherapi.com/v1/forecast.json?key=59fc7f51da5e46f88ae184111212904&q=${input}`, { mode: 'cors' })
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setInput('');
        if(result.error) {
          alert.innerHTML =`
          Sorry, we could not find your location`
        }
      })
    }
  }

  function getWeather() {
    // let temperature = document.getElementById("temperature");
    // let description = document.getElementById("description");
    let locationn = document.querySelector('.geolocation');
  
    let api = "https://api.weatherapi.com/v1/forecast.json?key=59fc7f51da5e46f88ae184111212904&q=";
    let apiKey = "59fc7f51da5e46f88ae184111212904";

  
    navigator.geolocation.getCurrentPosition(success, error);
  
    function success(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
  
      let url =`
      ${api}${latitude} ,${longitude} 
      `

        
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setWeather(data)
        });
    }
  
    function error() {
      return "Unable to retrieve your location";
    }
  }

  window.onload = () => {
    getWeather()
  }

  return (
    <BrowserRouter>
      <Nav />
      <div className="text-end input mt-5">
        <input  
          onChange={e => setInput(e.target.value)}
          value={input}
          onKeyPress={search}
          placeholder="Search" />
        </div>
        <div className="alert"></div>
        <div className="geolocation"></div>
        <Switch>
          <Route path='/' exact render={(props) => (
            <Houre {...props} weather={weather} />
              )} />
          <Route path='/hour' exact render={(props) => (
            <Daily {...props} weather={weather} />
              )} />
          <Route path='/about' exact render={(props) => (
            <About {...props} />
              )} />
        </Switch>
    </BrowserRouter>
  )
}

export default Api
