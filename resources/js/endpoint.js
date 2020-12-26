export default {
    state: {
        api: "http://y.id:8010",
        // api: "http://47.254.248.35/api/api-mebel-apps/public/",
        sh_brg_masuk: "/barang/masuk/",
        input_brg_masuk: "/barang/masuk/input/",
        update_brg_masuk: "/barang/masuk/update/",
        delete_brg_masuk: "/barang/masuk/delete/",
        find_brg_masuk: "/barang/masuk/find/"
    },
    getters: {
        api(state) {
            return state.api;
        },
        sh_brg_masuk(state) {
            return state.api + state.sh_brg_masuk;
        },
        input_brg_masuk(state) {
            return state.api + state.input_brg_masuk;
        },
        update_brg_masuk(state) {
            return state.api + state.update_brg_masuk;
        },
        delete_brg_masuk(state) {
            return state.api + state.delete_brg_masuk;
        },
        find_brg_masuk(state) {
            return state.api + state.find_brg_masuk;
        }
    },
    mutations: {},
    actions: {}
};
