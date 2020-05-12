import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Cards from '@/components/Cards/Cards.vue'
import CountryPicker from '@/components/CountryPicker/CountryPicker.vue'
import Chart from '@/components/Chart/Chart.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: App
  // },
  {
    path: '/cards',
    name: 'Cards',
    component: Cards,
  },
  {
    path: '/countries',
    name: 'CountryPicker',
    component: CountryPicker,
  },
  {
    path: '/chart',
    name: 'Chart',
    component: Chart,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
