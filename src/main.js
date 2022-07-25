import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/fonts/lato.css'
import './assets/fonts/roboto.css'

createApp(App).use(store).mount('#app')
