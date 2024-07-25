import { createApp } from 'vue'
import App from './App.vue'

//Configuracion del router (dependencias)
import router from './router/router.js'

createApp(App).use(router).mount('#app')

