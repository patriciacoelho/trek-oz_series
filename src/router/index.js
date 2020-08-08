import Vue from 'vue';
import VueRouter from 'vue-router';

import {
  HOME,
  SEARCH,
  DETAILS,
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
  {
    path: DETAILS.PATH,
    name: DETAILS.NAME,
    component: () => import('../views/Details.vue'),
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
