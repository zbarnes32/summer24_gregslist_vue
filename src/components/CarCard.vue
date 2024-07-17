<script setup>
import { Car } from '../models/Car.js'
// NOTE allows this component to take in a car object when injected into another component
defineProps({ carProp: { type: Car } })

</script>


<template>
  <p> {{ carProp.make }} {{ carProp.model }}</p>
</template>


<style scoped></style>