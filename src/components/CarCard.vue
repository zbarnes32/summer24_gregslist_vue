<script setup>
import { Car } from '../models/Car.js'
import { carsService } from '../services/CarsService.js';
import Pop from '../utils/Pop.js';

// NOTE allows this component to take in a car object when injected into another component
defineProps({ carProp: { type: Car } })

async function destroyCar(carId) {
  try {
    const wantsToDelete = await Pop.confirm('Are you sure you want to delete your car?')
    if (!wantsToDelete) return
    await carsService.destroyCar(carId)
  } catch (error) {
    Pop.error(error)
  }
}

</script>


<template>
  <div class="row car-card" :style="{ borderColor: carProp.color }">
    <div class="col-md-6 px-0">
      <img :src="carProp.imgUrl" :alt="`${carProp.year} ${carProp.make} ${carProp.model}`" class="car-img img-fluid">
    </div>
    <div class="col-md-6">
      <div class="p-2 d-flex flex-column justify-content-between h-100">
        <div>
          <h2>{{ carProp.year }} {{ carProp.make }} {{ carProp.model }}</h2>
          <h3>{{ '$' + carProp.price }}</h3>
        </div>
        <div>
          <h3>Listed on {{ carProp.createdAt.toLocaleDateString() }}</h3>
          <p>{{ carProp.description }}</p>
          <div class="d-flex justify-content-between align-items-center">
            <button @click="destroyCar(carProp.id)" class="btn btn-outline-danger" title="Delete Car" type="button">
              <i class="mdi mdi-close-octagon fs-3"></i>
            </button>
            <img :src="carProp.creator.picture" :alt="carProp.creator.name"
              :title="`Contact ${carProp.creator.name} for more information`" class="creator-picture">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.car-img {
  min-height: 100%;
  width: 100%;
  object-fit: cover;
}

.car-card {
  background-color: rgb(215, 215, 215);
  box-shadow: 0 7px 15px black;
  border-style: solid;
  border-width: 6px;
}

.creator-picture {
  height: 15vh;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 50%;
}
</style>