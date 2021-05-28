import React from 'react'
import PropTypes from 'prop-types'

const Houre =({weather}) => {
  const body = document.querySelector('body')
  if (weather.current) {
    if (weather.current.condition.text.match(/cloudy/i)) {
      body.classList.add('cloudy')
    } else if (weather.current.condition.text.match(/rain/i)) {
      body.classList.add('rainy')
    } else if (weather.current.condition.text.match(/snow/i)) {
      body.classList.add('snowy')
    } else if (weather.current.condition.text.match(/wind/i)) {
      body.classList.add('windy')
    } else if (weather.current.condition.text.match(/sunny/i) || weather.current.condition.text.match(/clear/i)) {
      body.classList.add('sunny')
    }
  }
  return (
    <div>
      {(typeof weather.location != "undefined") ? (
        <div>
          <div className="d-flex justify-content-center">
            <h2 className="mx-3">{weather.location.name}</h2>
            <h2 className="mx-3">{weather.location.country}</h2>
          </div>
          <div className="clear-icon d-flex mx-auto col-4 justify-content-center">
            <h1 className="mx-2">{weather.current.condition.text }</h1>
            <i class="wi wi-night-clear"></i>
          </div>

          <div className="my-2 d-flex col-12">
            <div className="col-3 text-end justify-content-end align-self-center d-flex">
              Min <p className="my-0 mx-2">{weather.forecast.forecastday[0].day.mintemp_c}</p>
              <i class="wi wi-celsius"></i>
            </div>

            <div className="my-6 temp-parent text-center col-4 mx-auto">
              <div className="text-center fs-1">
                <i class="wi wi-celsius"></i>
              </div>
              <p className="Temp">{weather.current.temp_c}</p>
            </div>

            <div className="col-3 align-self-center d-flex">
            Max <p className="my-0 mx-2">{weather.forecast.forecastday[0].day.maxtemp_c}</p>
            <i class="wi wi-celsius"></i>
            </div>
          </div>
        </div>
        
        ) : ('')}
    </div>
  )
}

Houre.propTypes = {

}

export default Houre
