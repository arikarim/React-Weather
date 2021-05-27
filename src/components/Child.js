import React from 'react'
import PropTypes from 'prop-types'
import Houre from './Houre'

const Child = ({weather}) => {
  return (
    <div>
      <Houre weather={weather}/>
    </div>
  )
}

Child.propTypes = {

}

export default Child
