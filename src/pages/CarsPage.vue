<script setup>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { carsService } from '../services/CarsService.js';
import { AppState } from '../AppState.js';
import CarCard from '../components/CarCard.vue';

const cars = computed(() => AppState.cars)

onMounted(() => {
  getCars()
})


async function getCars() {
  try {
    await carsService.getCars()
  } catch (error) {
    // NOTE pop.error should automatically log your error for you
    Pop.error(error)
  }
}

</script>


<template>
  <div class="container">
    <section class="row">
      <h1>Cars</h1>
    </section>
    <section class="row">
      <div v-for="car in cars" :key="car.id" class="col-12 mb-3">
        <!-- NOTE carProp is the name of my prop in the CarCard, and car is the value being passed down -->
        <CarCard :carProp="car" />
      </div>
    </section>
  </div>
</template>


<style scoped></style>