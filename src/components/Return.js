import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Return = props => {
  const [input, setInput] = useState('')

  const data = async (location) => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=59fc7f51da5e46f88ae184111212904&q=${location}`, { mode: 'cors' });
      const data = await response.json();
      const test = data;
      console.log(test);
      return test
    } catch {
      return 'sorry...'
    }
  }

  const handler = (e) => {
    e.preventDefault();
    data(input)
    e.target.reset()
    setInput({
      input: ''
    })
  }


  return (
    <div className="text-end">
      <form onSubmit={handler}>
        <input onChange={e => setInput(e.target.value)} />
        <button className="btn btn-danger">submit</button>
      </form>
 
    </div>
  )
}

Return.propTypes = {

}

export default Return
