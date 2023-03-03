import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'


const isAuthenticatedGuard = async( to, from, next ) => {

  const { ok } = await store.dispatch('checkAuthentication')

  if ( ok ) next()
  else next({ name: 'login' })
}

const testChildRoute = (prop) => [
  {
    path: 'list',
    name: prop + '.list',
    component: () => import('../views/ListMoviesView.vue')
  },
  {
    path: 'detail/:id',
    name: prop + '.detail',
    component: () => import('../views/DetailMovieView.vue')
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
    path: '/',
    redirect:{ name: 'login' }
   },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/AuthView.vue')
    },
    {
      path: '/movies',
      beforeEnter: [ isAuthenticatedGuard ],
      redirect:{ name: 'movies.list' },
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
