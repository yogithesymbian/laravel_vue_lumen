require("./bootstrap");
import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import axios from "./utils/axios";

import { routes } from "./routes";

import StoreData from "./utils/store";
import EndPointData from "./endpoint";

import MainApp from "./components/MainApp.vue";

// Registering Module // don't know why this not work for axios
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(axios);

// set store data vuex
const store = new Vuex.Store(StoreData);
const endpoint = new Vuex.Store(EndPointData);

// set VueRouter
const router = new VueRouter({
    routes,
    mode: "history"
});

// set all Vue Element
const app = new Vue({
    el: "#app",
    router,
    store,
    endpoint,
    components: {
        MainApp
    }
});
