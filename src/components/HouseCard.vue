<script setup>
import { House } from '../models/House.js';


defineProps({ houseProp: {type: House}})
</script>


<template>
    <div class="row house-card">
    <div class="col-md-6 px-0">
      <img :src="houseProp.imgUrl" :alt="`A ${houseProp.year} ${houseProp.bedrooms} ${houseProp.bathrooms} house`" class="house-image img-fluid">
    </div>
    <div class="col-md-6">
      <div class="p-2 d-flex flex-column justify-content-between h-100">
        <div>
          <h2>{{houseProp.year}} {{houseProp.bedrooms}} Bedroom {{houseProp.bathrooms}} Bedroom house</h2>
          <h3>{{ '$' + houseProp.price }}</h3>
        </div>
        <div>
          <h4>Listed on {{ houseProp.createdAt.toLocaleDateString() }}</h4>
          <p>{{ houseProp.description }}</p>
          <div class="text-end">
            <img :src="houseProp.creator.picture" :alt="houseProp.creator.name" :title="`Contact ${houseProp.creator.name} for more information`" class="creator-picture">
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>


<style lang="scss" scoped>

.house-image { 
  height: 50vh;
  width: 100%;
  object-fit: cover;
}

.house-card {
  background-color: rgb(210, 210, 210);
  box-shadow: 0 5px 10px black;
  border-style: solid;
  border-width: 2px;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

.creator-picture {
height: 15vh;
aspect-ratio: 1/1;
object-fit: cover;
border-radius: 50%;
}
</style>