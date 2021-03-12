export default [
    {
        path: '/admin',
        name: 'AdminDashboard',
        meta: { layout: 'admin' },
        component: () => import(/* webpackChunkName: "admin-dashboard" */ 'src/web/views/Admin/AdminDashboardPage.vue')
    },
    {
        path: '/admin/users',
        name: 'AdminUsersPage',
        meta: { layout: 'admin' },
        component: () => import(/* webpackChunkName: "admin-users" */ 'src/web/views/Admin/Users/AdminUsersPage.vue')
    },
    {
        path: '/admin/users/:id',
        name: 'AdminUserEditPage',
        meta: { layout: 'admin' },
        component: () => import(/* webpackChunkName: "admin-users-edit" */ 'src/web/views/Admin/Users/AdminUserEditPage.vue')
    },
    {
        path: '/admin/users/create',
        name: 'AdminUserCreatePage',
        meta: { layout: 'admin' },
        component: () => import(/* webpackChunkName: "admin-users-create" */ 'src/web/views/Admin/Users/AdminUserCreatePage.vue')
    },
]