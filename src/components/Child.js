import React from 'react'
import PropTypes from 'prop-types'
import Houre from './Houre'
import Daily from './Daily'

const Child = ({weather}) => {
  return (
    <div>
      <Houre weather={weather}/>
      <Daily weather={weather}/>
    </div>
  )
}

Child.propTypes = {

}

export default Child
