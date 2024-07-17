<script setup>

import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js';
import { AppState } from '../AppState.js';
import HouseCard from '../components/HouseCard.vue';

onMounted(() => {
    getHouses()
})

const houses = computed(() => AppState.houses)

async function getHouses() {
    try {
        await housesService.getHouses()
    }
    catch (error) {
        Pop.error(error);
    }
}

</script>


<template>
    <section class="container">
        <div class="row">
            <div v-for="house in houses" :key="house.id" class="col-12">
                <HouseCard :houseProp="house"/>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped></style>