import React from 'react'
import PropTypes from 'prop-types'

const Child = ({weather}) => {
  return (
    <div className="">
      {(typeof weather.location != "undefined") ? (
        <div className="d-flex justify-content-center">
          <h2 className="mx-3">{weather.location.name}</h2>
          <h2 className="mx-3">{weather.location.country}</h2>
        </div>
        ) : ('')}
    </div>
  )
}

Child.propTypes = {

}

export default Child
