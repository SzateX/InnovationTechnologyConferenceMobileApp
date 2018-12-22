import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import './plugins/vuetify';
import App from './App.vue';
import './registerServiceWorker';
import Vuetify from 'vuetify';
import 'reflect-metadata';

import routes from './routes';

Vue.config.productionTip = false;
Vue.use(Vuetify, {
    iconfont: 'mdi', // 'md' || 'mdi' || 'fa' || 'fa4'
});
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
});

new Vue({
    render: (h) => h(App),
    router,
}).$mount('#app');
