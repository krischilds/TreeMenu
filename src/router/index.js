import Vue from 'vue'
import About from '../views/About.vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Notes from '../views/Notes.vue'
import Note from '../views/Note.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  },
  {
    path: '/notes',
    name: 'Notes',
    component: Notes
  },
  {
    path: '/notes/:form',
    name: 'ViewNote',
    component: Note
  },
]

const router = new VueRouter({
  routes
})

export default router
