import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Welcome from './components/Welcome.vue'
import Users from './components/user/Users.vue'
import Rights from './components/power/Rights.vue'
import Roles from './components/power/Roles.vue'
import Cate from './components/goods/Cate.vue'
import Params from './components/goods/Params.vue'
import Goods from './components/goods/Goods.vue'
import Add from './components/goods/Add.vue'
import Order from './components/order/Order.vue'
import Report from './components/report/Report.vue'
import './assets/css/global.css'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: './login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home,
    redirect:'/welcome',
    children:[{ path: '/welcome', component: Welcome},
    {path:'/users',component:Users},
    {path:'/roles',component:Roles},
    {path:'/rights',component:Rights},
    {path:'/categories',component:Cate},
    {path:'/params',component:Params},
     {path:'/goods',component:Goods},
     {path:'/goods/add',component:Add},
     {path:'/orders',component:Order},
     {path:'/reports',component:Report}
    ]
   }  
  ]
})

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
    //to将要访问的路径
    //from 代表从那个路径跳转过来
    //next是一个函数，表示放行
    // next()放行  next('/login')强制跳转
    if(to.path === '/login') return next()
    //获取token
    const tokenStr = window.sessionStorage.getItem('token')
    if(!tokenStr) return next('/login') 
    next()
})

export default router
