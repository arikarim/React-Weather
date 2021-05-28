import React from 'react'
const About = props => {
  return (
    <div>
      <h1 className="m-4">Weather Wide</h1>
      <div className="about col-10 mx-auto p-3">
        <p className="fw-bolder">About our application:</p>
        <h6>#Weather Wide is a Weather application built with <span className="span">React, Bootstrap, and CSS </span>
            you can search across the globe or find out your local weather just by typing your city name.</h6>

      </div>
      <div className="about p-3 my-3 col-10 mx-auto d-flex justify-content-between">
        <div className="d-flex justify-content-center my-auto col-4">
          <ul className="list-unstyled icon-ul col-6">
            <li className="icons "><a href="https://www.linkedin.com/in/ari-karim/"><i class="fab fa-linkedin"></i></a></li>
            <li className="icons "><a href="https://github.com/arikarim"><i class="fab fa-github-square"></i></a></li>
            <li className="icons "><a href="mailto:arikarim146@gmail.com"><i class="fas fa-envelope-square"></i></a></li>
            <li className="icons "><a href="https://twitter.com/AriKari86036498"><i class="fab fa-twitter-square"></i></a></li>
          </ul>
        </div>
        <div className="col-8 my-auto">
          <div className="fw-bolder">About the author:</div>
          <div className="fw-bolder">"Ari Karim"</div>
          <p className="">Hello My name is Ari Karim, I'm a full-stack software engineer who specializes in using JavaScript, Ruby on Rails, and React, and I have a passion and love for learning and bringing the best software solutions to businesses.</p>
        </div>
      </div>
    </div>
  )
}

export default About
