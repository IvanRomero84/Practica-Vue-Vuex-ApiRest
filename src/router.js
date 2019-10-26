import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Logout from './views/Logout.vue';
import store from './store'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        necesitaAuth: true,
      }
    },
    {
      path: '/leagues',
      name: 'leagues',
      component: () => import(/* webpackChunkName: "leagues" */ './views/Leagues.vue'),
      meta: {
        necesitaAuth: true,
      }
    },
    {
      path: '/tabla',
      name: 'tabla',
      component: () => import(/* webpackChunkName: "tabla" */ './views/Tabla.vue'),
      meta: {
        necesitaAuth: true,
      }
    },
    {
      path: '/club/:equipo?',
      name: 'club',
      component: () => import(/* webpackChunkName: "club" */ './views/Clubs.vue'),
      meta: {
        necesitaAuth: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log('[router] ', to.meta, to.name);
  const estoyLogeado = store.state.auth.isLogged;
  console.log(estoyLogeado)
  if (to.meta.necesitaAuth === true && !estoyLogeado) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router;