import Vue from 'vue'
import Router from 'vue-router'
// import CategoryEdit from './views/CategoryEdit.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => import('./views/Main.vue'),
      children: [
        {
          path: '/categories/create',
          name: '新建分类',
          component: () => import('./views/CategoryEidt.vue')
        },
        {
          path: '/categories/list',
          name: '分类列表',
          component: () => import('./views/CategoryList.vue')
        },
        {
          path: '/categories/edit/:id',
          name: '分类编辑',
          props: true,
          component: () => import('./views/CategoryEidt.vue')
        },
        {
          path: '/items/create',
          name: '新建物品',
          component: () => import('./views/itemsEidt.vue')
        },
        {
          path: '/items/list',
          name: '物品列表',
          component: () => import('./views/itemsList.vue')
        },
        {
          path: '/items/edit/:id',
          name: '物品编辑',
          props: true,
          component: () => import('./views/itemsEidt.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
})
