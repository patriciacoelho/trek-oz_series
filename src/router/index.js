import Vue from 'vue';
import VueRouter from 'vue-router';

import {
  HOME,
  SEARCH,
  TV_SHOW,
  SEASON,
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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
