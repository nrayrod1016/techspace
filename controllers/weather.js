import axios from 'axios'

function getWeather(req, res) {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${req.params.zip}&appid=${process.env.API_KEY}`)
  .then(apiResponse => {
    res.json(apiResponse.data)
  })
}

export {
  getWeather
}