import React from 'react'
import PropTypes from 'prop-types'

const Daily = ({weather}) => {
  return (
    <div>
      {(typeof weather.location != "undefined") ? (
        <div className="my-5">
          {weather.forecast.forecastday[0].hour.map((hour, index) => {
            return (
              <div value={index} className="hours my-1 col-6 mx-auto d-flex justify-content-between">
                <p className="mx-2 py-3">{hour.time.substring(10,20)}</p>
                <p className="mx-2 py-3">{hour.condition.text}</p>
                <div className="mx-2 py-3 d-flex justify-content-start">
                  <p className="mx-2">{hour.temp_c}</p>
                  <i class="wi wi-celsius"></i>
                </div>
              </div>
            )
          })}
        </div>
        
        ) : ('')}
    </div>
  )
}

Daily.propTypes = {

}

export default Daily
