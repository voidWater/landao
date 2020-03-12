import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main from '@/pages/main'

import step1 from '@/pages/step1'
import step2 from '@/pages/step2'
import step3 from '@/pages/step3'

Vue.use(Router)

export default new Router({
  routes: [
	{
      path: '/index',
      name: 'main',
      component: main,
	  meta:{},
	  children:[

	  ]
    },
	{
	  path: '/step1',
	  name: 'step1',
	  component: step1
	},{
	  path: '/step2',
	  name: 'step2',
	  component: step2
	},{
	  path: '/step3',
	  name: 'step3',
	  component: step3
	}
  ]
})
