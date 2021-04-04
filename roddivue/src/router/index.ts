import {createWebHistory, createRouter} from "vue-router";
import LogInView from "@/Views/LogInView.vue";
import AdminView from "@/Views/AdminView.vue"
import {store} from "@/store";
import UserView from "@/Views/UserView.vue";
import EstatesView from "@/components/EstatesView.vue";
import EstateView from "@/Views/EstateView.vue";
import ItemView from "@/Views/ItemView.vue";
import CreateItemView from "@/Views/CreateItemView.vue";
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
            props: {mode: "signup"}
        },
        {
            path: "/",
            name: "Admin",
            component: AdminView,
            meta: {
                requireLogin:true
                //Legge inn krav om administrator tilgang for å kunne gå til denne siden
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
            path: "/priorities",
            name: "Se prioriteringer",
            component: PrioritiesView,
            /*
            meta: {
                requireLogin:true
            },

             */
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
  } else {
    next()
  }
})

export default router;
