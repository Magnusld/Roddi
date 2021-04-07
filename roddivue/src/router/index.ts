import {createWebHistory, createRouter} from "vue-router";
import LogInView from "@/Views/LogInView.vue";
import AdminView from "@/Views/AdminView.vue"
import {store} from "@/store";
import UserView from "@/Views/UserView.vue";
import EstatesView from "@/components/EstatesView.vue";
import EstateView from "@/Views/EstateView.vue";
import ItemView from "@/Views/ItemView.vue";
import CreateItemView from "@/Views/CreateItemView.vue";
import SettlementView from "@/Views/SettlementView.vue";
import ThrowView from "@/Views/ThrowView.vue";
import DonateView from "@/Views/DonateView.vue";
import PrioritiesView from "@/Views/PrioritiesView.vue";
import ErrorPage from "@/Views/ErrorPage.vue";

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
            props: {
                mode: "signup"
            }
        },
        {
            path: "/",
            name: "Admin",
            component: AdminView,
            meta: {
                requireLogin:true,
                requireAdmin:true
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
            path: "/createitem/:estateId",
            name: "Opprett eiendel",
            component: CreateItemView,
            meta: {
                requireLogin:true
            }
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
        },
        {
            path: "/settlement/:id",
            name: "Oppgjør",
            component: SettlementView,
        },
        {
            path: "/throw/:id",
            name: "Kastet",
            component: ThrowView,
        },
        {
            path: "/donate/:id",
            name: "Donert",
            component: DonateView,
        },
        {
            path: "/priorities",
            name: "Se prioriteringer",
            component: PrioritiesView,
            meta: {
                requireLogin:true
            },
        },
        {
            path: "/:pathMatch(.*)*",
            name: "404 Page Not Found",
            component: ErrorPage
        }
    ],
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
        next('/login')
    } else if (to.matched.some(record => record.meta.requireAdmin) && !store.state.user.isAdmin){
        next('/user')
    } else {
        next()
  }
})

export default router;
