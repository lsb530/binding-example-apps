<template>
  <div>
    <h2>OneWayBinding</h2>
    <input :value="message" @keyup="updateMessage"/>
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const message = ref('Hello Vue!');

function updateMessage(event: Event) {
  const inputElement = event.target as HTMLInputElement;
  message.value = inputElement.value;
}

</script>
