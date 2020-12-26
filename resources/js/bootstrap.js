window._ = require("lodash");

// try {
//     window.$ = window.jQuery = require("jquery");

//     require("bootstrap");
// } catch (e) {}

window.axios = require("axios");

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

// let token = document.head.querySelector('meta[name="csrf-token"');

// if (token) {
//     window.axios.defaults.headers.common["X-CSRF-TOKEN"] = token.content;
// } else {
//     console.log("CSRF token not found");
// }
