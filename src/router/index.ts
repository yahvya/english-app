import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/home/HomeView.vue";
import DetailsView from "@/views/details/DetailsView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: "home",
            path: "/",
            component: HomeView,
            meta: {
                title: "M2 DFS"
            }
        },
        {
            name: "details",
            path: "/details/:name",
            component: () => DetailsView,
            meta: {
                title: "Plus de détails"
            }
        }
    ],
})

router.afterEach((config) => {
    document.title = config.meta.title as string
})

export default router
