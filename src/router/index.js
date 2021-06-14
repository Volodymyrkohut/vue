import {createRouter, createWebHistory} from 'vue-router'
import Home from "../Home";
import Posts from "@/components/Posts/Posts";
import Detail from "@/Detail";
import NotFound from "@/NotFound";
import DetailLayout from "@/DetailLayout";
import PostDetail from "@/components/Posts/PostDetail";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        // beforeEnter: (to, from, next) => {
        //     next()
        // }
        //beforeRouteLeave
        //beforeRouteUpdate
    },
    {
        path: '/posts',
        name: 'Posts',
        component: Posts,
    },
    {
        path: '/posts/:id',
        name: 'PostsDetail',
        component: PostDetail,
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
                redirect: Posts,
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