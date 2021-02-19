import App from './App.vue';
import { createApp } from 'vue';
import router from "@/router";
import store from "@/store";
import PrimeVue from 'primevue/config';
// Have imported a theme from PrimeVue, we could make our own
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import 'primeflex/primeflex.css'

axios.defaults.baseURL = "http://127.0.0.1:8000"

createApp(App).mount('#app')
