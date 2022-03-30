import Vue from "Vue";
import VueRouter from "vue-router"

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: "/", component: Home, name: "home.index" },
        { path: "/contatti", component: Contacts, name: "contacts.index" },
    ]
})

export default router;