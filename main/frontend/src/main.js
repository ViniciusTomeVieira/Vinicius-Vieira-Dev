import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// Temporário!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6IlZpbmljaXVzIEdtYWlsIiwiZW1haWwiOiJ2aW5ueS52aWVpcmE5OUBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjM3ODQ2NTQzLCJleHAiOjE2MzgxMDU3NDN9.gpwAsPXxOAqyZVdNE1N2uX7fCmM1zCR8ZtRaEbzqGrE'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')