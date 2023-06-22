import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import ProjectsList from "./pages/ProjectsList.vue";
import About from "./pages/About.vue"
import SingleProject from "./pages/SingleProject.vue"

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
        },
        {
            path: "/projects/:slug",
            name: "singleProject",
            component: SingleProject,
        },
        {
            path: "/aboutUs",
            name: "aboutUs",
            component: About,
        }
    ]


});

export { router };