import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
const vars = {
    install: (app) => {
        app.config.globalProperties.$axios = axios
    }
}
import '@/assets/style.scss'

const app = createApp(App)

// app.mount("#app")
app.use(store)
    .use(router)
    .use(vars)
    .mount('#app')