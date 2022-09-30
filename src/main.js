import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/main.css';

const app = createApp(App);

app.config.globalProperties.rattleUrl = 'https://rattle-api.hhytest.com/api';
// app.config.globalProperties.rattleUrl = 'http://localhost/rattle-api/api';

app.use(router);

app.mount('#app');
