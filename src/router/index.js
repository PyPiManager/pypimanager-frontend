import { createRouter, createWebHistory } from 'vue-router'

const Home = ()=> import('@/views/Home.vue')
const SearchResult = ()=> import('@/views/SearchResult.vue')
const Guide = ()=> import('@/views/Guide.vue')
const Packages = ()=> import('@/views/Packages.vue')
const Rank = ()=> import('@/views/Rank.vue')
const Manage = ()=> import('@/views/Manage.vue')
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
    path: '/result',
    name: 'SearchResult',
    component: SearchResult,
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
  },
  {
    path: '/manage',
    name: 'Manage',
    component: Manage,
    meta: {
      requireAuth: true,
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


// 守卫模式，貌似没生效
router.beforeEach(function(to, from, next) {
  const access_token = window.localStorage.getItem("access_token");
  // 判断当前URL是否需要登录
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (access_token === "") {
      // 跳转登录页面
      next({name: "Login"})
    } else {
      // 停留在当前URL
      next()
    }
  } else {
    next()
  }
})

export default router
