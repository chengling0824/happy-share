import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import index from '../views/index/index.vue'

import personalCenter from '../views/personalCenter/personalCenter.vue'
import collection from '../views/personalCenter/collection.vue'
import favourite from '../views/personalCenter/favourite.vue'
import personalWorks from '../views/personalCenter/personalWorks.vue'


import postWork from '../views/post/postWork.vue'
import worksIndex from '../views/works/works-index.vue'
import workDetails from '../views/works/works-details.vue'

import lineExtraction from '../views/lineExtraction.vue'

import news from '../views/news/news-index.vue'
import myFavour from '../views/news/myFavour.vue'
import myNotify from '../views/news/myNotify.vue'
import myRestore from '../views/news/myRestore.vue'




Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]


const routes = [
  {
    path: '/index',
    name:'index',
    component:index,
  },
  {
    path:'/personalCenter',
    name:'personalCenter',
    component:personalCenter,
    children: [
      {
        path: 'collection',
        component: collection,
      },
      {
        path: 'favourite',
        component: favourite,
      },
      {
        path: 'personalWorks',
        component: personalWorks,
      },
    ]
  },
  {
    path:'/worksIndex',
    name:'worksIndex',
    component:worksIndex,
  },
  {
    path:'/postWork',
    name:'postWork',
    component:postWork,
  },
  {
    path:'/workDetails',
    name:'workDetails',
    component:workDetails,
  },
  {
    path:'/lineExtraction',
    name:'lineExtraction',
    component:lineExtraction,
  },
  {
    path:'/news',
    name:'news',
    component:news,
    children:[
      {
        path:'myFavour',
        component:myFavour,
      },
      {
        path:'myNotify',
        component:myNotify,
      },
      {
        path:'myRestore',
        component:myRestore,
      },
    ]
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes:routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
