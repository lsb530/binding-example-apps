<template>
  <div>
    <h2>TwoWayBinding</h2>
    <input v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const message = ref('Hello Vue!');

</script>
