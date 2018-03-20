/* eslint-disable no-console */
import Vue from 'vue'
import Routers from './router'
import VueRouter from 'vue-router'
import App from './app.vue'
import './assets/css/ex_layout.css'
import iView from 'iview'
import Util from './libs/util'
import store from './libs/store'
import * as types from './libs/types'

Vue.use(VueRouter)
Vue.use(iView)

// 页面刷新时，重新赋值token
if (localStorage.$token) {
  store.commit(types.LOGIN, localStorage.$token)
  store.commit(types.USER, localStorage.$userstatus)
}

// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: Routers
}
const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  let loginDate = store.state.token ? JSON.parse(store.state.token).login_date : new Date().getTime()
  let Token = store.state.token ? JSON.parse(store.state.token).access_token : null
  let nowDate = new Date().getTime()
  let passTime = parseInt(nowDate - loginDate)
  let Days = passTime / (24 * 3600 * 1000)
  let AutoLogin = store.state.setting ? JSON.parse(store.state.setting).AutoLogin : true
  // if (to.matched.some(r => r.meta.requireAuth)) {
  //   if (Token && (Days < 14) && AutoLogin) {
  //     iView.LoadingBar.start()
  //     Util.title(to.meta.title)
  //     next()
  //   } else {
  //     localStorage.removeItem('$token')
  //     next('/login')
  //   }
  //} else {
    //iView.LoadingBar.start()
    //Util.title(to.meta.title)
  next()
  //}
})

router.afterEach(() => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})