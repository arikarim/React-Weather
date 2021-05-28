import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Houre from './Houre'
import Daily from './Daily'

const Child = ({weather}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact weather={weather} component={Houre} />
        <Route path="/profile" weather={weather} component={Daily} />
      </Switch>
    </BrowserRouter>
    // <div>
    //   <Houre weather={weather}/>
    //   <Daily weather={weather}/>
    // </div>
  )
}

Child.propTypes = {

}

export default Child
