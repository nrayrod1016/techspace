import React, { useState } from 'react';
import { getWeather } from '../../services/weatherService';

const Weather = () => {
  const [formData, setFormData] = useState({
    zip: ''
  })
  const [weatherData, setWeatherData] = useState({})
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      getWeather(formData.zip)
      .then(weatherData => {
        setWeatherData(weatherData)
      })
    } catch (err) {
      console.log(err)
    }
  }
  const { zip } = formData

  const isFormInvalid = () => {
    return !(zip)
  }

  return (
    <>
      <h2>Weather Info</h2>
      <form
      autoComplete="off"
      onSubmit={handleSubmit}
      > 
      <p>Zip:</p>
      <input
        type="text"
        value={zip}
        name="zip"
        onChange={handleChange}
      />
      <button disabled={isFormInvalid()}>Get Weather</button>
      </form>
    </>
  );
}
 
export default Weather;