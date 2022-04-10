import { createRouter, createWebHistory } from 'vue-router'
import PageHome from "@/views/PageHome";
import PageAbout from "@/views/PageAbout";
import PageProject from "@/views/PageProject";
import PageContact from "@/views/PageContact";
import PageService from "@/views/PageService";

const routes = [
  {
    path: '/',
    name: 'home',
    component: PageHome
  },
  {
    path: '/about',
    name: 'about',
    component: PageAbout
  },
  {
    path: '/project',
    name: 'project',
    component: PageProject
  },
  {
    path: '/service',
    name: 'service',
    component: PageService
  },
  {
    path: '/contact',
    name: 'contact',
    component: PageContact
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
