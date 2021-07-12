import auth from '../middleware/auth'
import guest from '../middleware/guest'
export const routes = [
    {
        name: 'login',
        path: '/',
        component: () => import('../views/Login'),
        meta: {
            middleware: [guest]
        }
    },
    {
        name: 'register',
        path: '/register',
        component: () => import('../views/Register'),
        meta: {
            middleware: [guest]
        }
    },
    {
        name: 'posts',
        path: '/posts',
        component: () => import('../views/Posts'),
        meta: {
            middleware: [auth]
        }
    },
    {
        name: 'allPosts',
        path: '/posts/all',
        component: () => import('../views/allPosts'),
        meta: {
            middleware: [auth]
        }
    },
    {
        name: 'AddPost',
        path: '/posts/add',
        component: () => import('../views/addPost'),
        meta: {
            middleware: [auth]
        }
    },
    {
        name: 'home',
        path: '/home',
        component: () => import('../views/Home'),
        meta: {
            middleware: [auth]
        }
    },
];
