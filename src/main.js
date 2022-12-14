/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';

import 'sweetalert2/dist/sweetalert2.min.css';
import './index.css'

loadFonts()

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(store)
app.use(VueSweetalert2)
app.mount('#app')
