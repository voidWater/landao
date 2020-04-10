import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import step1 from '@/pages/step1'
import step2 from '@/pages/step2'
import step3 from '@/pages/step3'
import step4 from '@/pages/step4'
import step5 from '@/pages/step5'

import sub from '@/pages/sub'

import cl_1 from '@/pages/cl_1'
import cl_2 from '@/pages/cl_2'
import cl_3 from '@/pages/cl_3'
import cl_4 from '@/pages/cl_4'

import clx_1 from '@/pages/clx_1'
import clx_2 from '@/pages/clx_2'
import clx_3 from '@/pages/clx_3'
import clx_4 from '@/pages/clx_4'
import clhb_1 from '@/pages/clhb_1'
import clhb_2 from '@/pages/clhb_2'

import detail_1 from '@/pages/detail_1'
import detail_2 from '@/pages/detail_2'
import detail_3 from '@/pages/detail_3'
import detail_4 from '@/pages/detail_4'


Vue.use(Router)

export default new Router({
  routes: [
  {
     path: '/sub',
     name: 'sub',
     component: sub
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
  },{
    path: '/clx_1',
    name: 'clx_1',
    component: clx_1
  },{
    path: '/clx_2',
    name: 'clx_2',
    component: clx_2
  },{
    path: '/clx_3',
    name: 'clx_3',
    component: clx_3
  },{
    path: '/clx_4',
    name: 'clx_4',
    component: clx_4
  },{
    path: '/clhb_1',
    name: 'clhb_1',
    component: clhb_1
  },{
    path: '/clhb_2',
    name: 'clhb_2',
    component: clhb_2
  },{
    path: '/detail_1',
    name: 'detail_1',
    component: detail_1
  },{
    path: '/detail_2',
    name: 'detail_2',
    component: detail_2
  },{
    path: '/detail_3',
    name: 'detail_3',
    component: detail_3
  },{
    path: '/detail_4',
    name: 'detail_4',
    component: detail_4
  }
  ]
})
