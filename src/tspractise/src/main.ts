import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'


const app = createApp(App)
app.use(router)
    .mount('#app')

router.afterEach((to) => {
    if (to.meta.title)
        document.title = to.meta.title + ' - TSPractise';
});
