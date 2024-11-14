import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {register} from "swiper/element";
import Swiper from "swiper";
import {EffectFlip} from "swiper/modules";

const app = createApp(App)

register()
Swiper.use([EffectFlip])

app.use(createPinia())
app.use(router)

app.mount('#app')
