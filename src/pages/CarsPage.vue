<script setup>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { carsService } from '../services/CarsService.js';
import { AppState } from '../AppState.js';

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
      <div class="col-12">
        {{ cars }}
      </div>
    </section>
  </div>
</template>


<style scoped></style>