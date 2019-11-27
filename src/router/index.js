import Vue from 'vue'
import VueRouter from 'vue-router'
import People from '@/views/People.vue'
import Person from '@/views/Person.vue'
import Film from '@/views/Film.vue'
import Planet from '@/views/Planet.vue'
import Species from '@/views/Species.vue'
import Vehicle from '@/views/Vehicle.vue'
// import Starship from '@/views/Starship.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'people',
    component: People
  },
  {
    path: '/people/:id',
    name: 'person',
    component: Person
  },
  {
    path: '/films/:id',
    name: 'film',
    component: Film
  },
  {
    path: '/planets/:id',
    name: 'planet',
    component: Planet
  },
  {
    path: '/species/:id',
    name: 'species',
    component: Species
  },
  {
    path: '/vehicles/:id',
    name: 'vehicle',
    component: Vehicle
  },
  {
    path: '/starships/:id',
    name: 'starship',
    component: Vehicle
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
