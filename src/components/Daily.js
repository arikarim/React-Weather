import React from 'react'
import PropTypes from 'prop-types'

const Daily = ({weather}) => {

  const condition = hour => {
    if (hour.condition.text.match(/cloudy/i)) {
     return <i class="wi wi-day-cloudy"></i> 
    } else if (hour.condition.text.match(/mist/i)) {
      return <i class="wi wi-fog"></i> 
    } else if (hour.condition.text.match(/rain/i)) {
      return <i class="wi wi-rain"></i> 
    } else if (hour.condition.text.match(/rain/i) && (hour.condition.text.match(/wind/i))) {
      return <i class="wi-rain-wind"></i> 
    }else if (hour.condition.text.match(/overcast/i)) {
      return <i class="wi wi-cloudy"></i> 
    }else if (hour.condition.text.match(/sunny/i) || (hour.condition.text.match(/clear/i))) {
      return <i class="wi wi-day-sunny"></i> 
    }
  }    
  
  return (
    <div>
      {(typeof weather.location != "undefined") ? (
        <div className="my-5">
          {weather.forecast.forecastday[0].hour.map((hour, index) => {
            return (
              <div key={index} className="hours my-1 col-6 mx-auto d-flex justify-content-between">
                <p className="mx-2 py-3">{hour.time.substring(10,20)}</p>
                <div className="d-flex">
                  <p className="mx-2 py-3">{hour.condition.text}</p>
                  <p>{condition(hour)}</p>
                </div>
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
