import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import OneWayBinding from "./components/OneWayBinding.vue";
import TwoWayBinding from "./components/TwoWayBinding.vue";

// createApp(OneWayBinding).mount('#app')
// createApp(TwoWayBinding).mount('#app')
createApp(App).mount('#app')
