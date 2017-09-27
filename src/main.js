// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

require('../node_modules/animate.css/animate.min.css')
require('../node_modules/magnific-popup/dist/magnific-popup.css')
require('./assets/css/custom.css')
require('./assets/css/style.css')
require('./assets/css/icomoon.css')

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// require('../node_modules/jquery/dist/jquery.min.js')
require('../node_modules/waypoint/dist/waypoint-0.2.8.min.js')
