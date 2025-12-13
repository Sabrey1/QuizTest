import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import './style.css'
import App from './App.vue'
import Aura from '@primeuix/themes/aura';
import router from './router'
import i18n from './i18n'
import AppBar from '@/Layout/AppBar.vue'
import ToolBar from '@/Layout/ToolBar.vue'


const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(router)
app.use(i18n)

app.component("AppBar", AppBar) 
app.component("ToolBar", ToolBar);
app.mount('#app')
