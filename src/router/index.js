import Vue from 'vue';
import VueRouter from 'vue-router';

import {
  HOME,
  SEARCH,
} from '../constants/routes';

Vue.use(VueRouter);

const routes = [
  {
    path: HOME.PATH,
    name: HOME.NAME,
    component: () => import('../views/Home.vue'),
  },
  {
    path: SEARCH.PATH,
    name: SEARCH.NAME,
    component: () => import('../views/Search.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
