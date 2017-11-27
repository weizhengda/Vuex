import Vue from 'vue'
import Router from 'vue-router'
import Count from '@/components/Count'
import Count2 from '@/components/Count2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Count',
      component: Count
    },
    {
      path: '/count',
      name: 'Count2',
      component: Count2
    }
  ]
})
