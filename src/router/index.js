import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TripListView from '../views/TripListView.vue'
import SingleTripView from '../views/SingleTripView.vue'
import TripEditView from '../views/TripEditView.vue'
import Discover from '../views/Discover.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.DATABASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/trip',
      name: 'trip',
      component: TripListView
    },
    {
      path: '/trip/:id',
      name: 'singleTrip',
      component: SingleTripView
    },
    {
      path: '/trip/update/:id',
      name: 'editTrip',
      component: TripEditView

    },
    {
      path: '/discover',
      name: 'discover',
      component: Discover
    },
   
    
    
  ]
})

export default router
