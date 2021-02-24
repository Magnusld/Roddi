import {createWebHistory, createRouter} from "vue-router";
import LogInView from "@/Views/LogInView.vue";
import DashboardView from "@/Views/DashboardView.vue"
import {store} from "@/store";
import UserView from "@/Views/UserView.vue";

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
            path: "/",
            name: "Min Side",
            component: DashboardView,
            meta: {
                requireLogin:true
            }
        },
        {
            path: "/user",
            name: "Bruker",
            component: UserView,
            meta: {
                requireLogin:true
            }
        },
    ],
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router;
