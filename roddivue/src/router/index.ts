import {createWebHistory, createRouter} from "vue-router";
import LogInView from "@/Views/LogInView.vue";

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes:  [
        {
            path: "/login",
            name: "Login",
            component: LogInView
        },
    ],
});

export default router;