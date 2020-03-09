import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main from '@/pages/main'
import step from '@/pages/step'
import step1 from '@/pages/step1'

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
	  path: '/name',
	  name: 'step',
	  component: step
	},
	{
	  path: '/name1',
	  name: 'step1',
	  component: step1
	}	
  ]
})
