import Vue from 'vue'
import Vuex from 'vuex'
import LoginPage from './modules/LoginPage'
import RegisterPage from './modules/RegisterPage'
Vue.use(Vuex)

export default new Vuex.Store({

    modules:{
        LoginPage,
        RegisterPage
    },

    state: {},

    mutations: {},

    actions: {},

    getters: {}
})
