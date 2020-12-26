require("./bootstrap");
// import Vue from "vue";
// import VueRouter from "vue-router";
import Vuex from "vuex";
// import VueAxios from "vue-axios";

import { routes } from "./routes";
import MainApp from "./components/MainApp.vue";

import StoreData from "./store";
import EndPointData from "./endpoint";

// Registering Module // don't know why this not work for axios
// Vue.use(VueRouter);
// Vue.use(Vuex);
// Vue.use(VueAxios);
// Vue.use(axios);

// bad practice using window // but work with axios
window.Vue = require("vue");

window.VueRouter = require("vue-router").default;

window.VueAxios = require("vue-axios").default;

window.Axios = require("axios").default;
window.axios.defaults.headers.common["Authorization"] =
    "Bearer RGtjam9yNnlPa3ZicUxpN01ya3RFemloZnF4dVlEUnZpM3lnNGlHUg==";
// import axios from "./axios";

// Registering Module
Vue.use(VueRouter, Vuex, VueAxios, axios);

const store = new Vuex.Store(StoreData);
const endpoint = new Vuex.Store(EndPointData);

const router = new VueRouter({
    routes,
    mode: "history"
});

const app = new Vue({
    el: "#app",
    router,
    store,
    endpoint,
    components: {
        MainApp
    }
});
