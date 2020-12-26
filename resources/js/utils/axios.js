import ax from "axios";

// insert all your axios logic here
ax.defaults.baseURL = "http://y.id:8010";
// ax.defaults.baseURL = 'http://47.254.248.35/api/api-mebel-apps/public';
ax.defaults.headers.common["Authorization"] =
    "Bearer RGtjam9yNnlPa3ZicUxpN01ya3RFemloZnF4dVlEUnZpM3lnNGlHUg==";

export default {
    install(Vue, options) {
        Vue.prototype.$Axios = ax;
    }
};
