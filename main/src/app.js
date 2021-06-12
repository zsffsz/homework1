import req from './req';

export const qiankun = req().then(({ apps }) => {
  return ({
    // 注册子应用信息
    apps,
    lifeCycles: {
      afterMount: (props) => {
        console.log(props);
      },
    },
    routes: [
      {
        path: '/app2',
        microApp: 'child2',
      },
    ]
  })}
);