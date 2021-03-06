import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:id',
      name: 'project-view',
      component: () => import(/* webpackChunkName: 'project-view' */ '../views/ProjectView.vue'),
    },
  ],
});
