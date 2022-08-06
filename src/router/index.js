import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import SettingsView from '../views/SettingsView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    // component: () => import(/* webpackChunkName: "dashboard" */ '../views/DashboardView.vue'),
    children: [
      {
        path: '',
        component: SettingsView
        // component: import('../views/SettingsView.vue')
      },
      {
        path: 'statistic',
        component: import('../views/StatisticView.vue')
      },
      {
        path: 'deposits',
        component: import('../views/DepositsView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
