import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import componentA from '@/components/componentA'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'componentA',
      component: componentA,
      
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
