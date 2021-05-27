import React from 'react'
import PropTypes from 'prop-types'

const Daily = ({weather}) => {
  return (
    <div>
      {(typeof weather.location != "undefined") ? (
        <div className="my-5">
          {weather.forecast.forecastday[0].hour.map((hour) => {
            return (
              <div className="hours my-1 col-6 mx-auto d-flex">
                <p className="mx-2">{hour.time.substring(10,20)}</p>
                <p className="mx-2">{hour.condition.text}</p>
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
