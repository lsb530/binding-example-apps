<template>
  <div>
    <a href="https://code-boki.tistory.com/" target="_blank">
      <img src="/kko.png" class="logo" alt="Blog"/>
    </a>
  </div>
  <h1>Vite + Vue</h1>
  <h2> from Boki</h2>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
  <div class="card">
    <h2>One Way Binding</h2>
    <button @click="changeLook">잘생겨지게 만들기</button>
    <h3 :style="{ color: lookStyle }">{{ look }}</h3>
  </div>
  <div class="card">
    <h2>Two Way Binding Text Input</h2>
    <input id="my-input" type="text" placeholder="Enter text here" v-model="text"/>
    <p class="string-display" v-if="text">{{ text }}</p>
    <p class="string-display" v-else>Initial Value</p>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue"

const count = ref(0)
const text = ref('')
const look = ref('Not handsome')

const changeLook = () => {
  look.value = 'handsome'
};

const lookStyle = computed(() => {
  return look.value === 'Not handsome' ? 'yellow' : 'green';
});
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

input {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  background-color: #1a1a1a;
  color: rgba(255, 255, 255, 0.87);
  font-family: inherit;
  transition: border-color 0.25s;
  margin-bottom: 1em; /* 추가된 여백 */
}

input:hover {
  border-color: #646cff;
}

input:focus {
  outline: 4px auto -webkit-focus-ring-color;
}

.string-display {
  border-radius: 8px;
  border: 1px solid #1a1a1a;
  padding: 0.6em 1.2em;
  font-size: 1em;
  background-color: #1a1a1a;
  color: rgba(255, 255, 255, 0.87);
  margin-top: 1em; /* 추가된 여백 */
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  border: 1px solid cadetblue;
  margin: 0.5em;
}
</style>
