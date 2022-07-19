import { createRouter, createWebHistory } from 'vue-router';
import layout from '@/layout/index.vue';
import home from '@/pages/home/index.vue';

const routes = [
  {
    path: '/',
    name: 'asd',
    component: layout,
    children: [
      {
        path: '3d',
        component: () => import('@/pages/home/index.vue'),
      }
    ],
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export { router };
