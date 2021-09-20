/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('../../public/assets/css/style.css')
window.Vue = require('vue').default;
window.Cookies = Cookies;
import App from './App.vue';
import VueRouter from 'vue-router';
import store from "./store/store";
import axios from 'axios';
import {routes} from './router/index';
import Vuex from 'vuex';
import VueAxios from 'vue-axios';
import Cookies from 'js-cookie'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(Vuex);
const router = new VueRouter({
    mode: 'history',
    routes: routes
})
 router.beforeEach((to, from, next) => {

    if (!to.meta.middleware) {
        return next()
    }

    const middleware = to.meta.middleware
    const context = {
        to,
        from,
        next,
        store,
    }

    return middleware[0]({
        ...context,
    })
});
const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});
