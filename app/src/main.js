import Vue from 'vue'
import App from './App'
import router from './router'

import VueLazyload from 'vue-lazyload'


Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('@/assets/logo.png'),
  loading: require('@/assets/images/loading.min.gif'),
  attempt: 1
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
