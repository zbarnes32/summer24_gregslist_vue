<script setup>

defineProps({ modalId: { type: String } })

</script>


<template>
  <div class="modal fade" :id="modalId" tabindex="-1" :aria-labelledby="modalId + 'Label'" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" :id="modalId + 'Label'">
            <slot name="modalHeader"></slot>
          </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- NOTE slot allows to swap out what we inject inside of this component when we inject the modal into our code -->
          <slot name="modalBody"></slot>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped></style>