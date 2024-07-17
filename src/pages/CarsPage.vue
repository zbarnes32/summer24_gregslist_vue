<script setup>
import { onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { carsService } from '../services/CarsService.js';

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
  <h1>Cars Page</h1>
</template>


<style scoped></style>