import Vue from 'vue'
import Vuex from 'vuex'
import LoginPage from './modules/LoginPage'
import RegisterPage from './modules/RegisterPage'
import Post from './modules/post'
import User from './modules/User'
Vue.use(Vuex)

export default new Vuex.Store({

    modules:{
        LoginPage,
        RegisterPage,
        User,
        Post
    },

    state: {},

    mutations: {},

    actions: {},

    getters: {}
})
