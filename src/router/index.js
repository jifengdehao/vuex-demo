import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Count from '@/components/Count'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/Hello'
    },
    {
      path:'/Hello',
      name:"Hello",
      component:Hello
    },
    {
      path: '/Count',
      name: 'Count',
      component: Count
    }
  ]
})
