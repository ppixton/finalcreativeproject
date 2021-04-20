import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Table from '../views/Table.vue'
import Admin from '../views/Admin.vue'
import Edit from '../views/Edit.vue'

import ArtistTable from '../views/ArtistTable.vue'
import AddArtist from '../views/AddArtist.vue'
import ArtistItemTable from '../views/ArtistItemTable.vue'
import EditArtist from '../views/EditArtist.vue'

import Login from '../views/LoginPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/table',
    name: 'Table',
    component: Table
  },
  {
    path: '/artists',
    name: 'ArtistTable',
    component: ArtistTable
  },
  {
    path: '/admin',
    name: 'Admin',
    component : Admin
  },
  {
    path: '/addartist',
    name: 'AddArtist',
    component : AddArtist
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/edit/artist/:id',
    name: 'EditArtist',
    component: EditArtist
  },
  {
    path: '/view/:id',
    name: 'ArtistItemTable',
    component: ArtistItemTable
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
