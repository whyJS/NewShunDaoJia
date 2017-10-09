import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
// 添加vuex
import store from './store'
// 解决移动端300毫秒延迟问题
import fastclick from 'fastclick'
// 引入图片懒加载插件
import VueLazyLoad from 'vue-lazyload'
// 调试
/* eslint-disable no-unused-vars */
import vConsole from 'vconsole'


fastclick.attach(document.body)
// 关闭生产模式下给出的提示
Vue.config.productionTip = false

// import mobShare from 'mobShare'
// 引入公共CSS样式
import './common/css/reset.css'

Vue.use(VueLazyLoad,{
	loading:require('./assets/logo.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
