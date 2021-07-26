import auth from '../middleware/auth'
import guest from '../middleware/guest'
export const routes = [
    {
        name: 'login',
        path: '/login/:id?',
        component: () => import('../views/Login'),
        meta: {
            middleware: [guest]
        },
        props: (route) => {
            const userId = Number.parseInt(route.params.id, 10)
                if (Number.isNaN(userId)) {
                    route.params.id = ''
                }
                return { userId }
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
        name: 'Not found',
        path: '*',
        component: () => import('../views/404-page'),
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
        name: 'UpdatePost',
        path: '/posts/edit/:id',
        component: () => import('../views/updatePost'),
        meta: {
            middleware: [auth]
        }
    },
    {
        name: 'home',
        path: '/',
        component: () => import('../views/Home'),
        meta: {
            middleware: [auth]
        }
    },
];
