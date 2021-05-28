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
    if (e.key === 'Enter') {
      fetch(`https://api.weatherapi.com/v1/forecast.json?key=59fc7f51da5e46f88ae184111212904&q=${input}`, { mode: 'cors' })
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setInput('');
          console.log(result);
        });
    }
  }

  return (
    <BrowserRouter>
      <Nav />
      <div className="text-end input my-5">
        <input  
          onChange={e => setInput(e.target.value)}
          value={input}
          onKeyPress={search}
          placeholder="Search" />
        </div>
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
