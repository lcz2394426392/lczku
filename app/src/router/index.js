import Vue from 'vue'
import Router from 'vue-router'


import index from '@/components/index'
import av from '@/components/av'
import bbs from '@/components/bbs'
import we from '@/components/we'


import allData from '@/components/avData/allData'
import goodData from '@/components/avData/goodData'
import weexData from '@/components/avData/weexData'
import shareData from '@/components/avData/shareData'
import askData from '@/components/avData/askData'
import jobData from '@/components/avData/jobData'


import details from '@/components/details/detailsData'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/index',
			name: 'index',
			component: index
		},
		{
			path: '/av/',
			name: 'av',
			component: av,
			children:[
				{
					path: 'allData',
					component: allData
				},
				{
					path: 'goodData',
					component: goodData
				},
				{
					path: 'weexData',
					component: weexData
				},
				{
					path: 'shareData',
					component: shareData
				},
				{
					path: 'askData',
					component: askData
				},
				{
					path: 'jobData',
					component: jobData
				},{
					path: 'details/:id',  // 详情路由
					name: 'detailsData',
					component: details
				},
				{
					path: '/av*',
					redirect: 'allData',
				},
				
				
			]
		},
		{
			path: '/bbs',
			name: 'bbs',
			component: bbs
		},
		{
			path: '/we',
			name: 'we',
			component: we
		},
		{
			path: '/*',
			redirect: '/index'
		}
	]
})
