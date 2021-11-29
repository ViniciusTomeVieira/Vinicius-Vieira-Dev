import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// Temporário!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6IlZpbmljaXVzIEdtYWlsIiwiZW1haWwiOiJ2aW5ueS52aWVpcmE5OUBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjM4MTg2NTAzLCJleHAiOjE2Mzg3OTEzMDN9.e7f6ZaeQjUy80GlRzRAHoQ4kxAwUiCCjp_G0BlZ6CZE'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')