import Vue from 'vue'
import Router from 'vue-router'
import UserProfile from "@/views/UserProfile";
import Home from "@/views/Home";
import ArticleList from "@/views/ArticleList";

Vue.use(Router);

export default new Router(
    {
        routes: [
            {
                path: '/user',
                name: 'UserProfile',
                component: UserProfile,
                hidden: true
            },
            {
                path: '/article',
                name: 'ArticleList',
                component: ArticleList,
                hidden: true
            },
            {
                path: '/*',
                name: 'Home',
                component: Home,
                hidden: true
            },
        ]
    }
)