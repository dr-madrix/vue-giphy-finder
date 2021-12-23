import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// importaciones Axios
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App)
.use(router)
.use(VueAxios, axios)
.mount('#app')
