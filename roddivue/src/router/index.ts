import {createWebHistory, createRouter} from "vue-router";
import LogInView from "@/Views/LogInView.vue";
import store from '../store';
import DashboardView from "@/Views/DashboardView.vue"

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes:  [
        {
            path: "/login",
            name: "Login",
            component: LogInView
        },
        {
            path: "/signup",
            name: "Signup",
            component: LogInView,
            props: {mode: "signup"}
        },
        {
            path: "/minside",
            name: "Min Side",
            component: DashboardView
        },

    ],
});

export default router;
