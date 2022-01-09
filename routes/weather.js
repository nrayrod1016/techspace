import { Router } from 'express'
import * as weatherCtrl from '../controllers/weather.js'


const router = Router()

/*---------- Public Routes ----------*/
router.get('/:zip', weatherCtrl.getWeather)

export { 
  router
}