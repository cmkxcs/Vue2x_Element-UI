import Vue from 'vue'
import VueRouter from 'vue-router'

//import Home from '../views/Home.vue'



Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'Main',
        component: () => import('../views/Main.vue'),
        children:[
            {
                path:'/home',
                name:'home',
                component: () => import('../views/home')
            },
            {
                path:'/user',
                name:'user',
                component: () => import('../views/user')
            }
        ]
    },
    {
        path:'/user',
        name:'User',
        component:() => import('../views/user/index.vue')
    }
]


const router = new VueRouter({
    mode:'history',
    //这里它接收一个数组
    routes

})
export default router



