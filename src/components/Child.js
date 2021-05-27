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
          <div className="my-3">
            <p className="Temp">{weather.current.temp_c}</p>
          </div>
        </div>
        
        ) : ('')}
    </div>
  )
}

Child.propTypes = {

}

export default Child
