import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index.vue'
import Home from '../pages/home.vue'
Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: Index,
        redirect: '/home',
        children: [{
                path: '/home',
                name: 'home',
                component: Home,
            }, {
                path: '/resume',
                name: 'Resume',
                component: () =>
                    import ('../pages/resume.vue')
            }, {
                path: '/skill',
                name: 'skill',
                component: () =>
                    import ('../pages/skill.vue')
            },
            {
                path: '/products',
                name: 'products',
                component: () =>
                    import ('../pages/products.vue')
            }
        ]
    }]
})