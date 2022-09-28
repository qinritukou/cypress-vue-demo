<template>
  <div class="overlay" v-if="show">
    <div class="modal" data-cy="modal">
      <div class="header"><slot name="header"></slot></div>
      <hr />
      <div class="content"><slot /></div>
      <hr />
      <div class="footer" data-cy="closeButton">
        <slot name="footer"><button @click="show = !show">Close</button></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const show = ref(true);
</script>

<style scoped>
.modal {
  /* Styles */
  display: flex;
  flex-direction: column;
}

.header {
  font-size: 1.25rem;
}

.content {
  flex-grow: 1;
}
</style>
