import {createWebHistory, createRouter} from "vue-router";
import LogInView from "@/Views/LogInView.vue";
import DashboardView from "@/Views/DashboardView.vue"
import {store} from "@/store";

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
            component: DashboardView,
            meta: {
                requireLogin: true
            }
        },
    ],
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated ) {
        next('/login')
    } else {
        next()
    }
})

export default router;
