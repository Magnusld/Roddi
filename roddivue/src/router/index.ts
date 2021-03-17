import {createWebHistory, createRouter} from "vue-router";
import LogInView from "@/Views/LogInView.vue";
import DashboardView from "@/Views/DashboardView.vue"
import {store} from "@/store";
import UserView from "@/Views/UserView.vue";
import EstatesView from "@/Views/EstatesView.vue";
import EstateView from "@/Views/EstateView.vue";
import ItemView from "@/Views/ItemView.vue";

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
        {
            path: "/estates",
            name: "Dødsbo",
            component: EstatesView,
            meta: {
                requireLogin:true
            }
        },
        {
            path: "/estate/:id",
            name: "DødsboSide",
            component: EstateView,
            meta: {
                requireLogin:true
            },
            props: route => ({
                id: +route.params.id
            })
        },
        {
            path: "/item/:id",
            name: "Gjenstand",
            component: ItemView,
            meta: {
                requireLogin:true
            },
            props: route => ({
                id: +route.params.id
            })
        }
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
