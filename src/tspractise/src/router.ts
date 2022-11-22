import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    component: () => import('./pages/Home.vue'),
    meta: {
        title: '首页',
        describe: ''
    }
}, {
    path: '/basictypes',
    component: () => import('./pages/BasicTypes.vue'),
    meta: {
        title: '基础类型',
        describe: ''
    }
}, {
    path: '/variabledeclarations',
    component: () => import('./pages/VariabledeClarations.vue'),
    meta: {
        title: '变量声明',
        describe: ''
    }
}, {
    path: '/interfaces',
    component: () => import('./pages/Interfaces.vue'),
    meta: {
        title: '接口',
        describe: ''
    }
}, {
    path: '/classes',
    component: () => import('./pages/Classes.vue'),
    meta: {
        title: '类',
        describe: ''
    }
}, {
    path: '/functions',
    component: () => import('./pages/Functions.vue'),
    meta: {
        title: '函数',
        describe: ''
    }
}];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;