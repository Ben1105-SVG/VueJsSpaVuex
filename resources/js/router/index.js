export const routes = [
    {
        name: 'login',
        path: '/',
        component: () => import('../views/Login')
    },
    {
        name: 'register',
        path: '/register',
        component: () => import('../views/Register')
    },
];
