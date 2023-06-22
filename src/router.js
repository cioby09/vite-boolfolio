import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import ProjectsList from "./pages/ProjectsList.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectsList,
        }
    ]


});

export { router };