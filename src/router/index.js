import { createRouter, createWebHistory } from 'vue-router'

const Home = ()=> import('@/views/Home.vue')
const Guide = ()=> import('@/views/Guide.vue')
const Packages = ()=> import('@/views/Packages.vue')
const Rank = ()=> import('@/views/Rank.vue')
const Login = ()=> import('@/views/Login.vue')

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/guide',
    name: 'Guide',
    component: Guide
  },
  {
    path: '/packages',
    name: 'Packages',
    component: Packages
  },
  {
    path: '/rank',
    name: 'Rank',
    component: Rank
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
