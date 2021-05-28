import React from 'react'
const About = props => {
  return (
    <div>
      <h1 className="m-4">Weather Wide</h1>
      <div className="about col-10 mx-auto p-3">
        <p className="fw-bolder">About our application:</p>
        <h6>#Weather Wide is a Weather application built with <span className="span">React, Bootstrap and CSS </span>
            you can search across the glob or find out your local weather just by typing your city name.</h6>

      </div>
      <div className="about my-3 col-10 mx-auto d-flex justify-content-end">
        <div className="col-8">
          <div className="fw-bolder">About the author:</div>
          <div className="fw-bolder">"Ari Karim"</div>
          <p className="">Hello My name is Ari Karim, I'm a full-stack software engineer who specializes in using JavaScript, Ruby on Rails, and React, and I have a passion and love for learning and bringing the best software solutions to businesses.</p>
        </div>
      </div>
    </div>
  )
}

export default About
