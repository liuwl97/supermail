import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


//下面为懒加载形式
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Order = () => import('../views/order/Order.vue')
const Profile = () => import('../views/profile/Profile.vue')
const routes: Array<RouteRecordRaw> = [

  //tabbar
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component: Home
  },
  {
    path:'/category',
    component: Category
  },
  {
    path:'/order',
    component: Order
  },
  {
    path:'/profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

