import Home from "./components/Home.vue";
import AddBarang from "./components/crud/AddBarang";
import EditBarang from "./components/crud/EditBarang";
import DeleteBarang from "./components/crud/DeleteBarang";
import ViewBarang from "./components/crud/ViewBarang";

export const routes = [
    {
        name: "Home",
        path: "/",
        component: Home
    },
    {
        name: "Addbarang",
        path: "/barang/add",
        component: AddBarang
    },
    {
        name: "Editbarang",
        path: "/barang/edit/:id",
        component: EditBarang
    },
    {
        name: "Deletebarang",
        path: "/barang/delete",
        component: DeleteBarang
    },
    {
        name: "Viewbarang",
        path: "/barang/view/:id",
        component: ViewBarang
    }
];
