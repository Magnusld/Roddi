import {createWebHistory, createRouter} from "vue-router";
import LogInView from "@/Views/LogInView.vue";
import SignUpView from "@/Views/SignUpView.vue";
import store from '../store'
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
            component: SignUpView
        },
    ],
});

export default router;
