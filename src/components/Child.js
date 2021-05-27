import React from 'react'
import PropTypes from 'prop-types'

const Child = ({weather}) => {
  return (
    <div className="">
      {(typeof weather.location != "undefined") ? (
        <div>
          <div className="d-flex justify-content-center">
            <h2 className="mx-3">{weather.location.name}</h2>
            <h2 className="mx-3">{weather.location.country}</h2>
          </div>

          <div className="my-5 d-flex col-12">
            <div className="col-3 text-end justify-content-end align-self-center d-flex">
              Min <p className="my-0 mx-2">{weather.forecast.forecastday[0].day.mintemp_c}</p>
              <i class="wi wi-celsius"></i>
            </div>

            <div className="my-3 temp-parent text-center col-4 mx-auto">
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

Child.propTypes = {

}

export default Child
