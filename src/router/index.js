import {createRouter, createWebHistory} from 'vue-router'
import Home from "../Home";
import About from "@/About";
import Detail from "@/Detail";
import NotFound from "@/NotFound";
import DetailLayout from "@/DetailLayout";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        // beforeEnter: (to, from, next) => {
        //     next()
        // }
        //beforeRouteLeave
        //beforeRouteUpdate
    },
    {
        path: '/detail',
        name: 'DetailLayout',
        component: DetailLayout,
        // NESTED ROUTES
        children: [
            {
                path: ':id',
                name: 'Detail',
                component: Detail,
            },
            // REDIRECT
            {
                path: '/:pathMatch(.*)*',
                redirect: About,
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    },
    // will match anything starting with `/user-` and put it under `$route
]
export default createRouter({
    history: createWebHistory(),
    routes,
})