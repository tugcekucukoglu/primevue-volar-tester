import 'primevue/resources/themes/lara-light-purple/theme.css'

import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Listbox from 'primevue/listbox'

const app = createApp(App)

app.use(PrimeVue)

app.component('Button', Button)
app.component('Listbox', Listbox)

app.mount('#app')
