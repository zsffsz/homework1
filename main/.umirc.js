import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { 
      path: '/',
      component: '@/pages/index',
      routes: [
        {
          path: '/app1',
          microApp: 'child',
        },
        {
          path: '/app2',
          microApp: 'child2',
        },
      ],
    },
  ],
  fastRefresh: {},
  qiankun: {
    master: {
      apps: [],
    }
  }
});
