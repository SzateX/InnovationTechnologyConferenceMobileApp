import '@babel/polyfill';
import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import './plugins/vuetify';
import App from './App.vue';
import './registerServiceWorker';
import Vuetify from 'vuetify';
import 'reflect-metadata';
import { getMode } from 'cordova-plugin-nano-sqlite/lib/sqlite-adapter';
import { nSQL } from 'nano-sql';
// @ts-ignore
import VueMapbox from 'vue-mapbox';
// @ts-ignore
import Mapbox from 'mapbox-gl';
// @ts-ignore
import VueMarkdown from 'vue-markdown';
// @ts-ignore
//import * as VueGoogleMaps from 'vue2-google-maps';
import routes from './routes';
Vue.config.productionTip = false;
Vue.use(Vuetify, {
    iconfont: 'mdi',
});
Vue.use(VueRouter);
Vue.use(VueMapbox, { mapboxgl: Mapbox });
Vue.use(VueMarkdown);
/*Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyB_bZDIdCYZgTonvx1tGZmmzVu-YVqUwlE',
        libraries: 'places', // This is required if you use the Autocomplete plugin
        // OR: libraries: 'places,drawing'
        // OR: libraries: 'places,drawing,visualization'
        // (as you require)

        //// If you want to set the version, you can do so:
        // v: '3.26',
    },

    //// If you intend to programmatically custom event listener code
    //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
    //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
    //// you might need to turn this on.
    // autobindAllEvents: false,

    //// If you want to manually install components, e.g.
    //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
    //// Vue.component('GmapMarker', GmapMarker)
    //// then disable the following:
    // installComponents: true,
});*/
const router = new VueRouter({
    routes,
});
document.addEventListener('deviceready', () => {
    console.log('A jestem tutaj');
    nSQL('Change')
        .model([
        { key: 'id', type: 'int', props: ['pk'] },
        { key: 'model', type: 'string' },
        { key: 'typeOfChange', type: 'string' },
        { key: 'content', type: 'string' },
    ]);
    nSQL('Company')
        .model([
        { key: 'id', type: 'int', props: ['pk'] },
        { key: 'name', type: 'string' },
        { key: 'description', type: 'string' },
        { key: 'status', type: 'PartnerStatus', props: ['ref=>companies[]'] },
        { key: 'picture', type: 'Picture', props: ['ref=>companies[]'] },
        { key: 'speakers', type: 'Speaker[]', props: ['ref=>company'] },
    ]);
    nSQL('Lecture')
        .model([
        { key: 'id', type: 'int', props: ['pk'] },
        { key: 'beginTime', type: 'any' },
        { key: 'endTime', type: 'any' },
        { key: 'description', type: 'string' },
        { key: 'title', type: 'string' },
        { key: 'place', type: 'Place', props: ['ref=>lectures[]'] },
        { key: 'speakers', type: 'Speaker[]', props: ['ref=>lectures[]'] },
    ]);
    nSQL('News')
        .model([
        { key: 'id', type: 'int', props: ['pk'] },
        { key: 'content', type: 'string' },
        { key: 'title', type: 'string' },
        { key: 'creationDate', type: 'any' },
        { key: 'publishDate', type: 'any' },
        { key: 'picture', type: 'Picture', props: ['ref=>newses[]'] },
    ]);
    nSQL('PartnerStatus')
        .model([
        { key: 'id', type: 'int', props: ['pk'] },
        { key: 'name', type: 'string' },
        { key: 'priority', type: 'int' },
        { key: 'companies', type: 'Company[]', props: ['ref=>status'] },
    ]);
    nSQL('Picture')
        .model([
        { key: 'id', type: 'int', props: ['pk'] },
        { key: 'source', type: 'string' },
        { key: 'companies', type: 'Company[]', props: ['ref=>picture'] },
        { key: 'newses', type: 'News[]', props: ['ref=>picture'] },
        { key: 'speakers', type: 'Speaker[]', props: ['ref=>picture'] },
    ]);
    nSQL('Place')
        .model([
        { key: 'id', type: 'int', props: ['pk'] },
        { key: 'buildingName', type: 'string' },
        { key: 'roomName', type: 'string' },
        { key: 'lectures', type: 'Lecture[]', props: ['ref=>place'] },
    ]);
    nSQL('Speaker')
        .model([
        { key: 'id', type: 'int', props: ['pk'] },
        { key: 'name', type: 'string' },
        { key: 'surname', type: 'string' },
        { key: 'description', type: 'string' },
        { key: 'picture', type: 'Picture', props: ['ref=>speakers[]'] },
        { key: 'company', type: 'Company', props: ['ref=>speakers[]'] },
        { key: 'lectures', type: 'Lecture[]', props: ['ref=>speakers[]'] },
    ]).config({
        mode: getMode(),
    }).connect();
}, false);
nSQL().onConnected(() => {
    new Vue({
        render: (h) => h(App),
        router,
    }).$mount('#app');
});
//# sourceMappingURL=main.js.map