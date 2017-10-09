import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 引入生活服务组件
const HomePage = (resolve) => {
  import('../components/home-page/home-page.vue').then((module) => {
    resolve(module)
  })
}

// 引入在线商城组件
const OnlineStore = (resolve) => {
  import('../components/online-store/online-store.vue').then((module) => {
    resolve(module)
  })
}

// 引入订单组件
const Order = (resolve) => {
  import('../components/order/order.vue').then((module) => {
    resolve(module)
  })
}

// 引入我的组件
const Mine = (resolve) => {
  import('../components/mine/mine.vue').then((module) => {
    resolve(module)
  })
}

// 引入登录组件
const Login = (resolve) => {
  import('../components/login/login.vue').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
	  path:'/homepage',
	  component:HomePage,
    },
    {
	  path:'/onlinestore',
	  component:OnlineStore,
    },
    {
	  path:'/order',
	  component:Order,
    },
    {
	  path:'/mine',
	  component:Mine,
    },
    {
	  path:'/login',
	  component:Login,
    },

  ]
})
