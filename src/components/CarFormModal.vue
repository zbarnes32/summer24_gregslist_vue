<script setup>
import { ref } from 'vue';

const engineTypes = [
  "unknown",
  "2 stroke",
  "4 cylinder",
  "v6",
  "v8",
  "v10",
  "v12",
  "small",
  "medium",
  "large",
  "chuncko"
]

const editableCarData = ref({
  make: '',
  model: '',
  year: 0,
  price: 0,
  description: '',
  engineType: 'unknown',
  color: '#000000',
  imgUrl: ''
})

function createCar() {
  console.log('creating car');

}
</script>


<template>
  <div class="modal fade" id="carFormModal" tabindex="-1" aria-labelledby="carFormModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="carFormModalLabel">Create Car</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

          <!-- NOTE .prevent will call event.preventDefault() -->
          <form @submit.prevent="createCar()">
            <div class="form-floating mb-3">
              <!-- NOTE v-model sets up tow data binding between the input's value and a variable declared in the script -->
              <!-- this input is bound to the make property in our ref object -->
              <input v-model="editableCarData.make" type="text" class="form-control" id="make" placeholder="Car Make..."
                required maxlength="500">
              <label for="make">Car Make</label>
            </div>
            <div class="form-floating mb-3">
              <input v-model="editableCarData.model" type="text" class="form-control" id="model"
                placeholder="Car Model..." required maxlength="500">
              <label for="model">Car Model</label>
            </div>
            <div class="form-floating mb-3">
              <input v-model="editableCarData.imgUrl" type="url" class="form-control" id="imgUrl"
                placeholder="Car ImgUrl..." required maxlength="500">
              <label for="imgUrl">Car ImgUrl</label>
            </div>
            <div class="form-floating mb-3">
              <textarea v-model="editableCarData.description" class="form-control" placeholder="Car Description..."
                id="description" maxlength="500"></textarea>
              <label for="description">Car Description</label>
            </div>
            <div class="form-floating mb-3">
              <input v-model="editableCarData.year" type="number" class="form-control" id="year"
                placeholder="Car Year..." required>
              <label for="year">Car Year</label>
            </div>
            <div class="form-floating mb-3">
              <input v-model="editableCarData.price" type="range" class="form-control" id="price"
                placeholder="Car Price..." required min="0" max="1000000">
              <label for="price">Car Price {{ '$' + editableCarData.price }}</label>
            </div>
            <div class="row align-items-center">
              <div class="col-2">
                <div class="mb-3">
                  <label for="color" class="form-label">Color picker</label>
                  <input v-model="editableCarData.color" type="color" class="form-control form-control-color" id="color"
                    value="#000000" title="Choose your color">
                </div>
              </div>
              <div class="col-10">
                <div class="form-floating mb-3">
                  <select v-model="editableCarData.engineType" class="form-select text-capitalize" id="engineType"
                    aria-label="Engine Type for Car">
                    <option v-for="engineType in engineTypes" :key="engineType" :value="engineType"
                      class="text-capitalize">
                      {{ engineType }}
                    </option>
                  </select>
                  <label for="engineType">Engine Type</label>
                </div>
              </div>
            </div>
            <div class="text-end">
              <button class="btn btn-dark" type="submit">Submit</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>


<style scoped></style>