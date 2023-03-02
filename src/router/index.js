import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'


const isAuthenticatedGuard = async( to, from, next ) => {

  const { ok } = await store.dispatch('checkAuthentication')

  if ( ok ) next()
  else next({ name: 'login' })
}

const isLogged = async( to, from, next ) => {

  const { ok } = await store.dispatch('checkAuthentication')

  if ( ok && to.name === 'login' ) next({ name: 'movies.list'})
}

const testChildRoute = (prop) => [
  {
    path: 'list',
    name: prop + '.list',
    component: () => import('../views/ListMovies.vue')
  },
  {
    path: 'default',
    name: prop + '.default',
    component: () => import('../views/DefaultView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/login',
      name: 'login',
      beforeEnter: [ isLogged ],
      component: () => import('../views/AuthView.vue')
    },
    {
      path: '/movies',
      beforeEnter: [ isAuthenticatedGuard ],
      component: () => import('../layouts/MainLayout.vue'),
      children: testChildRoute('movies')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/PageNotFound.vue'),
    }
    
  ]
})

export default router
