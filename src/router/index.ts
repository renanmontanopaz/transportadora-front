import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/frete',
    name: 'Frete-List',
    component: () => import('../views/frete/FreteListView.vue')
  },
  {
    path: '/cadastrar-frete',
    name: 'Cadastro-Frete',
    component: () => import('../views/frete/CadastroFreteView.vue')
  },
  {
    path: '/em-transporte/:id',
    name: 'Em-Transporte',
    component: () => import('../views/frete/StatusFreteEmTransporte.vue')
  },
  {
    path: '/interrompido/:id',
    name: 'interrompido',
    component: () => import('../views/frete/StatusFreteInterrompido.vue')
  },
  {
    path: '/cancelado/:id',
    name: 'cancelado',
    component: () => import('../views/frete/StatusFreteCancelado.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
