import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

/*Font Awesome*/
import "../node_modules/@fortawesome/fontawesome-free/css/all.css"
/*Bootstrap css,js*/
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

createApp(App).use(store).use(router).mount('#app')
