import React from 'react'
const Houre =({weather}) => {
  const body = document.querySelector('body')
  if (weather.current) {
    if (weather.current.condition.text.match(/cloudy/i)) {
      body.className = ''
      body.classList.add('cloudy')
    } else if (weather.current.condition.text.match(/rain/i)) {
      body.className = ''
      body.classList.add('rainy')
    } else if (weather.current.condition.text.match(/snow/i)) {
      body.className = ''
      body.classList.add('snowy')
    } else if (weather.current.condition.text.match(/wind/i)) {
      body.className = ''
      body.classList.add('windy')
    } else if (weather.current.condition.text.match(/sunny/i) || weather.current.condition.text.match(/clear/i)) {
      body.className = ''
      body.classList.add('sunny')
    }
  }
  return (
    <div>
      {(typeof weather.location != "undefined") ? (
        <div>
          <div className="d-flex justify-content-center">
            <h3 className="mx-3">{weather.location.name}</h3>
            <h3 className="mx-3">{weather.location.country}</h3>
          </div>
          <div className="clear-icon d-flex mx-auto col-10 justify-content-center">
            <h2 className="mx-2">{weather.current.condition.text }</h2>
            <i class="wi wi-night-clear"></i>
          </div>

          <div className="my-2 d-md-flex col-12">
            <div className="col-3 mx-auto my-3  text-end justify-content-center justify-content-md-end align-self-center d-flex">
              Min <p className="my-0 mx-2">{weather.forecast.forecastday[0].day.mintemp_c}</p>
              <i class="wi wi-celsius"></i>
            </div>

            <div className="my-6 temp-parent text-center col-10 col-md-4 mx-auto">
              <div className="text-center fs-1">
                <i class="wi wi-celsius"></i>
              </div>
              <p className="Temp">{weather.current.temp_c}</p>
            </div>

            <div className="col-3 mx-auto my-3 justify-content-center align-self-md-center d-flex">
              Max <p className="my-0 mx-2">{weather.forecast.forecastday[0].day.maxtemp_c}</p>
            <i class="wi wi-celsius"></i>
            </div>
          </div>
        </div>
        
        ) : ('')}
    </div>
  )
}

export default Houre
