const routers = [
    {
        path: '/showtime',
        component: (resolve) => require(['./views/overview/index'], resolve),
        meta: {title: '概览', keepAlive: false}
    },
  {
    path: '/login',
    component: (resolve) => require(['./views/common/login'], resolve),
    meta: {title: '登录', keepAlive: false}
  },
  {
    path: '/',
    component: (resolve) => require(['./views/index'], resolve),
    meta: {title: '', keepAlive: true},
    children: [
      {
        path: '/',
        component: (resolve) => require(['./views/overview/overview'], resolve),
        meta: {requireAuth: true, title: '概览', keepAlive: false}
      }, {
        path: '/overview',
        component: (resolve) => require(['./views/overview/overview'], resolve),
        meta: {requireAuth: true, title: '概览', keepAlive: false}
      }, {
        path: '/mapview',
        component: (resolve) => require(['./views/mapview/index'], resolve),
        meta: {requireAuth: true, title: '实时监控', keepAlive: true},
        children: [{
          path: '/mapview',
          component: (resolve) => require(['./views/mapview/map_status'], resolve),
          meta: {requireAuth: true, title: '实时监控', keepAlive: true}
        }]
      }, {
        path: '/aptitude/company',
        component: (resolve) => require(['./views/aptitude/index'], resolve),
        meta: {requireAuth: true, title: '资质管理', keepAlive: true},
        children: [{
          path: '/aptitude/company',
          component: (resolve) => require(['./views/aptitude/company'], resolve),
          meta: {requireAuth: true, title: '企业管理', keepAlive: true}
        },{
            path: '/aptitude/vehicle',
            component: (resolve) => require(['./views/aptitude/vehicle'], resolve),
            meta: {requireAuth: true, title: '车辆管理', keepAlive: true}
        }]
      }, {
            path: '/system',
            component: (resolve) => require(['./views/system/index'], resolve),
            meta: {requireAuth: true, title: '云图管理', keepAlive: true},
            children: [{
                path: '/system/cloud',
                component: (resolve) => require(['./views/system/cloud'], resolve),
                meta: {requireAuth: true, title: '云图管理', keepAlive: true}
            }]
        }
    ]
  },  {
        path: '/temp',
        component: (resolve) => require(['./views/temp/index'], resolve),
        meta: {title: '测试页面'}
    }]


export default routers