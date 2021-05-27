import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Child from './Child'

const Api = props => {
  const [input, setInput] = useState('')
  const [weather, setWeather] = useState({})

  // const data = async (location) => {
  //   try {
  //     const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=59fc7f51da5e46f88ae184111212904&q=${location}`, { mode: 'cors' });
  //     const data = await response.json();
  //     const test = data;
  //     console.log(test)
  //     return test
  //   } catch {
  //     return 'sorry...'
  //   }
  // }

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
    <div className="">
      <div className="text-end my-5">
        <input  
          onChange={e => setInput(e.target.value)}
          value={input}
          onKeyPress={search} />
        </div>
        <Child weather={weather}/>
        <i class="wi wi-night-sleet"></i>
    </div>
  )
}

Api.propTypes = {

}

export default Api
