import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import step1 from '@/pages/step1'
import step2 from '@/pages/step2'
import step3 from '@/pages/step3'
import step4 from '@/pages/step4'
import step5 from '@/pages/step5'

import cl_1 from '@/pages/cl_1'
import cl_2 from '@/pages/cl_2'
import cl_3 from '@/pages/cl_3'
import cl_4 from '@/pages/cl_4'

Vue.use(Router)

export default new Router({
  routes: [
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
	},{
	  path: '/step4',
	  name: 'step4',
	  component: step4
	},{
	  path: '/step5',
	  name: 'step5',
	  component: step5
	},{
	  path: '/cl_1',
	  name: 'cl_1',
	  component: cl_1
	},{
	  path: '/cl_2',
	  name: 'cl_2',
	  component: cl_2
	},{
	  path: '/cl_3',
	  name: 'cl_3',
	  component: cl_3
	},{
    path: '/cl_4',
    name: 'cl_4',
    component: cl_4
  }
  ]
})
