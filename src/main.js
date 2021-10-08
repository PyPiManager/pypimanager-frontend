import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
import axios from 'axios'

axios.defaults.baseURL="http://127.0.0.1:5000"
axios.defaults.timeout=5000

const app = createApp(App)
installElementPlus(app)
app.use(router).mount('#app')