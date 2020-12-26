import Home from "./components/Home.vue";
import AddBarang from "./components/home/AddBarang";
import EditBarang from "./components/home/EditBarang";
import DeleteBarang from "./components/home/DeleteBarang";
import ViewBarang from "./components/home/ViewBarang";

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
