const asyncRoutes = [
  {
    path: '/system',
    component: 'Layout',
    redirect: '/system/user',
    title: '系统管理',
    icon: 'system',
    affix: false,
    children: [
      {
        path: 'user',
        component: 'system/user/index',
        name: 'User',
        title: '用户管理',
        icon: '',
        affix: false
      },
      {
        path: 'menu',
        component: 'system/menu/index',
        name: 'Menu',
        title: '菜单管理',
        icon: '',
        affix: false
      },
      {
        path: 'org',
        component: 'system/org/index',
        name: 'Org',
        title: '组织管理',
        icon: '',
        affix: false
      },
      {
        path: 'roles',
        component: 'system/roles/index',
        name: 'Roles',
        title: '角色管理',
        icon: '',
        affix: false
      }
    ]
  }
]

export default [
  // getModules
  {
    url: '/api/system/getModules',
    method: 'post',
    response: ({ body }) => {
      return {
        code: 200,
        data: asyncRoutes
      }
    }
  }
]
