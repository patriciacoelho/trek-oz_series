import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

import {
  HOME,
  SEARCH,
  TV_SHOW,
  SEASON,
  LIST,
  UPCOMING,
  PROFILE,
  CALLBACK,
} from '../constants/routes';

Vue.use(VueRouter);

const isAuthenticated = store.getters['auth/isAuthenticated'];

// eslint-disable-next-line no-unused-vars
const ifAuthenticated = (to, from, next) => {
  if (isAuthenticated) {
    next();
    return;
  }
  next('/profile');
};

const routes = [
  {
    path: CALLBACK.PATH,
    name: CALLBACK.NAME,
    component: () => import('../views/AuthCallback.vue'),
    props: (route) => ({
      ...route.query,
    }),
  },
  {
    path: HOME.PATH,
    name: HOME.NAME,
    component: () => import('../views/Home.vue'),
  },
  {
    path: PROFILE.PATH,
    name: PROFILE.NAME,
    component: () => import('../views/Profile.vue'),
  },
  {
    path: UPCOMING.PATH,
    name: UPCOMING.NAME,
    component: () => import('../views/Upcoming.vue'),
  },
  {
    path: SEARCH.PATH,
    name: SEARCH.NAME,
    component: () => import('../views/Search.vue'),
  },
  {
    path: TV_SHOW.PATH,
    name: TV_SHOW.NAME,
    component: () => import('../views/Details.vue'),
    props: true,
    children: [
      {
        path: SEASON.PATH,
        name: SEASON.NAME,
        component: () => import('../views/Details.vue'),
        props: true,
      },
    ],
  },
  {
    path: LIST.PATH,
    name: LIST.NAME,
    component: () => import('../views/List.vue'),
    props: true,
  },
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
