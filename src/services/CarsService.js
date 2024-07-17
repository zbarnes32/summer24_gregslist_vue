import { AppState } from "../AppState.js"
import { Car } from "../models/Car.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class CarsService {
  async getCars() {
    const response = await api.get('api/cars')
    logger.log('GOT CARS 🚓🚗🚙🏎️', response.data)
    const cars = response.data.map(carPOJO => new Car(carPOJO))
    AppState.cars = cars
  }
}

export const carsService = new CarsService()